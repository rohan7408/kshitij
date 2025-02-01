import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "Gallery", href: "gallery" },
    { name: "My Story", href: "my-story" },
    { name: "Travel Diary", href: "travel-diary" },
  ];

  const travelLinks = [
    { name: "Everest Base Camp", href: "recommended-places" },
    { name: "Upper Mustang", href: "recommended-places" },
    { name: "Rara Lake", href: "recommended-places" },
    { name: "Phoksundo Lake", href: "recommended-places" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="w-5 h-5" />,
      url: "https://facebook.com/yourusername",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://instagram.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/yourusername",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <button
              onClick={() => handleScrollTo("home")}
              className="block focus:outline-none"
            >
              <div className="bg-white p-4 rounded-lg inline-block hover:bg-gray-100 transition-colors duration-300">
                <img
                  src="/img/your-logo.png"
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </div>
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Exploring the world one destination at a time. Join me on my
              journey through technology and travel adventures across Nepal and
              beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Places */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Featured Places
            </h3>
            <ul className="space-y-3">
              {travelLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-400">Kathmandu, Nepal</p>
            <a
              href="mailto:reshmapoudel815@gmail.com"
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              reshmapoudel815@gmail.com
            </a>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 space-x-1">
              <span>© {currentYear} All rights reserved.</span>
              <span>Made by</span>
              <a
                href="https://www.rohanpoudel.info.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                Rohan Poudel
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
