import React, { useState } from "react";
import "../Home/Home.css";
import logo from "../../assets/Home_assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="fixed top-0 w-full z-50">
        <nav className="nav-bar bg-opacity-50 bg-black px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="One7 Sports Logo"
              className="logo inline-block w-10 mr-2"
            />
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex content-items text-white gap-6">
            {[
              {
                address: [
                  "Home",
                  "About",
                  "Events",
                  "Services",
                  "Franchise",
                  "Career",
                ],
                path: [
                  "",
                  "about",
                  "events",
                  "services",
                  "franchise",
                  "careers",
                ],
              },
            ].map((item) =>
              item.address.map((name, index) => (
                <li
                  key={index}
                  className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4 cursor-pointer"
                >
                  <Link to={`/${item.path[index]}`}>{name}</Link>
                </li>
              ))
            )}
          </ul>

          {/* Contact Us Button */}
          <button className="hidden md:block bg-transparent border-2 border-white hover:bg-red-100 hover:text-black px-4 py-2 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            )}
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 text-white fixed top-16 left-0 w-full h-auto z-40">
            <ul className="flex flex-col items-center gap-6 py-4">
              {[
                {
                  address: [
                    "Home",
                    "About",
                    "Events",
                    "Services",
                    "Franchise",
                    "Career",
                  ],
                  path: [
                    "",
                    "about",
                    "events",
                    "services",
                    "franchise",
                    "careers",
                  ],
                },
              ].map((item) =>
                item.address.map((name, index) => (
                  <li key={index} className="text-lg font-medium">
                    <Link
                      to={`/${item.path[index]}`}
                      onClick={toggleMenu} // Close menu on link click
                      className="hover:text-yellow-400"
                    >
                      {name}
                    </Link>
                  </li>
                ))
              )}
              {/* Contact Us */}
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
