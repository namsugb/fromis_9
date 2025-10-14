import { supabase, Comment, getCommentsTableName } from './supabase/supabase'
import { MEMBERS } from './member'

// 댓글 추가 (인증된 사용자만)
export const addComment = async (member: keyof typeof MEMBERS, text: string, username: string): Promise<Comment | null> => {
    try {
        // 현재 사용자 세션 확인
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()

        if (sessionError || !session?.user) {
            console.error('User not authenticated:', sessionError)
            throw new Error('로그인이 필요합니다.')
        }

        const tableName = getCommentsTableName(member)
        const { data, error } = await supabase
            .from(tableName)
            .insert({
                text,
                username: username || session.user.email?.split('@')[0] || '익명',
                user_id: session.user.id // 사용자 ID 추가
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
export const getComments = async (member: keyof typeof MEMBERS, limit: number = 50): Promise<Comment[]> => {
    try {
        const tableName = getCommentsTableName(member)
        const { data, error } = await supabase
            .from(tableName)
            .select('*')
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
export const subscribeToComments = (member: keyof typeof MEMBERS, callback: (comment: Comment) => void) => {
    const tableName = getCommentsTableName(member)
    console.log(`Subscribing to ${tableName} changes...`)

    const channel = supabase
        .channel(`${tableName}_changes`)
        .on('postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: tableName
            },
            (payload) => {
                console.log('New comment received:', payload)
                callback(payload.new as Comment)
            }
        )
        .subscribe((status) => {
            console.log(`Subscription status for ${tableName}:`, status)
            if (status === 'SUBSCRIBED') {
                console.log(`Successfully subscribed to ${tableName}`)
            } else if (status === 'CHANNEL_ERROR') {
                console.error(`Failed to subscribe to ${tableName}`)
            }
        })

    return channel
}

// 구독 해제
export const unsubscribeFromComments = (subscription: any) => {
    if (subscription) {
        supabase.removeChannel(subscription)
    }
}
