import { spawn } from 'node:child_process'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const captureRoot = path.join(root, 'reel', 'captures')
const homeDir = path.join(captureRoot, 'home')
const headerIconsDir = path.join(captureRoot, 'header-icons')
const fantubeItemsDir = path.join(captureRoot, 'fantube-items')
const memberPagesDir = path.join(captureRoot, 'member-pages')
const aboutDir = path.join(captureRoot, 'about')
const discographyDir = path.join(captureRoot, 'discography')
const profileDir = path.join(process.env.TEMP, 'fromis9-stills-edge')
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const port = 9224

await rm(captureRoot, { recursive: true, force: true })
await Promise.all([
    mkdir(homeDir, { recursive: true }),
    mkdir(headerIconsDir, { recursive: true }),
    mkdir(fantubeItemsDir, { recursive: true }),
    mkdir(memberPagesDir, { recursive: true }),
    mkdir(aboutDir, { recursive: true }),
    mkdir(discographyDir, { recursive: true }),
])
await rm(profileDir, { recursive: true, force: true })

const edge = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    '--window-size=1440,900',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
], { stdio: 'ignore', windowsHide: true })

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
        const response = await fetch(`http://127.0.0.1:${port}/json/version`)
        if (response.ok) break
    } catch {}
    if (attempt === 49) throw new Error('Edge debugging endpoint did not start')
    await delay(100)
}

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

async function navigate(route, wait = 1500) {
    await send('Page.navigate', { url: `http://localhost:3010${route}` })
    await delay(wait)
}

async function evaluate(expression) {
    return send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
}

async function capture(directory, fileName) {
    const { data } = await send('Page.captureScreenshot', {
        format: 'png',
        fromSurface: true,
        captureBeyondViewport: false,
    })
    await writeFile(path.join(directory, fileName), Buffer.from(data, 'base64'))
}

async function captureElement(directory, fileName, expression, padding = 0, scale = 2) {
    const result = await evaluate(`(() => {
        const element = ${expression};
        if (!element) throw new Error('Capture element not found');
        const rect = element.getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    })()`)
    const rect = result.result.value
    const x = Math.max(0, rect.x - padding)
    const y = Math.max(0, rect.y - padding)
    const width = Math.min(1440 - x, rect.width + padding * 2)
    const height = Math.min(900 - y, rect.height + padding * 2)
    const { data } = await send('Page.captureScreenshot', {
        format: 'png',
        fromSurface: true,
        clip: { x, y, width, height, scale },
    })
    await writeFile(path.join(directory, fileName), Buffer.from(data, 'base64'))
}

const homeMembers = ['JIHEON', 'JIWON', 'HAYOUNG', 'NAGYUNG', 'CHAEYOUNG']
const memberPages = [
    { name: 'jiheon', route: '/heon' },
    { name: 'jiwon', route: '/magun' },
    { name: 'hayoung', route: '/hayeong' },
    { name: 'nagyung', route: '/nacco' },
    { name: 'chaeyoung', route: '/chang' },
]
const aboutMembers = ['hayoung', 'jiwon', 'chaeyoung', 'nakyung', 'jiheon']

try {
    await send('Page.enable')
    await send('Runtime.enable')
    await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false,
    })

    await navigate('/')
    await evaluate(`localStorage.setItem('hasSeenDisclaimer', 'true')`)
    await navigate('/')

    const headerIcons = [
        { file: '01-youtube.png', selector: `document.querySelector('a[href*="youtube.com"]')` },
        { file: '02-instagram.png', selector: `document.querySelector('a[href*="instagram.com"]')` },
        { file: '03-x.png', selector: `document.querySelector('a[href*="x.com"]')` },
        { file: '04-login.png', selector: `document.querySelector('div.absolute.top-0 button')` },
        { file: '05-menu.png', selector: `document.querySelector('svg.lucide-menu').parentElement` },
    ]
    for (const icon of headerIcons) {
        await captureElement(headerIconsDir, icon.file, icon.selector, 18, 3)
    }

    for (let index = 0; index < homeMembers.length; index += 1) {
        await evaluate(`(() => {
            const grid = document.querySelector('main > div');
            const target = Array.from(grid.querySelectorAll('button'))
                .find((button) => button.querySelector('strong').textContent.trim() === '${homeMembers[index]}');
            grid.prepend(target);

            const layouts = [
                ['col-span-2', 'sm:col-span-6', 'md:col-span-5', 'md:row-span-2'],
                ['col-span-1', 'sm:col-span-3', 'md:col-span-3'],
                ['col-span-1', 'sm:col-span-3', 'md:col-span-4'],
                ['col-span-1', 'sm:col-span-3', 'md:col-span-4'],
                ['col-span-1', 'sm:col-span-3', 'md:col-span-3'],
            ];
            const layoutClasses = [...new Set(layouts.flat())];

            Array.from(grid.querySelectorAll('button')).forEach((button, buttonIndex) => {
                button.classList.remove(...layoutClasses);
                button.classList.add(...layouts[buttonIndex]);
                const images = button.querySelectorAll('img');
                images[0].style.opacity = '1';
                images[1].style.opacity = '0';
            });
        })()`)
        await delay(250)
        const fileName = homeMembers[index].toLowerCase()
        await capture(homeDir, `${String(index + 1).padStart(2, '0')}-${fileName}-normal.png`)

        await evaluate(`(() => {
            const images = document.querySelector('main button').querySelectorAll('img');
            images[0].style.opacity = '0';
            images[1].style.opacity = '1';
        })()`)
        await delay(300)
        await capture(homeDir, `${String(index + 1).padStart(2, '0')}-${fileName}-hover.png`)
    }

    for (let index = 0; index < memberPages.length; index += 1) {
        const member = memberPages[index]
        await navigate(member.route)
        await capture(
            memberPagesDir,
            `${String(index + 1).padStart(2, '0')}-${member.name}.png`,
        )
    }

    await navigate('/about')
    for (let index = 0; index < aboutMembers.length; index += 1) {
        await evaluate(`Array.from(document.querySelectorAll('button'))
            .find((button) => button.textContent.trim() === '${aboutMembers[index].toUpperCase()}')
            .click()`)
        await delay(450)
        await capture(aboutDir, `${String(index + 1).padStart(2, '0')}-${aboutMembers[index]}.png`)
    }

    await navigate('/discography')
    const discographyScenes = ['title', 'from-our-twenties', 'from', 'supersonic']
    for (let index = 0; index < discographyScenes.length; index += 1) {
        await evaluate(`(() => {
            const container = document.querySelector('.smooth-snap-container');
            container.scrollTo({ top: container.clientHeight * ${index}, behavior: 'instant' });
        })()`)
        await delay(700)
        await capture(discographyDir, `${String(index + 1).padStart(2, '0')}-${discographyScenes[index]}.png`)
    }

    await navigate('/fantube')
    const fantubeItems = ['youtube-2', 'youtube-5', 'youtube-66', 'youtube-4']
    for (let index = 0; index < fantubeItems.length; index += 1) {
        await captureElement(
            fantubeItemsDir,
            `${String(index + 1).padStart(2, '0')}-${fantubeItems[index]}.png`,
            `document.querySelectorAll('div.grid img')[${index}]`,
            0,
            2,
        )
    }
} finally {
    socket.close()
    edge.kill()
}

console.log(captureRoot)
