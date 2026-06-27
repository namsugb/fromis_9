import type { RealtimeChannel } from '@supabase/supabase-js'
import { createClient } from './supabase/client'
import type { Comment } from './members'

const supabase = createClient()

const COMMENTS_TABLE = 'comments'

// 댓글 추가 (인증된 사용자만)
export const addComment = async (memberName: string, text: string, username: string): Promise<Comment | null> => {
    try {
        // 현재 사용자 세션 확인
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()

        if (sessionError || !session?.user) {
            console.error('User not authenticated:', sessionError)
            throw new Error('로그인이 필요합니다.')
        }

        const displayName = username || session.user.user_metadata?.nickname || session.user.email?.split('@')[0] || '익명'

        const { data, error } = await supabase
            .from(COMMENTS_TABLE)
            .insert({
                text,
                username: displayName,
                member: memberName
            })
            .select()
            .single()

        if (error) {
            console.error('Error adding comment:', error)
            return null
        }

        return data
    } catch (error) {
        console.error('Error adding comment:', error)
        throw error
    }
}

// 댓글 조회 (최신순)
export const getComments = async (memberName: string, limit: number = 50): Promise<Comment[]> => {
    try {
        const { data, error } = await supabase
            .from(COMMENTS_TABLE)
            .select('*')
            .eq('member', memberName)
            .order('created_at', { ascending: false })
            .limit(limit)

        if (error) {
            console.error('Error fetching comments:', error)
            return []
        }

        return data || []
    } catch (error) {
        console.error('Error fetching comments:', error)
        return []
    }
}

// 실시간 댓글 구독
export const subscribeToComments = (memberName: string, callback: (comment: Comment) => void) => {
    const channelName = `comments_${memberName}_changes`
    console.log(`Subscribing to ${COMMENTS_TABLE} (member=${memberName}) changes...`)

    const channel = supabase
        .channel(channelName)
        .on('postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: COMMENTS_TABLE,
                filter: `member=eq.${memberName}`
            },
            (payload) => {
                console.log('New comment received:', payload)
                callback(payload.new as Comment)
            }
        )
        .subscribe((status) => {
            console.log(`Subscription status for ${COMMENTS_TABLE} (member=${memberName}):`, status)
            if (status === 'SUBSCRIBED') {
                console.log(`Successfully subscribed to ${COMMENTS_TABLE}`)
            } else if (status === 'CHANNEL_ERROR') {
                console.error(`Failed to subscribe to ${COMMENTS_TABLE}`)
            }
        })

    return channel
}

// 구독 해제
export const unsubscribeFromComments = (subscription: RealtimeChannel) => {
    if (subscription) {
        supabase.removeChannel(subscription)
    }
}
