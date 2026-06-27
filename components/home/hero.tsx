"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const members = [
    {
        name: "JIHEON",
        fullName: "BAEK JI HEON",
        normal: "/hero/51.png",
        hover: "/hero/52.png",
        link: "/heon",
        tone: "bg-[#c8c9de]",
    },
    {
        name: "JIWON",
        fullName: "PARK JI WON",
        normal: "/hero/21.png",
        hover: "/hero/22.png",
        link: "/magun",
        tone: "bg-[#d9c8c0]",
    },
    {
        name: "HAYOUNG",
        fullName: "SONG HA YOUNG",
        normal: "/hero/12.png",
        hover: "/hero/11.png",
        link: "/hayeong",
        tone: "bg-[#c9d3ca]",
    },
    {
        name: "NAGYUNG",
        fullName: "LEE NA GYUNG",
        normal: "/hero/41.png",
        hover: "/hero/42.png",
        link: "/nacco",
        tone: "bg-[#d8c8d6]",
    },
    {
        name: "CHAEYOUNG",
        fullName: "LEE CHAE YOUNG",
        normal: "/hero/31.png",
        hover: "/hero/32.png",
        link: "/chang",
        tone: "bg-[#c9d5da]",
    },
] as const;

export default function Hero() {
    const router = useRouter();
    const [featuredIndex, setFeaturedIndex] = useState<number | null>(null);

    useEffect(() => {
        const previousIndex = Number(sessionStorage.getItem("homeFeaturedMember"));
        const candidates = members
            .map((_, index) => index)
            .filter((index) => index !== previousIndex);
        const nextIndex = candidates[Math.floor(Math.random() * candidates.length)];

        sessionStorage.setItem("homeFeaturedMember", String(nextIndex));
        setFeaturedIndex(nextIndex);
    }, []);

    const orderedMembers = featuredIndex === null
        ? members
        : [members[featuredIndex], ...members.filter((_, index) => index !== featuredIndex)];

    const layouts = [
        "col-span-2 sm:col-span-6 md:col-span-5 md:row-span-2",
        "col-span-1 sm:col-span-3 md:col-span-3",
        "col-span-1 sm:col-span-3 md:col-span-4",
        "col-span-1 sm:col-span-3 md:col-span-4",
        "col-span-1 sm:col-span-3 md:col-span-3",
    ];

    return (
        <main className="min-h-screen bg-[#f4f1ea] p-1.5 pt-16 sm:p-2 sm:pt-16 md:h-screen md:p-2 md:pt-2">
            <div className={`grid min-h-[calc(100vh-4.5rem)] grid-cols-2 auto-rows-[32vh] gap-1.5 transition-opacity duration-300 sm:grid-cols-6 sm:auto-rows-[38vh] sm:gap-2 md:h-full md:min-h-0 md:grid-cols-12 md:grid-rows-2 md:auto-rows-auto ${featuredIndex === null ? "opacity-0" : "opacity-100"}`}>
                {orderedMembers.map((member, index) => (
                    <button
                        key={member.name}
                        type="button"
                        aria-label={`${member.fullName} profile`}
                        className={`${layouts[index]} ${member.tone} group relative isolate overflow-hidden text-left`}
                        onClick={() => router.push(member.link)}
                    >
                        <Image
                            src={member.normal}
                            alt={member.fullName}
                            fill
                            priority={index < 3}
                            sizes={index === 0
                                ? "(min-width: 768px) 42vw, 100vw"
                                : "(min-width: 768px) 34vw, (min-width: 640px) 50vw, 50vw"
                            }
                            className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <Image
                            src={member.hover}
                            alt=""
                            fill
                            sizes={index === 0
                                ? "(min-width: 768px) 42vw, 100vw"
                                : "(min-width: 768px) 34vw, (min-width: 640px) 50vw, 50vw"
                            }
                            className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />

                        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-3 text-white sm:p-4">
                            <div>
                                <strong className="block text-lg font-semibold leading-none tracking-[-0.04em] sm:text-2xl md:text-[clamp(1.25rem,2vw,2.25rem)]">
                                    {member.name}
                                </strong>
                            </div>
                            <span className="hidden font-mono text-[9px] tracking-[0.18em] text-white/70 sm:block [writing-mode:vertical-rl]">
                                {member.fullName}
                            </span>
                        </div>

                        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                        </div>
                    </button>
                ))}
            </div>
        </main>
    );
}
