/* eslint-disable react/prop-types */
import { useEffect } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-40 border-b border-[#333740]">
      <div className="flex h-14 items-center justify-between gap-8 backdrop-blur-lg px-4 sm:px-6">
        <a href="#home" className="text-2xl font-semibold text-blue-500">
          My<span className="text-white">Portfolio</span>
        </a>

        <button
          type="button"
          className="relative inline-grid size-7 place-items-center rounded-md text-white sm:hidden hover:bg-white/10"
          aria-label="Navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="absolute top-1/2 left-1/2 size-11 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
          </svg>
        </button>

        <div className="hidden sm:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-sm/6 "
            >
              {item.label}
            </a>
          ))}
          <a href="https://github.com/Asrori87" target="_blank">
            <svg viewBox="0 0 20 20" className="size-5 fill-gray-400">
              <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"></path>
            </svg>
          </a>
        </div>

        {/* mobile menu */}
        <div
          className={`flex flex-col ${
            menuOpen ? "bg-dark" : "hidden"
          } min-h-screen fixed top-0 left-0 w-full z-40 sm:hidden`}
        >
          <div className="h-14 px-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-semibold text-blue-500">
              My<span className="text-white">Portfolio</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-grid size-7 place-items-center rounded-md text-white hover:bg-white/10"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1 px-1 pb-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                className="rounded-lg px-3 py-2 text-xl/9 font-medium text-white hover:bg-white/10"
                href={item.href}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {item.label}
              </a>
            ))}

            <a
              className="rounded-lg px-3 py-2 text-xl/9 font-medium text-white hover:bg-white/10"
              href="https://github.com/Asrori87"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
