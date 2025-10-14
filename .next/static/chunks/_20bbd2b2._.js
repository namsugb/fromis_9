(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/supabase.ts [app-client] (ecmascript)");
;
const addComment = async (member, text, username)=>{
    try {
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).insert({
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
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).select('*').order('created_at', {
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
    const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
    console.log("Subscribing to ".concat(tableName, " changes..."));
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("".concat(tableName, "_changes")).on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: tableName
    }, (payload)=>{
        console.log('New comment received:', payload);
        callback(payload.new);
    }).subscribe((status)=>{
        console.log("Subscription status for ".concat(tableName, ":"), status);
        if (status === 'SUBSCRIBED') {
            console.log("Successfully subscribed to ".concat(tableName));
        } else if (status === 'CHANNEL_ERROR') {
            console.error("Failed to subscribe to ".concat(tableName));
        }
    });
    return channel;
};
const unsubscribeFromComments = (subscription)=>{
    if (subscription) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Chat(param) {
    let { member = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMBERS"].CHANG, onCommentAdded } = param;
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!message.trim()) {
            alert("메시지를 입력해주세요!");
            return;
        }
        if (message.length > 40) {
            alert("메시지는 40자 이하로 입력해주세요!");
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addComment"])(member, message, username);
            if (result) {
                setMessage("");
                setUsername("");
                console.log("Comment added successfully:", result);
                // 즉시 UI 업데이트를 위한 콜백 호출
                if (onCommentAdded) {
                    onCommentAdded(result);
                }
                alert("댓글이 성공적으로 추가되었습니다!");
            } else {
                alert("댓글 추가에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("댓글 추가 중 오류가 발생했습니다.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex items-center justify-center gap-2",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5/6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "bg-white w-full rounded-lg p-2 border-2 text-black focus:outline-none",
                        placeholder: "이채영 사랑해",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/common/chat.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "bg-black text-white rounded-lg p-2 hover:bg-black/50 w-1/6",
                    children: "Send"
                }, void 0, false, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/chat.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/chat.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(Chat, "6oEdL26341kUv/emhphmfmwOcs8=");
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/nacco/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nacco
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/chat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Nacco() {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 더미 데이터
    const dummyComments = [
        {
            id: 1,
            message: "백지헌 언니 사랑해요! 항상 응원할게요 💕",
            author: "fromis9_fan_01",
            timestamp: "2분 전"
        },
        {
            id: 2,
            message: "새 앨범 너무 기대돼요! 언제 나와요?",
            author: "music_lover_99",
            timestamp: "5분 전"
        },
        {
            id: 3,
            message: "무대에서 빛나는 모습이 정말 아름다워요 ✨",
            author: "stage_queen",
            timestamp: "8분 전"
        },
        {
            id: 4,
            message: "힘든 일이 있어도 팬들이 있어요! 화이팅!",
            author: "support_team",
            timestamp: "12분 전"
        },
        {
            id: 5,
            message: "오늘도 수고하셨어요. 좋은 꿈 꾸세요 🌙",
            author: "night_owl",
            timestamp: "15분 전"
        },
        {
            id: 6,
            message: "fromis9와 함께한 시간이 가장 행복해요",
            author: "happy_fan",
            timestamp: "20분 전"
        },
        {
            id: 7,
            message: "언니 목소리 듣고 있으면 마음이 따뜻해져요",
            author: "warm_heart",
            timestamp: "25분 전"
        },
        {
            id: 8,
            message: "다음 콘서트에서 만나요! 기대돼요 🎵",
            author: "concert_goer",
            timestamp: "30분 전"
        }
    ];
    // 랜덤 위치 생성
    const getRandomPosition = ()=>{
        const positions = [
            {
                top: "20%",
                left: "10%"
            },
            {
                top: "15%",
                left: "70%"
            },
            {
                top: "35%",
                left: "10%"
            },
            {
                top: "40%",
                left: "80%"
            },
            {
                top: "60%",
                left: "15%"
            },
            {
                top: "65%",
                left: "75%"
            },
            {
                top: "80%",
                left: "25%"
            },
            {
                top: "85%",
                left: "85%"
            },
            {
                top: "25%",
                left: "50%"
            },
            {
                top: "55%",
                left: "50%"
            },
            {
                top: "75%",
                left: "50%"
            },
            {
                top: "45%",
                left: "30%"
            },
            {
                top: "50%",
                left: "70%"
            },
            {
                top: "30%",
                left: "25%"
            },
            {
                top: "70%",
                left: "60%"
            }
        ];
        return positions[Math.floor(Math.random() * positions.length)];
    };
    // 댓글 추가 및 제거
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nacco.useEffect": ()=>{
            const addComment = {
                "Nacco.useEffect.addComment": ()=>{
                    const randomComment = dummyComments[Math.floor(Math.random() * dummyComments.length)];
                    const uniqueId = Date.now() + Math.random(); // 고유한 ID 생성
                    const newComment = {
                        ...randomComment,
                        id: uniqueId,
                        position: getRandomPosition(),
                        isVisible: true
                    };
                    setComments({
                        "Nacco.useEffect.addComment": (prev)=>[
                                ...prev,
                                newComment
                            ]
                    }["Nacco.useEffect.addComment"]);
                    // 5초 후 댓글 제거 (고유한 ID로 식별)
                    setTimeout({
                        "Nacco.useEffect.addComment": ()=>{
                            setComments({
                                "Nacco.useEffect.addComment": (prev)=>prev.filter({
                                        "Nacco.useEffect.addComment": (comment)=>comment.id !== uniqueId
                                    }["Nacco.useEffect.addComment"])
                            }["Nacco.useEffect.addComment"]);
                        }
                    }["Nacco.useEffect.addComment"], 5000);
                }
            }["Nacco.useEffect.addComment"];
            // 1.5초마다 새 댓글 추가
            const interval = setInterval(addComment, 1500);
            return ({
                "Nacco.useEffect": ()=>clearInterval(interval)
            })["Nacco.useEffect"];
        }
    }["Nacco.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7202e1332078f970" + " " + "h-screen w-full bg-black relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7202e1332078f970" + " " + "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/hero/51.png",
                        alt: "nacco",
                        className: "jsx-7202e1332078f970" + " " + "w-full h-full object-cover opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/nacco/page.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7202e1332078f970" + " " + "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/app/nacco/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/nacco/page.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7202e1332078f970" + " " + "relative z-10 h-full w-full",
                children: comments.map((comment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: comment.position.top,
                            left: comment.position.left,
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '300px',
                            animationDelay: '0s',
                            animationDuration: '5s'
                        },
                        className: "jsx-7202e1332078f970" + " " + "absolute animate-commentFadeInOut",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7202e1332078f970" + " " + "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7202e1332078f970" + " " + "mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7202e1332078f970" + " " + "text-white text-lg font-light leading-relaxed drop-shadow-lg",
                                        children: [
                                            '"',
                                            comment.message,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nacco/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/nacco/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7202e1332078f970" + " " + "text-gray-300 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7202e1332078f970" + " " + "font-medium",
                                            children: comment.author
                                        }, void 0, false, {
                                            fileName: "[project]/app/nacco/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7202e1332078f970" + " " + "mx-2",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/app/nacco/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7202e1332078f970" + " " + "text-gray-400",
                                            children: comment.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/app/nacco/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/nacco/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/nacco/page.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this)
                    }, "".concat(comment.id, "-").concat(index), false, {
                        fileName: "[project]/app/nacco/page.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/nacco/page.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7202e1332078f970" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 right-0 z-10 w-1/2 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/nacco/page.tsx",
                    lineNumber: 172,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/nacco/page.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7202e1332078f970",
                children: "@keyframes commentFadeInOut{0%{opacity:0;transform:translate(-50%,-50%)scale(.8)translateY(20px)}15%{opacity:1;transform:translate(-50%,-50%)scale(1)translateY(0)}70%{opacity:1;transform:translate(-50%,-50%)scale(1)translateY(0)}85%{opacity:.7;transform:translate(-50%,-50%)scale(.95)translateY(0)}95%{opacity:.3;transform:translate(-50%,-50%)scale(.9)translateY(-10px)}to{opacity:0;transform:translate(-50%,-50%)scale(.8)translateY(-20px)}}.animate-commentFadeInOut.jsx-7202e1332078f970{animation:5s ease-in-out forwards commentFadeInOut}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/nacco/page.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
_s(Nacco, "ByfV/t0DOiJY0nGyfgV+6QjIggQ=");
_c = Nacco;
var _c;
__turbopack_context__.k.register(_c, "Nacco");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_20bbd2b2._.js.map