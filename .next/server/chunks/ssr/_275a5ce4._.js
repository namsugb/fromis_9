module.exports = [
"[project]/lib/comments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/supabase.ts [app-ssr] (ecmascript)");
;
const addComment = async (member, text, username)=>{
    try {
        // 현재 사용자 세션 확인
        const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
        if (sessionError || !session?.user) {
            console.error('User not authenticated:', sessionError);
            throw new Error('로그인이 필요합니다.');
        }
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(tableName).insert({
            text,
            username: username || session.user.email?.split('@')[0] || '익명',
            user_id: session.user.id // 사용자 ID 추가
        }).select().single();
        if (error) {
            console.error('Error adding comment:', error);
            return null;
        }
        return data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};
const getComments = async (member, limit = 50)=>{
    try {
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(tableName).select('*').order('created_at', {
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
    const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCommentsTableName"])(member);
    console.log(`Subscribing to ${tableName} changes...`);
    const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel(`${tableName}_changes`).on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: tableName
    }, (payload)=>{
        console.log('New comment received:', payload);
        callback(payload.new);
    }).subscribe((status)=>{
        console.log(`Subscription status for ${tableName}:`, status);
        if (status === 'SUBSCRIBED') {
            console.log(`Successfully subscribed to ${tableName}`);
        } else if (status === 'CHANNEL_ERROR') {
            console.error(`Failed to subscribe to ${tableName}`);
        }
    });
    return channel;
};
const unsubscribeFromComments = (subscription)=>{
    if (subscription) {
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
    }
};
}),
"[project]/components/common/chat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/comments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Chat({ member, onCommentAdded }) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuccessPopup, setShowSuccessPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user, loading, signIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    console.log(user);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // 로그인 상태 확인
        if (!user) {
            alert("댓글을 작성하려면 로그인이 필요합니다!");
            return;
        }
        if (!message.trim()) {
            alert("메시지를 입력해주세요!");
            return;
        }
        if (message.length > 40) {
            alert("메시지는 40자 이하로 입력해주세요!");
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addComment"])(member?.name, message, user.user_metadata.preferred_username || user.user_metadata.name);
            if (result) {
                setMessage("");
                console.log("Comment added successfully:", result);
                // 즉시 UI 업데이트를 위한 콜백 호출
                if (onCommentAdded) {
                    onCommentAdded(result);
                }
                // 성공 팝업 표시
                setShowSuccessPopup(true);
                setTimeout(()=>{
                    setShowSuccessPopup(false);
                }, 3000);
            } else {
                alert("댓글 추가에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            if (error.message === '로그인이 필요합니다.') {
                alert("로그인이 필요합니다!");
            } else {
                alert("댓글 추가 중 오류가 발생했습니다.");
            }
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "로딩 중..."
                }, void 0, false, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/chat.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/common/chat.tsx",
            lineNumber: 68,
            columnNumber: 13
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-2",
                        children: "댓글을 작성하려면 로그인이 필요합니다"
                    }, void 0, false, {
                        fileName: "[project]/components/common/chat.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: signIn,
                        className: "bg-yellow-400 text-black rounded-lg px-4 py-2 hover:bg-yellow-500",
                        children: "카카오 로그인"
                    }, void 0, false, {
                        fileName: "[project]/components/common/chat.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/chat.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/common/chat.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showSuccessPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 z-50 animate-slide-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/components/common/chat.tsx",
                                lineNumber: 99,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/chat.tsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "댓글이 성공적으로 작성되었습니다!"
                        }, void 0, false, {
                            fileName: "[project]/components/common/chat.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/chat.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex items-center justify-center gap-2",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5/6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "bg-white w-full rounded-lg p-2 border-2 text-black focus:outline-none",
                                placeholder: member?.chat,
                                value: message,
                                onChange: (e)=>setMessage(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/common/chat.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/chat.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "bg-black text-white rounded-lg p-2 hover:bg-black/50 w-1/6",
                            children: "Send"
                        }, void 0, false, {
                            fileName: "[project]/components/common/chat.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/chat.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/chat.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/nacco/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/chat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/comments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Chang() {
    const [activeComments, setActiveComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    let i = 0;
    // 👇 새 좌표 생성 (겹치지 않게)
    const getNonOverlappingPosition = (existing, maxAttempts = 20)=>{
        const padding = 100; // 최소 거리 (px) — 댓글 크기 감안
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
            y: Math.random() * (window.innerHeight - 500) + 300
        };
    };
    // Supabase에서 댓글 로드
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadComments = async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComments"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MEMBERS"].NACCO.name);
            setComments(data);
        };
        loadComments();
    }, []);
    // 실시간 댓글 구독
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('Setting up realtime subscription...');
        const sub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToComments"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MEMBERS"].NACCO.name, (newComment)=>{
            console.log('Received new comment via subscription:', newComment);
            setComments((prev)=>{
                // 중복 방지
                const exists = prev.some((comment)=>comment.id === newComment.id);
                if (exists) {
                    console.log('Comment already exists, skipping...');
                    return prev;
                }
                console.log('Adding new comment to state');
                return [
                    newComment,
                    ...prev
                ];
            });
        });
        setSubscription(sub);
        return ()=>{
            console.log('Cleaning up subscription...');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$comments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsubscribeFromComments"])(sub);
        };
    }, []);
    // 댓글을 화면에 표시하는 로직
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (comments.length === 0) return;
        const interval = setInterval(()=>{
            if (i >= comments.length) {
                i = 0;
            }
            const randomComment = comments[i];
            i++;
            const randomDuration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
            setActiveComments((prev)=>{
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
                setTimeout(()=>{
                    setActiveComments((cur)=>cur.filter((c)=>c.id !== newComment.id));
                }, randomDuration);
                return updated;
            });
        }, 2000);
        return ()=>clearInterval(interval);
    }, [
        comments
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen  overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/hero/41.png",
                        alt: "chang",
                        className: "w-full h-full object-cover opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/nacco/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/app/nacco/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/nacco/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            activeComments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute opacity-0",
                    style: {
                        left: comment.x,
                        top: comment.y,
                        animation: `fadeInOut ${comment.duration}ms ease-in-out forwards`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white",
                            children: comment.text
                        }, void 0, false, {
                            fileName: "[project]/app/nacco/page.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white text-right",
                            children: comment.username
                        }, void 0, false, {
                            fileName: "[project]/app/nacco/page.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this)
                    ]
                }, comment.id, true, {
                    fileName: "[project]/app/nacco/page.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$chat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                member: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MEMBERS"].NACCO,
                onCommentAdded: (newComment)=>{
                    console.log('Comment added via callback:', newComment);
                    setComments((prev)=>{
                        // 중복 방지
                        const exists = prev.some((comment)=>comment.id === newComment.id);
                        if (exists) {
                            return prev;
                        }
                        return [
                            newComment,
                            ...prev
                        ];
                    });
                }
            }, void 0, false, {
                fileName: "[project]/app/nacco/page.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/nacco/page.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_275a5ce4._.js.map