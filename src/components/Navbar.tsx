import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "my-story", label: "My Story" },
    { href: "gallery", label: "Gallery" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full">
      {/* Top Image */}
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[60vh] relative">
        <img
          src="/img/navtop.jpg"
          alt="Top Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center -translate-y-30 md:-translate-y-35 lg:-translate-y-35">
          <img
            className="h-20 md:h-25 lg:h-30 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            src="/img/your-logo.png"
            alt="Kshitij Pari Logo"
          />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1877F2]/80 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#E4405F]/80 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@explorethroughmycamera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:text-[#FF0000]/80 transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>

            {/* Desktop Menu - centered */}
            <div className="hidden md:block flex-1">
              <div className="flex items-center justify-center space-x-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleScrollTo(link.href)}
                    className="text-gray-800 hover:text-gray-600 px-4 py-3 rounded-md text-base md:text-lg font-medium font-montserrat cursor-pointer focus:outline-none"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button - moved to right */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-lg bg-transparent flex items-center justify-center focus:outline-none group"
              >
                <div className="relative flex overflow-hidden items-center justify-center w-[24px] h-[20px]">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                      className={`bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        isOpen ? "rotate-[42deg] translate-x-px" : ""
                      }`}
                    />
                    <div
                      className={`bg-gray-800 h-[2px] w-7 rounded transform transition-all duration-300 ${
                        isOpen ? "opacity-0" : ""
                      }`}
                    />
                    <div
                      className={`bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        isOpen ? "-rotate-[42deg] translate-x-px" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden
            transform transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
            }
          `}
        >
          <div
            className={`
              px-4 py-3 space-y-2 transform transition-all duration-500 delay-100
              ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }
            `}
          >
            <div className="space-y-2">
              {navLinks.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleScrollTo(item.href)}
                  className="text-gray-800 hover:text-gray-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium font-montserrat
                  transform transition-all duration-300 hover:translate-x-2 focus:outline-none"
                  style={{
                    transitionDelay: `${150 + index * 50}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Media Icons for Mobile */}
            <div
              className="flex items-center justify-center space-x-6 pt-6 pb-2"
              style={{
                transitionDelay: "400ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {[
                {
                  href: "https://facebook.com",
                  Icon: FaFacebook,
                  color: "#1877F2",
                },
                {
                  href: "https://twitter.com",
                  Icon: FaTwitter,
                  color: "#1DA1F2",
                },
                {
                  href: "https://instagram.com",
                  Icon: FaInstagram,
                  color: "#E4405F",
                },
                {
                  href: "https://youtube.com",
                  Icon: FaYoutube,
                  color: "#FF0000",
                },
              ].map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110"
                  style={{
                    color: social.color,
                    transitionDelay: `${450 + index * 50}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  <social.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
