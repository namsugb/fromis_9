"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Chat from "@/components/common/chat";
import { getComments, subscribeToComments, unsubscribeFromComments } from "@/lib/comments";
import { MEMBERS, Comment, supabase } from "@/lib/supabase/supabase";

type ActiveComment = {
    id: number;
    text: string;
    x: number;
    y: number;
    duration: number;
    username: string;
};

export default function Nacco() {
    const [activeComments, setActiveComments] = useState<ActiveComment[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [subscription, setSubscription] = useState<ReturnType<typeof supabase.channel> | null>(null);
    const iRef = useRef(0);

    const getNonOverlappingPosition = (
        existing: ActiveComment[],
        maxAttempts = 20
    ) => {
        const padding = 100;
        let attempt = 0;

        while (attempt < maxAttempts) {
            const x = Math.random() * window.innerWidth * 0.7;
            const y = Math.random() * (window.innerHeight - 300) + 100;

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

        return {
            x: Math.random() * window.innerWidth * 0.7,
            y: Math.random() * (window.innerHeight - 500) + 300,
        };
    };

    useEffect(() => {
        const loadComments = async () => {
            const data = await getComments(MEMBERS.NACCO.name);
            setComments(data);
        };
        loadComments();
    }, []);

    useEffect(() => {
        console.log('Setting up realtime subscription...');
        const sub = subscribeToComments(MEMBERS.NACCO.name, (newComment) => {
            console.log('Received new comment via subscription:', newComment);
            setComments(prev => {
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

                const updated = [...prev, newComment];

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
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/hero/41.png"
                    alt="nacco"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>

            {activeComments.map((comment) => (
                <div
                    key={comment.id}
                    className="absolute opacity-0"
                    style={{
                        left: comment.x,
                        top: comment.y,
                        animation: `fadeInOut ${comment.duration}ms ease-in-out forwards`,
                    }}
                >
                    <p className="text-lg text-white">{comment.text}</p>
                    <p className="text-sm text-white text-right">{comment.username}</p>
                </div>
            ))}

            <Chat
                member={MEMBERS.NACCO}
                onCommentAdded={(newComment) => {
                    console.log('Comment added via callback:', newComment);
                    setComments(prev => {
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
