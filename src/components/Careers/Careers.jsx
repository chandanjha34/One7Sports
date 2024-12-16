import React from 'react'
import './Careers.css'
import Navbar from '../Navbar/Navbar'
import mainImage from '../../assets/EventsPage_assets/frontPage.png'
import Why from '../Careers/WhyCareer/WhyCareer'
import JobList from '../Careers/JobPosting/JobList'
import Footer from '../Footer/Footer'

function Careers(){
  return (
    <div>
        <div className='w-[95vw] h-auto mx-auto main-career'>
            <Navbar/>
            <div className='Main-Career'>
                <div className='text-sm text-[#5FBC1E]'>careers opportunities</div>
                <div className='text-5xl'>Join Our Team</div>
                <div className='text-lg'>At One7sports, we believe in fostering a collaborative and innovative work environment where every team member can thrive. We are always looking for talented, passionate individuals to help us drive growth and make an impact in the industry.</div>
                <div><img className='rounded-lg' src={mainImage} alt="" /></div>
            </div>
        </div>
        <div className='relative z-10'>
          <Why/>
        </div>
        <div className='relative z-10'>
          <JobList/>
        </div>
        <div className='relative z-10'>
          <Footer/>
        </div>
    </div>
  );
}
export default Careers;