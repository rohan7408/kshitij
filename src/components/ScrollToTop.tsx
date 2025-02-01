import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener with throttling
  useEffect(() => {
    // Don't add scroll listener on mobile
    if (isMobile) return;

    let timeoutId: NodeJS.Timeout;

    const throttledToggleVisibility = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(toggleVisibility, 150);
    };

    window.addEventListener("scroll", throttledToggleVisibility, {
      passive: true,
    });

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", throttledToggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isMobile]);

  // Scroll to top smoothly
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        scroll-to-top
        bg-primary text-white
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transform-gpu
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default ScrollToTop;
