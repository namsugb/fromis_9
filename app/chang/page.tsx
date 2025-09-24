"use client";

import { useState, useEffect } from "react";
import Chat from "@/components/common/chat";

interface Comment {
    id: number;
    message: string;
    author: string;
    timestamp: string;
}

interface CommentWithPosition extends Comment {
    position: {
        top: string;
        left: string;
    };
    isVisible: boolean;
}


export default function Chang() {

    const [comments, setComments] = useState<CommentWithPosition[]>([]);

    // 더미 데이터
    const dummyComments: Comment[] = [
        {
            id: 1,
            message: "이채영 언니 사랑해요! 항상 응원할게요 💕",
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
    const getRandomPosition = () => {
        const positions = [
            { top: "20%", left: "10%" },
            { top: "15%", left: "70%" },
            { top: "35%", left: "10%" },
            { top: "40%", left: "80%" },
            { top: "60%", left: "15%" },
            { top: "65%", left: "75%" },
            { top: "80%", left: "25%" },
            { top: "85%", left: "85%" },
            { top: "25%", left: "50%" },
            { top: "55%", left: "50%" },
            { top: "75%", left: "50%" },
            { top: "45%", left: "30%" },
            { top: "50%", left: "70%" },
            { top: "30%", left: "25%" },
            { top: "70%", left: "60%" }
        ];
        return positions[Math.floor(Math.random() * positions.length)];
    };

    // 댓글 추가 및 제거
    useEffect(() => {
        const addComment = () => {
            const randomComment = dummyComments[Math.floor(Math.random() * dummyComments.length)];
            const uniqueId = Date.now() + Math.random(); // 고유한 ID 생성
            const newComment: CommentWithPosition = {
                ...randomComment,
                id: uniqueId, // 고유한 ID 사용
                position: getRandomPosition(),
                isVisible: true
            };

            setComments(prev => [...prev, newComment]);

            // 5초 후 댓글 제거 (고유한 ID로 식별)
            setTimeout(() => {
                setComments(prev => prev.filter(comment => comment.id !== uniqueId));
            }, 5000);
        };

        // 1.5초마다 새 댓글 추가
        const interval = setInterval(addComment, 1500);

        return () => clearInterval(interval);
    }, []);




    return (
        <div className="h-screen w-full bg-black relative overflow-hidden">
            {/* 배경 이미지 */}
            <div className="absolute inset-0">
                <img
                    src="/hero/31.png"
                    alt="fromis9"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>

            {/* 댓글들이 나타나는 영역 */}
            <div className="relative z-10 h-full w-full">
                {comments.map((comment, index) => (
                    <div
                        key={`${comment.id}-${index}`}
                        className="absolute animate-commentFadeInOut"
                        style={{
                            top: comment.position.top,
                            left: comment.position.left,
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '300px',
                            animationDelay: '0s',
                            animationDuration: '5s'
                        }}
                    >
                        <div className="text-center">
                            {/* 댓글 내용 */}
                            <div className="mb-3">
                                <p className="text-white text-lg font-light leading-relaxed drop-shadow-lg">
                                    "{comment.message}"
                                </p>
                            </div>

                            {/* 작성자 정보 */}
                            <div className="text-gray-300 text-sm">
                                <span className="font-medium">{comment.author}</span>
                                <span className="mx-2">•</span>
                                <span className="text-gray-400">{comment.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 채팅 창 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 z-10 w-1/2 py-4">
                <Chat />
            </div>

            {/* 커스텀 CSS 애니메이션 */}
            <style jsx>{`
                @keyframes commentFadeInOut {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8) translateY(20px);
                    }
                    15% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1) translateY(0);
                    }
                    70% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1) translateY(0);
                    }
                    85% {
                        opacity: 0.7;
                        transform: translate(-50%, -50%) scale(0.95) translateY(0);
                    }
                    95% {
                        opacity: 0.3;
                        transform: translate(-50%, -50%) scale(0.9) translateY(-10px);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8) translateY(-20px);
                    }
                }
                .animate-commentFadeInOut {
                    animation: commentFadeInOut 5s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}
