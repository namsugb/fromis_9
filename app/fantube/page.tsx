"use client"
import { Instagram, Youtube, ExternalLink, Users, Heart } from "lucide-react"
import { DATA } from "@/lib/data"
import { useState, useEffect } from "react"

type YoutubeItem = {
    name: string;
    url: string;
    image: string;
};

export default function Fantube() {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [youtube, setYoutube] = useState<YoutubeItem[]>([])



    useEffect(() => {
        setLoading(true)
        setYoutube(Object.values(DATA).slice((page - 1) * 6, page * 6) as YoutubeItem[])
        setLoading(false)
    }, [page])




    return (
        <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

            {/* 메인 컨텐츠 */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
                {/* 헤더 섹션 */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
                        플로버 팬튜브
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600">
                        팬들이 운영하는 계정들을 만나보세요
                    </p>
                </div>

                {/* 카드 그리드 */}
                {loading ? <div className="text-center text-black">Loading...</div> : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-black">
                        {youtube.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                <div className="aspect-[16/9]">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-fill rounded" />
                                    <div className="text-center text-black text-sm md:text-base mt-2">{item.name}</div>
                                </div>
                            </a>
                        ))}

                    </div>
                )}

                {/* 페이지네이션 */}
                <div className="flex justify-center items-center gap-3 md:gap-4 text-black mt-8 md:mt-12">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                    >
                        Previous
                    </button>
                    <div className="text-black font-medium">{page}</div>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === Math.ceil(Object.values(DATA).length / 6)}
                        className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* 안내 문구 */}
            <div className="mt-8 md:mt-12 pb-8 md:pb-12 text-center px-4">
                <p className="text-gray-500 text-xs sm:text-sm">
                    * 자신의 채널을 등록하고 싶다면 아래 계정으로 문의해주세요
                </p>
                <a href="https://www.instagram.com/areyounam/" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center justify-center mt-2">
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-1 text-purple-500" />
                        <p className="text-purple-500 text-sm sm:text-base">areyounam_</p>
                    </div>
                </a>

            </div>
        </div>
    )
}
