"use client";

import Image from "next/image";
import { useState } from "react";


export default function Hero() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const imagePairs = [
        { normal: "/hero/51.png", hover: "/hero/52.png" },
        { normal: "/hero/21.png", hover: "/hero/22.png" },
        { normal: "/hero/11.png", hover: "/hero/12.png" },
        { normal: "/hero/41.png", hover: "/hero/42.png" },
        { normal: "/hero/31.png", hover: "/hero/32.png" },
    ];

    return (
        <div className="h-[100vh] w-full">
            <div className="grid grid-cols-5 h-full">
                {imagePairs.map((pair, index) => (
                    <div
                        key={index}
                        className="bg-gray-500 border-r border-white hover:bg-white transition-colors duration-300"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={hoveredIndex === index ? pair.hover : pair.normal}
                            alt="Hero"
                            width={600}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 w-full h-full bg-gray-500/10"></div>
        </div>
    )
}