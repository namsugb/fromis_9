(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/common/chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Chat() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("submit");
        setMessage("");
        const response = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({
                message
            })
        });
        console.log(await response.json());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-1/2 -translate-x-1/2 right-0 z-10 w-1/3 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex  items-center justify-center gap-2",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-white w-full rounded-lg p-2 border-2 border-gray-300 text-black",
                    placeholder: "이채영 사랑해",
                    value: message,
                    onChange: (e)=>setMessage(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: " bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600",
                    children: "Send"
                }, void 0, false, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/chat.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/chat.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(Chat, "EiOGSxO4GWQlH0sM782nQ9JwuAs=");
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEMBERS",
    ()=>MEMBERS,
    "getCommentsTableName",
    ()=>getCommentsTableName,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hekcbsqjnwkitbkaccau.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhla2Nic3FqbndraXRia2FjY2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDQ3NzYsImV4cCI6MjA3NDM4MDc3Nn0.AmTdYgAwO4ij61JX9vvvyawc95JbLX0TY_7JmnyZmg8");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const MEMBERS = {
    CHANG: 'chang',
    HAYEONG: 'hayeong',
    HEON: 'heon',
    MAGUN: 'magun',
    NACCO: 'nacco'
};
const getCommentsTableName = (member)=>{
    return "".concat(member, "_comments");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/comments.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addComment",
    ()=>addComment,
    "getComments",
    ()=>getComments,
    "subscribeToComments",
    ()=>subscribeToComments,
    "unsubscribeFromComments",
    ()=>unsubscribeFromComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
const addComment = async (member, text, username)=>{
    try {
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).insert({
            text,
            username
        }).select().single();
        if (error) {
            console.error('Error adding comment:', error);
            return null;
        }
        return data;
    } catch (error) {
        console.error('Error adding comment:', error);
        return null;
    }
};
const getComments = async function(member) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
    try {
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).select('*').order('created_at', {
            ascending: false
        }).limit(limit);
        if (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
        return data || [];
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};
const subscribeToComments = (member, callback)=>{
    const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("".concat(tableName, "_changes")).on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: tableName
    }, (payload)=>{
        callback(payload.new);
    }).subscribe();
};
const unsubscribeFromComments = (subscription)=>{
    if (subscription) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/chang/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Chang() {
    _s();
    const [activeComments, setActiveComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let i = 0;
    // 👇 새 좌표 생성 (겹치지 않게)
    const getNonOverlappingPosition = function(existing) {
        let maxAttempts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
        const padding = 800; // 최소 거리 (px) — 댓글 크기 감안
        let attempt = 0;
        while(attempt < maxAttempts){
            const x = Math.random() * window.innerWidth * 0.7;
            const y = Math.random() * (window.innerHeight - 300) + 100; // 위아래 100px씩 여백
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
            y: Math.random() * (window.innerHeight - 200) + 100
        };
    };
    // Supabase에서 댓글 로드
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chang.useEffect": ()=>{
            const loadComments = {
                "Chang.useEffect.loadComments": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComments"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMBERS"].CHANG, 20);
                    setComments(data);
                }
            }["Chang.useEffect.loadComments"];
            loadComments();
        }
    }["Chang.useEffect"], []);
    // 실시간 댓글 구독
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chang.useEffect": ()=>{
            const sub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToComments"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMBERS"].CHANG, {
                "Chang.useEffect.sub": (newComment)=>{
                    setComments({
                        "Chang.useEffect.sub": (prev)=>[
                                newComment,
                                ...prev
                            ]
                    }["Chang.useEffect.sub"]);
                }
            }["Chang.useEffect.sub"]);
            setSubscription(sub);
            return ({
                "Chang.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsubscribeFromComments"])(sub);
                }
            })["Chang.useEffect"];
        }
    }["Chang.useEffect"], []);
    // 댓글을 화면에 표시하는 로직
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chang.useEffect": ()=>{
            if (comments.length === 0) return;
            const interval = setInterval({
                "Chang.useEffect.interval": ()=>{
                    if (i >= comments.length) {
                        i = 0;
                    }
                    const randomComment = comments[i];
                    i++;
                    const randomDuration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
                    setActiveComments({
                        "Chang.useEffect.interval": (prev)=>{
                            if (prev.length >= 10) return prev;
                            const pos = getNonOverlappingPosition(prev);
                            const newComment = {
                                id: randomComment.id,
                                text: randomComment.text,
                                x: pos.x,
                                y: pos.y,
                                duration: randomDuration,
                                username: randomComment.username
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
    }["Chang.useEffect"], [
        comments
    ]);
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
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/app/chang/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/chang/page.tsx",
                lineNumber: 126,
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
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white text-right",
                            children: comment.username
                        }, void 0, false, {
                            fileName: "[project]/app/chang/page.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    ]
                }, comment.id, true, {
                    fileName: "[project]/app/chang/page.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                member: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMBERS"].CHANG
            }, void 0, false, {
                fileName: "[project]/app/chang/page.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/chang/page.tsx",
        lineNumber: 123,
        columnNumber: 9
    }, this);
}
_s(Chang, "gBDLCceuE+p+hg5fTI1d+yLaIUs=");
_c = Chang;
var _c;
__turbopack_context__.k.register(_c, "Chang");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e114165a._.js.map