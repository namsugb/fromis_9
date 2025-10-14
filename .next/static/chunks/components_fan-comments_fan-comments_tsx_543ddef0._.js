(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/fan-comments/fan-comments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FanComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FanComments() {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentCommentIndex, setCurrentCommentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 더미 데이터
    const dummyComments = [
        {
            id: 1,
            message: "이채영 언니 사랑해요! 항상 응원할게요 💕",
            author: "fromis9_fan_01",
            timestamp: "2분 전",
            avatar: "/hero/11.png"
        },
        {
            id: 2,
            message: "새 앨범 너무 기대돼요! 언제 나와요?",
            author: "music_lover_99",
            timestamp: "5분 전",
            avatar: "/hero/21.png"
        },
        {
            id: 3,
            message: "무대에서 빛나는 모습이 정말 아름다워요 ✨",
            author: "stage_queen",
            timestamp: "8분 전",
            avatar: "/hero/31.png"
        },
        {
            id: 4,
            message: "힘든 일이 있어도 팬들이 있어요! 화이팅!",
            author: "support_team",
            timestamp: "12분 전",
            avatar: "/hero/41.png"
        },
        {
            id: 5,
            message: "오늘도 수고하셨어요. 좋은 꿈 꾸세요 🌙",
            author: "night_owl",
            timestamp: "15분 전",
            avatar: "/hero/51.png"
        },
        {
            id: 6,
            message: "fromis9와 함께한 시간이 가장 행복해요",
            author: "happy_fan",
            timestamp: "20분 전",
            avatar: "/hero/12.png"
        },
        {
            id: 7,
            message: "언니 목소리 듣고 있으면 마음이 따뜻해져요",
            author: "warm_heart",
            timestamp: "25분 전",
            avatar: "/hero/22.png"
        },
        {
            id: 8,
            message: "다음 콘서트에서 만나요! 기대돼요 🎵",
            author: "concert_goer",
            timestamp: "30분 전",
            avatar: "/hero/32.png"
        }
    ];
    // 댓글 애니메이션 효과
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FanComments.useEffect": ()=>{
            const interval = setInterval({
                "FanComments.useEffect.interval": ()=>{
                    setCurrentCommentIndex({
                        "FanComments.useEffect.interval": (prev)=>(prev + 1) % dummyComments.length
                    }["FanComments.useEffect.interval"]);
                }
            }["FanComments.useEffect.interval"], 3000); // 3초마다 댓글 변경
            return ({
                "FanComments.useEffect": ()=>clearInterval(interval)
            })["FanComments.useEffect"];
        }
    }["FanComments.useEffect"], []);
    // 댓글 추가 효과
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FanComments.useEffect": ()=>{
            if (currentCommentIndex < dummyComments.length) {
                const timer = setTimeout({
                    "FanComments.useEffect.timer": ()=>{
                        setComments({
                            "FanComments.useEffect.timer": (prev)=>[
                                    ...prev,
                                    dummyComments[currentCommentIndex]
                                ]
                        }["FanComments.useEffect.timer"]);
                    }
                }["FanComments.useEffect.timer"], 500);
                return ({
                    "FanComments.useEffect": ()=>clearTimeout(timer)
                })["FanComments.useEffect"];
            }
        }
    }["FanComments.useEffect"], [
        currentCommentIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ef51fb8983ba907" + " " + "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ef51fb8983ba907" + " " + "absolute inset-0 opacity-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-200 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "absolute top-1/4 right-20 w-24 h-24 rounded-full bg-purple-200 animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-200 animate-ping"
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-yellow-200 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ef51fb8983ba907" + " " + "relative z-10 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-ef51fb8983ba907" + " " + "text-4xl font-bold text-gray-800 mb-4",
                                children: "💌 팬들의 마음 💌"
                            }, void 0, false, {
                                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-ef51fb8983ba907" + " " + "text-lg text-gray-600",
                                children: "fromis9에게 전하는 사랑의 메시지"
                            }, void 0, false, {
                                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "flex justify-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ef51fb8983ba907" + " " + "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ef51fb8983ba907" + " " + "w-48 h-48 rounded-full overflow-hidden shadow-2xl animate-pulse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/hero/52.png",
                                        alt: "fromis9",
                                        width: 192,
                                        height: 192,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ef51fb8983ba907" + " " + "absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ef51fb8983ba907" + " " + "text-white text-sm",
                                        children: "💕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "max-w-4xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ef51fb8983ba907" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: comments.map((comment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: "".concat(index * 0.2, "s"),
                                        animationFillMode: 'both'
                                    },
                                    className: "jsx-ef51fb8983ba907" + " " + "bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-1000 ".concat(index === comments.length - 1 ? 'animate-slideInUp scale-105' : 'hover:scale-105 hover:shadow-xl'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-ef51fb8983ba907" + " " + "flex items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-ef51fb8983ba907" + " " + "w-12 h-12 rounded-full overflow-hidden mr-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: comment.avatar || "/hero/11.png",
                                                        alt: comment.author,
                                                        width: 48,
                                                        height: 48,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-ef51fb8983ba907",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-ef51fb8983ba907" + " " + "font-semibold text-gray-800",
                                                            children: comment.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-ef51fb8983ba907" + " " + "text-sm text-gray-500",
                                                            children: comment.timestamp
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-ef51fb8983ba907" + " " + "text-gray-700 leading-relaxed",
                                            children: comment.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                            lineNumber: 170,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-ef51fb8983ba907" + " " + "flex justify-end mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-ef51fb8983ba907" + " " + "text-2xl animate-bounce",
                                                children: "💖"
                                            }, void 0, false, {
                                                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                            lineNumber: 175,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, comment.id, true, {
                                    fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/fan-comments/fan-comments.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ef51fb8983ba907" + " " + "text-center mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-ef51fb8983ba907" + " " + "text-xl text-gray-600 mb-4",
                                children: "계속해서 사랑의 메시지가 전달되고 있어요..."
                            }, void 0, false, {
                                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ef51fb8983ba907" + " " + "flex justify-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ef51fb8983ba907" + " " + "w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: '0.1s'
                                        },
                                        className: "jsx-ef51fb8983ba907" + " " + "w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: '0.2s'
                                        },
                                        className: "jsx-ef51fb8983ba907" + " " + "w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/fan-comments/fan-comments.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/fan-comments/fan-comments.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ef51fb8983ba907",
                children: "@keyframes slideInUp{0%{opacity:0;transform:translateY(30px)scale(.9)}to{opacity:1;transform:translateY(0)scale(1)}}.animate-slideInUp.jsx-ef51fb8983ba907{animation:.8s ease-out slideInUp}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/fan-comments/fan-comments.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s(FanComments, "hGJa5ROW2gMVA0I+8i4U6sPTD0g=");
_c = FanComments;
var _c;
__turbopack_context__.k.register(_c, "FanComments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_fan-comments_fan-comments_tsx_543ddef0._.js.map