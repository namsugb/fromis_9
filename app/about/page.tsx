"use client"
import Image from "next/image"
import { useState } from "react"
import { Instagram } from "lucide-react"

export default function About() {
    const members = [
        {
            name: "송하영",
            englishName: "HAYEONG",
            birth: "1997.09.29",
            image: "/profile/1.png",
            instagram: "https://www.instagram.com/shy9_29/"
        },
        {
            name: "박지원",
            englishName: "JIWON",
            birth: "1998.03.20",
            image: "/profile/2.png",
            instagram: "https://www.instagram.com/xjiwonparkx/"
        },
        {
            name: "이채영",
            englishName: "CHAEYOUNG",
            birth: "2000.05.14",
            image: "/profile/3.png",
            instagram: "https://www.instagram.com/chaengrang_/"
        },
        {
            name: "이나경",
            englishName: "NAKYUNG",
            birth: "2000.06.01",
            image: "/profile/4.png",
            instagram: "https://www.instagram.com/blossomlng_0/"
        },
        {
            name: "백지헌",
            englishName: "JIHEON",
            birth: "2003.04.17",
            image: "/profile/5.png",
            instagram: "https://www.instagram.com/jiheonnibaek/"
        },
    ]

    const [selectedMember, setSelectedMember] = useState(members[0])

    return (
        <div className="fixed inset-0 w-screen h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto md:overflow-hidden pb-24 md:pb-0">
            {/* 좌측 멤버 리스트 */}
            <div className="w-full md:w-64 h-auto md:h-full flex flex-row md:flex-col justify-center md:justify-center items-center md:items-end pt-16 md:pt-0 pr-0 md:pr-4 space-x-2 sm:space-x-3 md:space-x-0 md:space-y-6 px-2 sm:px-4 md:px-0">
                {members.map((member) => (
                    <button
                        key={member.name}
                        onClick={() => setSelectedMember(member)}
                        className={`text-xs sm:text-sm md:text-xl font-bold tracking-wider transition-all duration-300 whitespace-nowrap ${selectedMember.name === member.name
                            ? "text-black text-sm sm:text-base md:text-2xl"
                            : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        {member.englishName}
                    </button>
                ))}
            </div>

            {/* 중앙 이미지 - 모든 이미지를 렌더링하되 하나만 표시 */}
            <div className="flex justify-center items-center px-4 md:px-0 mx-0 py-4 md:py-0">
                <div className="relative w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px]">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className={`absolute inset-0 transition-opacity duration-300 ${selectedMember.name === member.name ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="object-contain rounded-2xl"
                                priority
                                fill
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 우측 정보 */}
            <div className="w-full md:w-96 h-auto md:h-full flex flex-col justify-center items-center md:items-start pl-0 md:pl-8 gap-2 pb-4 md:pb-0">
                <div className="flex items-center gap-2 md:gap-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold tracking-tight">{selectedMember.name}</h1>
                    <a href={selectedMember.instagram} target="_blank" className="text-lg text-gray-600 font-bold hover:text-pink-600 transition-colors cursor-pointer">
                        <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                </div>
                <p className="text-base md:text-lg text-gray-600 font-bold">{selectedMember.birth}</p>

            </div>
        </div>
    )
}
