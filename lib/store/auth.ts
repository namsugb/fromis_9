import { supabase } from "../supabase/browser"

export const signInWithKakao = async () => {

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`
        }
    })


    return { data, error }
}