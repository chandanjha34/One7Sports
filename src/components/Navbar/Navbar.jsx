import React, { useState } from 'react';
import '../Home/Home.css';
import logo from "../../assets/Home_assets/logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the menu

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="fixed top-0 z-50000">
        <nav className="nav-bar bg-opacity-50 bg-black">
          <div className="flex items-center justify-between w-full">
            <img src={logo} alt="One7 Sports Logo" className="logo inline-block w-10 mr-2" />
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex justify-between w-full text-white`}>
            {[
              {
                address: ["Home", "About Us", "Services", "Events", "Franchise", "Career", "Contact Us"],
                path: ["", "about", "services", "events", "franchise", "careers", "contact"],
              }
            ].map((item) =>
              item.address.map((name, index) => (
                <li
                  key={index}
                  className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4 cursor-pointer w-full"
                >
                  <Link to={`/${item.path[index]}`}>{name}</Link>
                </li>
              ))
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;