import React from "react";
import logo from "../assets/Home_assets/logo.png"; // Replace with your logo path
import heroImage from "../assets/Home_assets/bg.png"; // Replace with your hero image path

function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      {/* Navbar */}
      <header className="w-full fixed top-0 bg-black bg-opacity-50 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center text-2xl font-bold text-white">
            <img src={logo} alt="One7 Sports Logo" className="inline-block w-10 mr-2" />
            One7 Sports
          </div>
          <ul className="hidden md:flex space-x-8 text-white">
            {["Home", "About", "Services", "Events"].map((item) => (
              <li
                key={item}
                className="text-lg font-medium hover:text-yellow-400 hover:underline underline-offset-4 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-md transition">
            Contact Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
          {/* Left Section: Hero Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Play your <span className="text-yellow-400">Game</span>, <br />
              Find your <span className="text-yellow-400">Ground</span>!
            </h1>
            <p className="text-lg text-gray-300">
              Welcome to One7Sports. Your new companion for all sports and games.
              Get grounds for cheaper prices. Get personalized tournament suggestions.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img
                  src="/user1.jpg"
                  alt="User 1"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src="/user2.jpg"
                  alt="User 2"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <img
                  src="/user3.jpg"
                  alt="User 3"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
              </div>
              <span className="text-yellow-400 text-lg font-semibold">
                15k+ <span className="text-gray-300">Real-time users</span>
              </span>
            </div>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-300 transition">
              Download Our App
            </button>
          </div>

          {/* Right Section: Hero Image */}
          <div className="absolute w-[90vw] h-[90vh] p-4 ">
            <div className="w-full bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                src={heroImage}
                alt="Sports"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
