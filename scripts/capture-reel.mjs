import { spawn } from 'node:child_process'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const outputDir = path.join(root, 'reel', 'assets')
const profileDir = path.join(process.env.TEMP, 'fromis9-reel-edge')
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const port = 9223

await mkdir(outputDir, { recursive: true })
await rm(profileDir, { recursive: true, force: true })

const edge = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
], { stdio: 'ignore', windowsHide: true })

async function waitForDebugger() {
    for (let attempt = 0; attempt < 50; attempt += 1) {
        try {
            const response = await fetch(`http://127.0.0.1:${port}/json/version`)
            if (response.ok) return
        } catch {}
        await new Promise((resolve) => setTimeout(resolve, 100))
    }
    throw new Error('Edge debugging endpoint did not start')
}

await waitForDebugger()

const tabResponse = await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:3010`, {
    method: 'PUT',
})
const tabInfo = await tabResponse.json()
const socket = new WebSocket(tabInfo.webSocketDebuggerUrl)
const pending = new Map()
let commandId = 0

await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true })
    socket.addEventListener('error', reject, { once: true })
})

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (!message.id || !pending.has(message.id)) return
    const { resolve, reject } = pending.get(message.id)
    pending.delete(message.id)
    if (message.error) reject(new Error(message.error.message))
    else resolve(message.result)
})

function send(method, params = {}) {
    const id = ++commandId
    socket.send(JSON.stringify({ id, method, params }))
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
}

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

async function setViewport(width, height, deviceScaleFactor = 1, mobile = false) {
    await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor,
        mobile,
    })
}

async function navigate(route) {
    await send('Page.navigate', { url: `http://localhost:3010${route}` })
    await delay(1800)
}

async function capture(fileName) {
    const { data } = await send('Page.captureScreenshot', {
        format: 'png',
        fromSurface: true,
        captureBeyondViewport: false,
    })
    await writeFile(path.join(outputDir, fileName), Buffer.from(data, 'base64'))
}

async function setPopupSeen() {
    await send('Runtime.evaluate', {
        expression: `localStorage.setItem('hasSeenDisclaimer', 'true')`,
    })
}

try {
    await send('Page.enable')
    await send('Runtime.enable')

    await setViewport(1440, 900)
    await navigate('/')
    await setPopupSeen()
    await navigate('/')
    await capture('home-desktop-01.png')

    for (let refresh = 2; refresh <= 4; refresh += 1) {
        await navigate('/')
        await capture(`home-desktop-0${refresh}.png`)
    }

    const cards = await send('Runtime.evaluate', {
        expression: `JSON.stringify(Array.from(document.querySelectorAll('main button')).map((element) => {
            const rect = element.getBoundingClientRect();
            return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        }))`,
        returnByValue: true,
    })
    const cardPositions = JSON.parse(cards.result.value)

    await send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: cardPositions[0].x,
        y: cardPositions[0].y,
    })
    for (let frame = 0; frame < 12; frame += 1) {
        await capture(`hover-${String(frame).padStart(2, '0')}.png`)
        await delay(90)
    }

    await setViewport(360, 640, 3, true)
    await navigate('/')
    await capture('home-mobile.png')

    await setViewport(1440, 900)
    await navigate('/heon')
    await capture('profile-jiheon.png')
    await navigate('/hayeong')
    await capture('profile-hayoung.png')
    await navigate('/discography')
    await capture('discography.png')
    await navigate('/about')
    await capture('about.png')
    await navigate('/fantube')
    await capture('fantube.png')
} finally {
    socket.close()
    edge.kill()
}

console.log(outputDir)
