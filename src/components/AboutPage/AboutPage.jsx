import React from 'react'
import Navbar from '../Navbar/Navbar'
import './AboutPage.css'
import Intro from '../Intro/Intro'
import Description from '../AboutOne7/AboutOne7'
import Grounds from '../AboutGrounds/AboutGrounds'
import Sports from '../sportsManagement/Sports'
import Technical from '../technicalPage/Technical'
import Offers from '../Offers/Offers'
import Impact from '../Impact/Impact'
import Why from '../Why/Why'
import Founder from '../Founders/Founder'
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer'

function AboutPage () {
  return (
    <div>
      <div className="aboutSection px-[3vw] overflow-hidden">
        <Navbar/>
        <div className='flex flex-col gap-[1rem] items-center w-[100vw] relative top-[18rem] lg:top-[15vw]'>
          <div className='text-2xl font-bold lg:font-semibold lg:text-lg text-center'>ABOUT  US </div>
          <div className='text-4xl md:text-6xl lg:text-5xl text-center'> Inspiring Excellence, Elevating Cricket</div>
          <div className='text-md md:text-lg w-[80vw] lg:w-[60vw] text-center'>One7 Sports is fueled by a profound passion for cricket and a dedicated commitment to enhancing the local cricketing experience. Under the leadership of Ajay Chhangani, our team comprises individuals with diverse backgrounds and expertise, all united by a shared objective: the improvement of cricket infrastructure within the local community.</div>
        </div>
      </div>
      <div className='relative z-10'>
      <Intro/>
      </div>
      <div className='relative z-10'>
      <Description/>
      </div>
      <div className='relative z-10'>
      <Grounds/>
      </div>
      <div className='relative z-10'>
      <Sports/>
      </div>
      <div className='relative z-10'>
      <Technical/>
      </div>
      <div className='relative z-10'>
      <Offers/>
      </div>
      <div className='relative z-10'>
      <Impact/>
      </div>
      <div className='relative z-10'>
      <Why/>
      </div>
      <div className='relative z-10'>
      <Founder/>
      </div>
      <div className='relative z-10'>
      <Booking/>
      </div>
      <div className='relative z-10'>
      <Footer/>
      </div>
    </div>
  );
}
export default AboutPage;
