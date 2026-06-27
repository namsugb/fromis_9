import { createClient } from "../supabase/client"

export const signInWithKakao = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`
        }
    })


    return { data, error }
}
