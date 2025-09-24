"use client";

import { useState } from "react";

export default function Chat() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        setMessage("");
    }

    return (
        <div className="bg-white rounded-lg p-4">
            <form className="flex  items-center justify-center gap-2" onSubmit={handleSubmit}>
                <input type="text" className="w-full rounded-lg p-2 border-2 border-gray-300 text-black" placeholder="이채영 사랑해" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className=" bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">Send</button>
            </form>
        </div >
    )
}