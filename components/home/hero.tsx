"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();


    const imagePairs = [
        { normal: "/hero/51.png", hover: "/hero/52.png", link: "/heon" },
        { normal: "/hero/21.png", hover: "/hero/22.png", link: "/magun" },
        { normal: "/hero/12.png", hover: "/hero/11.png", link: "/hayeong" },
        { normal: "/hero/41.png", hover: "/hero/42.png", link: "/nacco" },
        { normal: "/hero/31.png", hover: "/hero/32.png", link: "/chang" },
        { normal: "/hero/logo.png", hover: "/hero/logo.png", link: "/" },

    ];

    return (
        <div className="h-[100vh] w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-full">
                {imagePairs.map((pair, index) => (
                    <div
                        key={pair.normal}
                        className={`bg-gray-500 relative group cursor-pointer ${index === 5 ? 'md:hidden' : ''}`}
                        onClick={() => {
                            if (pair.link) {
                                router.push(pair.link);
                            }
                        }}
                    >
                        <Image
                            src={pair.normal}
                            alt="Hero"
                            width={400}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                        {/* 개별 이미지에 필터 적용 */}
                        <div className="absolute inset-0 bg-gray-500/10 group-hover:bg-gray-500/5 transition-colors duration-300"></div>

                        {/* 반짝이는 이펙트 */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out will-change-transform"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}