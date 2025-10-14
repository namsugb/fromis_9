import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { type EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? '/'
    const error = searchParams.get('error')
    const error_code = searchParams.get('error_code')
    const error_description = searchParams.get('error_description')

    // URL에서 직접 에러가 전달된 경우 (예: 만료된 링크)
    if (error || error_code) {
        console.error('Auth callback URL error:', { error, error_code, error_description })

        // 에러 정보를 홈 페이지로 전달
        const errorParams = new URLSearchParams()
        if (error) errorParams.set('error', error)
        if (error_code) errorParams.set('error_code', error_code)
        if (error_description) errorParams.set('error_description', error_description)

        return NextResponse.redirect(`${origin}/?${errorParams.toString()}`)
    }

    const supabase = await createClient(await cookies())

    // 이메일 확인을 위한 토큰 해시 처리 (PKCE flow)
    if (token_hash && type) {
        try {
            const { data, error } = await supabase.auth.verifyOtp({
                type,
                token_hash,
            })

            if (error) {
                console.error('OTP verification error:', error)
                return NextResponse.redirect(`${origin}/?error=otp_verification_error&error_description=${encodeURIComponent(error.message)}`)
            }

            if (data?.user) {
                console.log('User verified successfully via OTP:', data.user.email)
                // 성공적으로 인증되었으면 지정된 페이지 또는 홈으로 리다이렉트
                return NextResponse.redirect(`${origin}${next}?message=authenticated`)
            }
        } catch (err) {
            console.error('OTP verification exception:', err)
            return NextResponse.redirect(`${origin}/?error=otp_verification_exception&error_description=Unexpected+error+during+verification`)
        }
    }

    // OAuth 코드 교환 (OAuth flow)
    if (code) {
        try {
            console.log('Processing OAuth code:', code.substring(0, 10) + '...')
            const { data, error } = await supabase.auth.exchangeCodeForSession(code)

            if (error) {
                console.error('Auth callback error details:', {
                    message: error.message,
                    status: error.status,
                    name: error.name
                })

                // 더 구체적인 에러 처리
                if (error.message.includes('expired') || error.message.includes('invalid')) {
                    return NextResponse.redirect(`${origin}/?error=auth_callback_error&error_code=token_expired&error_description=Authentication+token+has+expired`)
                } else {
                    return NextResponse.redirect(`${origin}/?error=auth_callback_error&error_description=${encodeURIComponent(error.message)}`)
                }
            }

            // 사용자 정보 확인
            if (data?.user) {
                console.log('User authenticated successfully:', {
                    id: data.user.id,
                    email: data.user.email,
                    provider: data.user.app_metadata?.provider
                })
                return NextResponse.redirect(`${origin}${next}?message=authenticated`)
            } else {
                console.error('No user data received from auth exchange')
                return NextResponse.redirect(`${origin}/?error=auth_callback_error&error_description=No+user+data+received`)
            }
        } catch (err) {
            console.error('Auth callback exception details:', {
                error: err,
                stack: err instanceof Error ? err.stack : 'No stack trace'
            })
            return NextResponse.redirect(`${origin}/?error=auth_callback_exception&error_description=Unexpected+error+during+authentication`)
        }
    }

    // 성공적으로 인증되었으면 홈으로 리다이렉트
    return NextResponse.redirect(`${origin}${next}?message=authenticated`)
}
