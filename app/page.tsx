"use client"
import Hero from "../components/home/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const toastTimer = window.setTimeout(() => setShowToast(false), 3500);

    // 이전에 팝업을 본 적이 있는지 확인
    const hasSeenPopup = localStorage.getItem('hasSeenDisclaimer');

    if (!hasSeenPopup) {
      setShowPopup(true);
    }

    return () => window.clearTimeout(toastTimer);
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowPopup(false);
  };

  return (
    <div className="relative min-h-screen">
      <Hero />

      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-5 z-[10000] -translate-x-1/2 whitespace-nowrap rounded-full bg-black/85 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-sm sm:text-base"
        >
          멤버들을 클릭해서 응원을 남겨보세요!
        </div>
      )}

      {/* 팝업 */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-8">
            <h2 className="mb-3 text-center text-xl font-bold text-gray-800 sm:mb-4 sm:text-2xl">
              알림
            </h2>
            <p className="mb-5 whitespace-nowrap text-center text-[clamp(0.65rem,3.2vw,1.125rem)] tracking-tight text-gray-700 sm:mb-6">
              이 사이트는 프로미스나인 공식 계정이 <span className="text-pink-500">아닙니다</span>
            </p>
            <button
              onClick={handleClosePopup}
              className="w-full rounded-lg bg-black py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800 sm:py-3 sm:text-base"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
