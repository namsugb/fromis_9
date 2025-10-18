"use client";

import { Play } from "lucide-react"

export default function Discography() {

    const discography = {
        fromOurTwenties: [

            {
                title: "LIKE YOU BETTER",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "REBELUTIONAL",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Love=Disaster",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Strawberry Mimosa",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Twisted love",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Merry Go Round",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ],

        from: [

            {
                title: "from",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
        ],

        Supersonic: [

            {
                title: "Supersonic",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Beat the Heat",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                title: "Take a Chance",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
        ]
    }


    return (
        <div className="h-screen overflow-y-scroll smooth-snap-container bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            {/* 헤더 */}
            <div className="h-screen flex items-center justify-center smooth-snap-section px-4">
                <div className="text-center scroll-fade-section">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 animate-fade-in">Discography</h1>
                    <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-delay">fromis_9</p>
                </div>
            </div>

            {/* 첫 번째 앨범 */}
            <div className="min-h-screen flex items-center justify-center smooth-snap-section px-4 md:px-8 py-8 md:py-0">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                    {/* 이미지 */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <img
                                src="/discography/1.png"
                                alt="From Our Twenties"
                                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>
                    </div>

                    {/* 목록 */}
                    <div className="space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-8">From Our Twenties</h2>
                        <div className="space-y-2 md:space-y-4">
                            {discography.fromOurTwenties.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="flex items-center space-x-3 md:space-x-4 p-2 md:p-4 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:translate-x-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 두 번째 앨범 */}
            <div className="min-h-screen flex items-center justify-center smooth-snap-section px-4 md:px-8 py-8 md:py-0">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                    {/* 이미지 */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <img
                                src="/discography/2.png"
                                alt="from"
                                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>
                    </div>

                    {/* 목록 */}
                    <div className="space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-8">from</h2>
                        <div className="space-y-2 md:space-y-4">
                            {discography.from.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="flex items-center space-x-3 md:space-x-4 p-2 md:p-4 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:translate-x-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 세 번째 앨범 */}
            <div className="min-h-screen flex items-center justify-center smooth-snap-section px-4 md:px-8 py-8 md:py-0">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                    {/* 이미지 */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <img
                                src="/discography/3.png"
                                alt="Supersonic"
                                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>
                    </div>

                    {/* 목록 */}
                    <div className="space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 md:mb-8">Supersonic</h2>
                        <div className="space-y-2 md:space-y-4">
                            {discography.Supersonic.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="flex items-center space-x-3 md:space-x-4 p-2 md:p-4 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:translate-x-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}