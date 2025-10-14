(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/chang/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const commentsData = [
    {
        id: 1,
        text: "노래 너무 좋아요! 💖",
        user: "zllzl"
    },
    {
        id: 2,
        text: "오늘도 응원합니다 ✨",
        user: "Asdf"
    },
    {
        id: 3,
        text: "콘서트 꼭 갈게요!!! 🔥",
        user: "Ass"
    },
    {
        id: 4,
        text: "진짜 천재 아닌가요? 😍",
        user: "dfasd"
    },
    {
        id: 5,
        text: "새 앨범 기다리고 있어요 🎶",
        user: "dfddf"
    }
];
function Chang() {
    _s();
    const [activeComments, setActiveComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let i = 0;
    // 👇 새 좌표 생성 (겹치지 않게)
    const getNonOverlappingPosition = function(existing) {
        let maxAttempts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
        const padding = 60; // 최소 거리 (px) — 댓글 크기 감안
        let attempt = 0;
        while(attempt < maxAttempts){
            const x = Math.random() * window.innerWidth * 0.7;
            const y = Math.random() * window.innerHeight * 0.7;
            // 기존 댓글과의 거리 검사
            const overlap = existing.some((c)=>{
                const dx = c.x - x;
                const dy = c.y - y;
                return Math.sqrt(dx * dx + dy * dy) < padding;
            });
            if (!overlap) {
                return {
                    x,
                    y
                };
            }
            attempt++;
        }
        // 실패하면 그냥 랜덤 반환 (안 겹칠 확률이 높음)
        return {
            x: Math.random() * window.innerWidth * 0.7,
            y: Math.random() * window.innerHeight * 0.7
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chang.useEffect": ()=>{
            const interval = setInterval({
                "Chang.useEffect.interval": ()=>{
                    const randomComment = commentsData[i];
                    i++;
                    if (i === commentsData.length) {
                        i = 0;
                    }
                    const randomDuration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
                    setActiveComments({
                        "Chang.useEffect.interval": (prev)=>{
                            if (prev.length >= 10) return prev;
                            const pos = getNonOverlappingPosition(prev);
                            const newComment = {
                                id: Date.now(),
                                text: randomComment.text,
                                x: pos.x,
                                y: pos.y,
                                duration: randomDuration,
                                user: randomComment.user
                            };
                            // 댓글 추가
                            const updated = [
                                ...prev,
                                newComment
                            ];
                            // 개별 제거 예약
                            setTimeout({
                                "Chang.useEffect.interval": ()=>{
                                    setActiveComments({
                                        "Chang.useEffect.interval": (cur)=>cur.filter({
                                                "Chang.useEffect.interval": (c)=>c.id !== newComment.id
                                            }["Chang.useEffect.interval"])
                                    }["Chang.useEffect.interval"]);
                                }
                            }["Chang.useEffect.interval"], randomDuration);
                            return updated;
                        }
                    }["Chang.useEffect.interval"]);
                }
            }["Chang.useEffect.interval"], 2000);
            return ({
                "Chang.useEffect": ()=>clearInterval(interval)
            })["Chang.useEffect"];
        }
    }["Chang.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen  overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/hero/31.png",
                        alt: "chang",
                        className: "w-full h-full object-cover opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/chang/page.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/app/chang/page.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/chang/page.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            activeComments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute opacity-0",
                    style: {
                        left: comment.x,
                        top: comment.y,
                        animation: "fadeInOut ".concat(comment.duration, "ms ease-in-out forwards")
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white",
                            children: comment.text
                        }, void 0, false, {
                            fileName: "[project]/app/chang/page.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white text-right",
                            children: comment.user
                        }, void 0, false, {
                            fileName: "[project]/app/chang/page.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, comment.id, true, {
                    fileName: "[project]/app/chang/page.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("chat", {}, void 0, false, {
                fileName: "[project]/app/chang/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/chang/page.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
_s(Chang, "YtEv4lxko8lYYgVc9Hp3oEw8IAM=");
_c = Chang;
var _c;
__turbopack_context__.k.register(_c, "Chang");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_chang_page_tsx_986b9955._.js.map