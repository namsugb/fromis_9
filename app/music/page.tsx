"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

export default function Music() {
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!comment.trim()) {
            alert("댓글을 입력해주세요!")
            return
        }

        setLoading(true)

        try {
            const { data, error } = await supabase
                .from('coment')
                .insert({ comment: comment })
                .select()

            if (error) {
                console.error('Error inserting comment:', error)
                alert(`댓글 전송 실패: ${error.message}`)
            } else {
                console.log('Comment inserted successfully:', data)
                setComment("")
                alert("댓글이 성공적으로 전송되었습니다!")
            }
        } catch (err) {
            console.error('Unexpected error:', err)
            alert("댓글 전송 중 오류가 발생했습니다.")
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen border">
            <h1 className="text-2xl font-bold mb-8">Music Comments</h1>
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <input
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setComment(e.target.value) }}
                    placeholder="댓글을 입력하세요..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? "전송 중..." : "전송"}
                </button>
            </form>
        </div>
    )
}
