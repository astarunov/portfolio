import React, { useState, useEffect } from "react";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white ${
        scrolled ? "backdrop-blur-[4px] bg-black/20" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="mx-auto px-[5%]">
        <div className="w-full border-b border-white flex items-center justify-between py-2">
          <div className="text-[24px] font-lancelot">
            <a href="#">
              Artem Starunov
              <span className="text-[16px] font-plex ml-8">
                FRONTEND DEVELOPER
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 font-plex text-[16px]">
            <li>
              <a href="#" className="transition duration-300">
                about
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
