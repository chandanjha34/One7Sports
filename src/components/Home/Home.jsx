import React from "react";
import '../Home/Home.css'
import logo from "../../assets/Home_assets/logo.png";
import face1 from '../../assets/Home_assets/face1.png'
import face2 from '../../assets/Home_assets/face2.png'
import face3 from '../../assets/Home_assets/face3.png'
import face4 from '../../assets/Home_assets/face4.png'
import face5 from '../../assets/Home_assets/face5.png'

function Home() {
  return (
    <div className="h-screen bg-white max-w-[100vw] overflow-hidden">
      {/* Navbar */}
    <div className="backGround-Pics flex justify-between">  
      <header className="fixed top-0  z-50">
        <nav className="nav-bar bg-opacity-50 bg-black">
          <div className="flex items-center">
            <img src={logo} alt="One7 Sports Logo" className="logo inline-block w-10 mr-2" />
          </div>
          <ul className="hidden md:flex content-item text-white ">
            {["Home", "About", "Services", "Events"].map((item) => (
              <li
                key={item}
                className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="button-fix bg-transparent border-2 border-white-400 hover:bg-yellow-300 hover:text-[#000000]n px-4 py-2 rounded-md ">
            Contact Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="main-section top-0 h-full flex items-center">
        <div className=" mx-auto px-6 md:px-12 ">
          {/* Left Section: Hero Text */}
          <div className="main-content h-full md:w-1/2 text-start  md:text-left md:space-y-4 ">
            <div className="text-4xl md:text-6xl font-semibold leading-tight text-white ">
              Play your <span className="text-yellow-400">Game</span>, <br />
              Find your <span className="text-yellow-400">Ground</span>!
            </div>
            <div className="text-lg text-gray-300">
              Welcome to One7Sports. Your new companion for all sports and games.
              Get grounds for cheaper prices. Get personalized tournament suggestions.
            </div>
            <div className="flex flex-col md:flex-row gap-[1rem] md:items-center space-x-4">
              <div className="flex -space-x-2 ">
                <img
                  src={face1}
                  alt="User 1"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src={face2}
                  alt="User 2"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src={face3}
                  alt="User 3"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src={face4}
                  alt="User 3"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src={face5}
                  alt="User 3"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
              </div>
              <span className="text-yellow-400 text-lg font-semibold">
                15k+ <span className="text-gray-300">Real-time users</span>
              </span>
            </div>
            <button  className="button-edit text-black px-6 py-3 rounded-md text-lg font-medium">
              Download Our App
            </button>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
