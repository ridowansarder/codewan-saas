"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Or any icon you like

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed animate-pulse bottom-6 right-6 z-50 bg-emerald-700 dark:bg-amber-400 dark:text-black text-white p-3 rounded-full shadow-lg hover:bg-emerald-800 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    )
  );
};

export default ScrollToTop;
