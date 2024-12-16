import React from 'react'
import '../Home/Home.css'
import logo from "../../assets/Home_assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div>
        <header className="fixed top-0  z-50">
          <nav className="nav-bar bg-opacity-50 bg-black">
            <div className="flex items-center">
              <img src={logo} alt="One7 Sports Logo" className="logo inline-block w-10 mr-2" />
            </div>
            <ul className="hidden md:flex content-items text-white ">
              {[
                {address:["Home", "About", "Services", "Events","Franchise","Career"],
                path:["","about","services","events","franchise","career"],}
            ].map((item) =>
                item.address.map((name, index) => (
  
                <li
                  key={index}
                  className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4 cursor-pointer"
                >
                  <Link to={`/${item.path[index]}`}>{name}</Link>
                </li>
                )
              ))}
            </ul>
            <button className="button-fix bg-transparent border-2 border-white-400 hover:bg-red-100 hover:text-black px-4 py-2 rounded-md ">
              <Link to='/contact'>Contact Us</Link>
            </button>
          </nav>
        </header>
    </div>
  );
}
export default Navbar;