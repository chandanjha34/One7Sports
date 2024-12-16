import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ServicesPage.css'
import AllServices from '../AllServices/AllServices'
import Details from '../Details/Details'
import Map from '../Map/Map'
import Footer from '../Footer/Footer'

function ServicesPage(){
  return (
    <div>
        <div className='backG text-white  px-[3vw] relative z-100 '>
            <Navbar/>
            <div className='flex flex-col gap-[1rem] items-center w-[90vw] lg:w-[100vw] relative top-[15rem] lg:top-[15vw]'>
              <div className='text-2xl drop-shadow-[0_4px_4px_#000] font-bold lg:font-semibold lg:text-4xl text-center'> our Services</div>
              <div className='text-4xl drop-shadow-[0_4px_4px_#000] md:text-6xl lg:text-5xl text-center'>Comprehensive Solutions to Elevate Your Cricket Experience</div>
            </div>
        </div>

        <div className='relative z-10'>
          <AllServices/>
        </div>
        <div className='relative z-10'>
          <Details/>
        </div>
        <div className='relative z-10'>
          <Map/>
        </div>
        <div className='relative z-10'>
          <Footer/>
        </div>
    </div>
  );
}
export default ServicesPage;
