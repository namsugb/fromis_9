"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Chat from "@/components/common/chat";
import { getComments, subscribeToComments, unsubscribeFromComments } from "@/lib/comments";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { MEMBERS, Comment } from "@/lib/members";

type ActiveComment = {
    id: number;
    text: string;
    x: number;
    y: number;
    duration: number; // 유지 시간 (ms)
    username: string;
};

export default function Hayeong() {
    const [activeComments, setActiveComments] = useState<ActiveComment[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [subscription, setSubscription] = useState<RealtimeChannel | null>(null);
    const iRef = useRef(0);

    // 👇 새 좌표 생성 (겹치지 않게)
    const getNonOverlappingPosition = (
        existing: ActiveComment[],
        maxAttempts = 20
    ) => {
        const padding = 100; // 최소 거리 (px) — 댓글 크기 감안
        let attempt = 0;

        while (attempt < maxAttempts) {
            const x = Math.random() * window.innerWidth * 0.7;
            const y = Math.random() * (window.innerHeight - 300) + 100; // 위아래 100px씩 여백

            // 기존 댓글과의 거리 검사
            const overlap = existing.some((c) => {
                const dx = c.x - x;
                const dy = c.y - y;
                return Math.sqrt(dx * dx + dy * dy) < padding;
            });

            if (!overlap) {
                return { x, y };
            }
            attempt++;
        }

        // 실패하면 그냥 랜덤 반환 (안 겹칠 확률이 높음)
        return {
            x: Math.random() * window.innerWidth * 0.7,
            y: Math.random() * (window.innerHeight - 500) + 300, // 위아래 100px씩 여백
        };
    };

    // Supabase에서 댓글 로드
    useEffect(() => {
        const loadComments = async () => {
            const data = await getComments(MEMBERS.HAYEONG.name);
            setComments(data);
        };
        loadComments();
    }, []);

    // 실시간 댓글 구독
    useEffect(() => {
        console.log('Setting up realtime subscription...');
        const sub = subscribeToComments(MEMBERS.HAYEONG.name, (newComment) => {
            console.log('Received new comment via subscription:', newComment);
            setComments(prev => {
                // 중복 방지
                const exists = prev.some(comment => comment.id === newComment.id);
                if (exists) {
                    console.log('Comment already exists, skipping...');
                    return prev;
                }
                console.log('Adding new comment to state');
                return [newComment, ...prev];
            });
        });
        setSubscription(sub);

        return () => {
            console.log('Cleaning up subscription...');
            unsubscribeFromComments(sub);
        };
    }, []);

    // 댓글을 화면에 표시하는 로직
    useEffect(() => {
        if (comments.length === 0) return;

        const interval = setInterval(() => {
            if (iRef.current >= comments.length) {
                iRef.current = 0;
            }

            const randomComment = comments[iRef.current];
            iRef.current++;

            const randomDuration =
                Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;

            setActiveComments((prev) => {
                if (prev.length >= 10) return prev;

                const pos = getNonOverlappingPosition(prev);

                const newComment: ActiveComment = {
                    id: randomComment.id,
                    text: randomComment.text,
                    x: pos.x,
                    y: pos.y,
                    duration: randomDuration,
                    username: randomComment.username,
                };

                // 댓글 추가
                const updated = [...prev, newComment];

                // 개별 제거 예약
                setTimeout(() => {
                    setActiveComments((cur) =>
                        cur.filter((c) => c.id !== newComment.id)
                    );
                }, randomDuration);

                return updated;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [comments]);

    return (
        <div className="relative w-screen h-screen  overflow-hidden">

            {/* 배경 이미지 */}
            <div className="absolute inset-0">
                <Image
                    src="/hero/11.png"
                    alt="hayeong"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>

            {activeComments.map((comment) => (
                <div
                    key={comment.id}
                    className="absolute opacity-0 max-w-[80vw] md:max-w-md"
                    style={{
                        left: comment.x,
                        top: comment.y,
                        animation: `fadeInOut ${comment.duration}ms ease-in-out forwards`,
                    }}
                >
                    <p className="text-sm sm:text-base md:text-lg text-white break-words">{comment.text}</p>
                    <p className="text-xs sm:text-sm text-white text-right">{comment.username}</p>
                </div>
            ))}

            <Chat
                member={MEMBERS.HAYEONG}
                onCommentAdded={(newComment) => {
                    console.log('Comment added via callback:', newComment);
                    setComments(prev => {
                        // 중복 방지
                        const exists = prev.some(comment => comment.id === newComment.id);
                        if (exists) {
                            return prev;
                        }
                        return [newComment, ...prev];
                    });
                }}
            />

        </div>
    );
}
