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
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* 좌측 멤버 리스트 */}
            <div className="w-64 h-full flex flex-col justify-center items-end pr-4 space-y-6">
                {members.map((member, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedMember(member)}
                        className={`text-xl font-bold tracking-wider transition-all duration-300 ${selectedMember.name === member.name
                            ? "text-black text-2xl"
                            : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        {member.englishName}
                    </button>
                ))}
            </div>

            {/* 중앙 이미지 */}
            <div className="flex justify-center items-center px-0 mx-0">
                <div className="relative w-[500px] h-[700px] transition-all duration-500">
                    <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-contain rounded-2xl"
                        priority
                    />
                </div>
            </div>

            {/* 우측 정보 */}
            <div className="w-96 h-full flex flex-col justify-center items-start pl-8 gap-2">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl text-gray-800 font-bold tracking-tight">{selectedMember.name}</h1>
                    <a href={selectedMember.instagram} target="_blank" className="text-lg text-gray-600 font-bold hover:text-pink-600 transition-colors cursor-pointer">
                        <Instagram className="w-8 h-8" />
                    </a>
                </div>
                <p className="text-lg text-gray-600 font-bold">{selectedMember.birth}</p>

            </div>
        </div>
    )
}
