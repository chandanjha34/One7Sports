import React from 'react'
import './Intro.css'
import img1 from '../../assets/AboutPage_assets/img1.png'
import img2 from '../../assets/AboutPage_assets/img2.png'

function Intro(){
  return (
    <div className='flex flex-col md:flex-row  justify-between items-center'>
        <div className='section1 z-1'>
            <div className='img1'><img src={img1} alt="" /></div>
            <div className='img2'><img src={img2} alt="" /></div>
        </div>
        <div className='section2 text-section'>
            <div className='text-5xl'>Empowering Excellence in Cricket</div>
            <div className='text-lg text-[#5FBC1E]'>Our Mission Statement</div>
            <div className='text-md'>To revolutionize local sports with a special focus on cricket by leveraging technology, fostering inclusive platforms, and creating unique sporting opportunities for athletes of all ages and backgrounds.</div>
            <div className='text-lg text-[#5FBC1E]'>Our Vision Statement</div>
            <div className='text-md'>To become India’s leading sports organization by building a network of premier sports venues, launching innovative leagues, and harnessing cutting-edge technology to empower athletes and elevate the sporting experience.</div>
        </div>
    </div>
  );
}
export default Intro;
