"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase/supabase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 현재 세션 확인
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };

        getSession();

        // 인증 상태 변화 감지
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const signIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        });
        if (error) {
            console.error('Sign in error:', error);
            alert('로그인에 실패했습니다.');
        }
    };

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Sign out error:', error);
                // 에러가 있어도 로컬 상태는 초기화하고 페이지 새로고침
                setUser(null);
                // 로컬 스토리지 클리어
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('supabase.auth.token');
                    window.location.href = '/';
                }
            } else {
                // 성공적으로 로그아웃
                setUser(null);
                if (typeof window !== 'undefined') {
                    window.location.href = '/';
                }
            }
        } catch (err) {
            console.error('Sign out exception:', err);
            // 예외가 발생해도 로컬 상태는 초기화하고 페이지 새로고침
            setUser(null);
            if (typeof window !== 'undefined') {
                localStorage.clear();
                window.location.href = '/';
            }
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
