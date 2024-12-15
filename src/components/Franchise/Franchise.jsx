import React from 'react'
import './Franchise.css'
import Navbar from '../Navbar/Navbar'
import Leagues from '../Leagues/Leagues'
import Goals from '../Goals/Goals'
import Owner from '../Owner/Owner'
import WhyFranchise from '../WhyFranchise/WhyFranchise'
import Reviews from '../Reviews/Reviews'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import face1 from '../../assets/Home_assets/face1.png'
import face2 from '../../assets/Home_assets/face2.png'
import face3 from '../../assets/Home_assets/face3.png'
import face4 from '../../assets/Home_assets/face4.png'
import face5 from '../../assets/Home_assets/face5.png'


function Franchise(){
  return (
    <div>
        <div className="Home-Page h-screen bg-white max-w-[100vw] overflow-hidden">   
          <div className="backGround-Pics flex justify-between">  
            <Navbar/>
            {/* Hero Section */}
            <section className="main-section  h-full">
                <div className="main-content h-full text-start md:space-y-4 ">
                  <div className="text-4xl md:text-6xl font-semibold leading-tight text-white ">
                  Join One7 Sports,<br /> Become proud Owners of the Teams!
                  </div>
                  <div className="text-lg text-gray-300">
                  One7 Sports conducts some of the best Leagues and Tournaments on a Franchised Model with players  from the community of both Corporates and Professionals.
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
                  <button  className="button-edit text-black px-3 py-3 rounded-md text-lg font-medium">
                    Download Our App
                  </button>
                </div>
            </section>
          </div>
        </div>
        <Leagues/>
        <Goals/>
        <WhyFranchise/>
        <Owner/>
        <Reviews/>
        <Gallery/>
        <Footer/>
    </div>
  );
}
export default Franchise;
