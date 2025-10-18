"use client"
import Hero from "../components/home/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 이전에 팝업을 본 적이 있는지 확인
    const hasSeenPopup = localStorage.getItem('hasSeenDisclaimer');

    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowPopup(false);
  };

  return (
    <div className="relative min-h-screen">
      <Hero />

      {/* 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              알림
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6 text-center">
              이 사이트는 프로미스나인 공식 계정이 <span className="text-pink-500">아닙니다</span>
            </p>
            <button
              onClick={handleClosePopup}
              className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  )
}