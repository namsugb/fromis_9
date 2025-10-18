"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            {/* Backdrop - 사이드바 외부 공간 클릭 시 닫기 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-transparent z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="space-y-4">
                        <Link
                            href="/"
                            onClick={onClose}
                            className="block py-3 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about/"
                            onClick={onClose}
                            className="block py-3 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/fantube/"
                            onClick={onClose}
                            className="block py-3 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Fantube
                        </Link>
                        <Link
                            href="/discography/"
                            onClick={onClose}
                            className="block py-3 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Discography
                        </Link>

                    </nav>

                    {/* Social Links */}
                    {/* <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a href="#" className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
