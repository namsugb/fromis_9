"use client";

import { useState } from "react";
import { addComment } from "@/lib/comments";
import { Member, MEMBERS } from "@/lib/supabase/supabase";
import { useAuth } from "@/lib/contexts/AuthContext";

interface ChatProps {
    member?: Member;
    onCommentAdded?: (comment: any) => void;
}

export default function Chat({ member, onCommentAdded }: ChatProps) {
    const [message, setMessage] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const { user, loading, signIn } = useAuth();

    console.log(user);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            const result = await addComment(member?.name as any, message, user.user_metadata.preferred_username || user.user_metadata.name);
            if (result) {
                setMessage("");
                console.log("Comment added successfully:", result);
                // 즉시 UI 업데이트를 위한 콜백 호출
                if (onCommentAdded) {
                    onCommentAdded(result);
                }
                // 성공 팝업 표시
                setShowSuccessPopup(true);
                setTimeout(() => {
                    setShowSuccessPopup(false);
                }, 3000);
            } else {
                alert("댓글 추가에 실패했습니다.");
            }
        } catch (error: any) {
            console.error("Error adding comment:", error);
            if (error.message === '로그인이 필요합니다.') {
                alert("로그인이 필요합니다!");
            } else {
                alert("댓글 추가 중 오류가 발생했습니다.");
            }
        }
    }

    if (loading) {
        return (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4">
                <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-gray-600">로딩 중...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4">
                <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-gray-600 mb-2">댓글을 작성하려면 로그인이 필요합니다</p>
                    <button
                        onClick={signIn}
                        className="bg-yellow-400 text-black rounded-lg px-4 py-2 hover:bg-yellow-500"
                    >
                        카카오 로그인
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* 성공 팝업 */}
            {showSuccessPopup && (
                <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
                    <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">댓글이 성공적으로 작성되었습니다!</span>
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-1/3 py-4">
                <form className="flex items-center justify-center gap-2" onSubmit={handleSubmit}>
                    <div className="w-5/6">
                        <input
                            type="text"
                            className="bg-white w-full rounded-lg p-2 border-2 text-black focus:outline-none"
                            placeholder={member?.chat}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-black text-white rounded-lg p-2 hover:bg-black/50 w-1/6">Send</button>
                </form>
            </div>
        </>
    )
}