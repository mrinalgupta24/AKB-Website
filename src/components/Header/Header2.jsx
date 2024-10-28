import React, { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false); // Close the menu on mobile after clicking
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-[#f9fafb] border-b border-gray-700`}
    >
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto w-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="Logo" />
        </a>
        <button
          onClick={handleNavToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#f9fafb] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/home"
                className="block py-2 px-3 text-white bg-green-800 rounded md:bg-transparent md:text-green-800 md:p-0"
                onClick={() => setIsNavOpen(false)} // Close the menu on mobile after clicking
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll("about")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll("contact")}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
