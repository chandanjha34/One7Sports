import React from 'react'
import Navbar from '../Navbar/Navbar'
import './AboutPage.css'
import Intro from '../Intro/Intro'
import Description from '../AboutOne7/AboutOne7'
import Grounds from '../AboutGrounds/AboutGrounds'

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
      <Intro/>
      <Description/>
      <Grounds/>
    </div>
  );
}
export default AboutPage;
