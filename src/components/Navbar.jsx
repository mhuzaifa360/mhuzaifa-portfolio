import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-[#0a0c12]/90 border-b border-[#1e243e]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - M Huzaifa */}
          <a
            href="#"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white to-[#8b9dff] bg-clip-text text-transparent tracking-tight"
          >
            M Huzaifa
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#cdd9ff] font-medium hover:text-[#5f7cff] transition-all duration-200 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5f7cff] after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Download CV Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold text-sm hover:from-[#2c3fe0] hover:to-[#4a5de0] shadow-lg shadow-[#3b4eff]/20 transition-all duration-200 hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#cdd9ff] hover:text-[#5f7cff] focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 rounded-2xl bg-[#0f1222]/95 backdrop-blur-md border border-[#262b44] animate-fadeSlideDown">
            <ul className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#cdd9ff] font-medium rounded-xl hover:bg-[#1a1f36] hover:text-[#5f7cff] transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold text-sm hover:from-[#2c3fe0] hover:to-[#4a5de0] transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
