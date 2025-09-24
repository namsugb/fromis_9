import { Youtube, Instagram, Twitter, Menu } from "lucide-react";


export default function Header() {
    return (
        <div className="w-full h-16 bg-transparent absolute top-0 left-0 z-50 px-16">
            <div className="w-full h-full flex justify-between items-center">
                <div className="w-1/2 h-full flex justify-start items-center">
                    <h1 className="text-4xl font-bold font-stretch-50%">Promise9</h1>
                </div>
                <div className="w-1/2 h-full flex justify-end items-center gap-8">
                    <Youtube className="w-8 h-8" />
                    <Instagram className="w-8 h-8" />
                    <Twitter className="w-8 h-8" />
                    <Menu className="w-8 h-8" />
                </div>
            </div>

        </div>
    )
}