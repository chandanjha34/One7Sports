import React from 'react'
import './Services.css'
import img1 from '../../assets/Services_assets/img1.png'
import img2 from '../../assets/Services_assets/img2.png'
import img3 from '../../assets/Services_assets/img3.png'
import img4 from '../../assets/Services_assets/img4.png'

function Services(){
  return (
    <div className='containers '>
        <div className='text-center  text-2xl font-bold text-[#F59431]'>Our services</div>
        <div className='text-center text-3xl md:text-4xl'>Comprehensive Services for <br /> Every Cricketer</div>
        <div className='flex flex-col md:flex-row justify-around px-[5rem] gap-[3rem]'>
            <div><img className='rounded-xl' src={img1} alt='' /></div>
            <div><img className='rounded-xl' src={img2} alt='' /></div>
            <div><img className='rounded-xl' src={img3} alt='' /></div>
            <div><img className='rounded-xl' src={img4} alt='' /></div>
        </div>
    </div>
  );
}
export default Services;