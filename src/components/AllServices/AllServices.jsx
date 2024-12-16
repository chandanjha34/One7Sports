import React from "react";
import appImage1 from "../../assets/ServicesPage_assets/appImage1.png";
import logos from '../../assets/Footer_assets/logo.png'

function AllServices() {



  return (
    <div className="w-full px-4 py-8 md:py-16 lg:py-20 bg-white">
      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative">
            <img
              src={appImage1}
              alt="Main App Screen"
              className="relative z-10 w-[80vw] lg:w-[40vw] hover:scale-105 transition-transform duration-300 rounded-lg"
            />
            {/* Orange Circle */}
            <div className="absolute -top-4 -left-4 -z-10 h-52 w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full border-2 border-orange-400">

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 space-y-6 px-4 lg:px-8">
          {/* Feature Box 1 */}
          <div className="group relative bg-blue-600 text-white p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">🛠️ Book Grounds</h3>
            <p className="text-sm md:text-base mb-4">
              Effortlessly book your ideal cricket ground with our easy-to-use
              platform. Enjoy a seamless experience tailored to meet your sporting needs.
            </p>
          </div>

          {/* Feature Box 2 */}
          <div className="group relative bg-white text-black p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">🏆 Tournaments
            </h3>
            <p className="text-sm md:text-base mb-4">
              Compete in professionally organized tournaments that highlight talent and
              build camaraderie on the pitch.
            </p>
          </div>

          {/* Feature Box 3 */}
          <div className="group relative bg-white text-black p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">📏 Nationwide</h3>
            <p className="text-sm md:text-base mb-4">
              Cricket opportunities await across India for passionate players. Join the game and connect with cricketers nationwide.
            </p>
          </div>

          {/* Feature Box 4 */}
          <div className="group relative bg-white text-black p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">📊 Analytics</h3>
            <p className="text-sm md:text-base mb-4">
              Unlock personalized insights to elevate your cricket performance. Use analytics to improve your game.
            </p>
          </div>

          {/* Download Button */}
          <div className="">
            <a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                DOWNLOAD OUR APP
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;
