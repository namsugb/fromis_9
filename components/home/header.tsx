"use client";

import { Youtube, Instagram, Twitter, Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Link from "next/link";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuHover = () => {
        setIsSidebarOpen(true);
    };


    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className="w-full h-16 bg-transparent absolute top-0 left-0 z-50 px-16">
                <div className="w-full h-full flex justify-between items-center">
                    <div className="w-1/2 h-full flex justify-start items-center">
                        <Link href="/">
                            <h1 className="text-4xl font-bold font-stretch-50%">fromis9</h1>
                        </Link>
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center gap-8">
                        <Link href="https://www.youtube.com/@fromis9_official" target="_blank">
                            <Youtube className="w-8 h-8 hover:text-red-500 transition-colors cursor-pointer" />
                        </Link>
                        <Link href="https://www.instagram.com/fromis_9/" target="_blank">
                            <Instagram className="w-8 h-8 hover:text-pink-500 transition-colors cursor-pointer" />
                        </Link>
                        <Link href="https://x.com/fromis9official" target="_blank">
                            <Twitter className="w-8 h-8 hover:text-blue-500 transition-colors cursor-pointer" />
                        </Link>
                        <div
                            className="relative"
                            onClick={handleMenuHover}

                        >
                            <Menu className="w-8 h-8 hover:text-gray-600 transition-colors cursor-pointer" />
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