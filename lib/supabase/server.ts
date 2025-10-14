// lib/supabase/server.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";



/**
 * 서버 환경(Next.js 15 App Router)에서
 * Supabase 클라이언트를 생성하는 함수입니다.
 * 
 * next/headers의 cookies()는 이제 Promise를 반환하므로
 * async-await 구조로 변경해야 합니다.
 */
export async function createClient() {
    // next/headers의 cookies()는 비동기 함수입니다.
    const cookieStore = await cookies();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    // createServerClient는 SSR 환경에서 Supabase 인증 세션을 유지하도록 도와줍니다.
    return createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
            getAll() {
                // 현재 요청의 모든 쿠키를 가져옵니다.
                return cookieStore.getAll();
            },
            setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
                try {
                    // 쿠키를 반복문으로 설정합니다.
                    cookiesToSet.forEach(({ name, value, options }) => {
                        cookieStore.set(name, value, options);
                    });
                } catch {
                    // Server Component에서 호출된 경우엔 무시해도 됩니다.
                    // middleware나 route handler에서 세션이 자동으로 새로고침됩니다.
                }
            },
        },
    });
}





