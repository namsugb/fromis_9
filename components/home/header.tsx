"use client";

import { Youtube, Instagram, Menu, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Link from "next/link";
import { useAuth } from "@/lib/contexts/AuthContext";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, loading, signIn, signOut } = useAuth();

    const handleMenuHover = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className="w-full h-14 md:h-16 bg-transparent absolute top-0 left-0 z-50 px-4 md:px-8 lg:px-16">
                <div className="w-full h-full flex justify-between items-center text-gray-600">
                    <div className="h-full flex justify-start items-center">
                        <Link href="/">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-stretch-50% hover:text-white transition-colors">fromis_9</h1>
                        </Link>
                    </div>
                    <div className="h-full flex justify-end items-center gap-2 sm:gap-3 md:gap-4 lg:gap-8">
                        <Link href="https://www.youtube.com/@fromis9_official" target="_blank">
                            <Youtube className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-red-500 transition-colors cursor-pointer" />
                        </Link>
                        <Link href="https://www.instagram.com/officialfromis_9/" target="_blank">
                            <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 hover:text-pink-500 transition-colors cursor-pointer" />
                        </Link>
                        <Link href="https://x.com/realfromis_9" target="_blank">
                            <svg
                                className="w-6 h-6 lg:w-8 lg:h-8 hover:text-black transition-colors cursor-pointer"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>


                        {loading ? (
                            <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                                <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                            </div>
                        ) : user ? (
                            <button onClick={signOut} title="로그아웃">
                                <LogOut className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 transition-colors cursor-pointer" />
                            </button>
                        ) : (
                            <button onClick={signIn} title="로그인">
                                <LogIn className="w-6 h-6 md:w-8 md:h-8 hover:text-purple-600 transition-colors cursor-pointer" />
                            </button>
                        )}

                        <div
                            className="relative"
                            onClick={handleMenuHover}

                        >
                            <Menu className="w-6 h-6 md:w-8 md:h-8 hover:text-gray-600 transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={closeSidebar}
                />
            </div>
        </>
    )
}