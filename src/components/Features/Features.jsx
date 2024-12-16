import React from 'react';
import './Features.css'; // Custom CSS for additional styles if required
import feature1 from '../../assets/Features_assets/feature1.png'
import feature2 from '../../assets/Features_assets/feature2.png'
import feature3 from '../../assets/Features_assets/feature3.png'

const FeatureSection = () => {
  return (
    <div className='max-w-screen overflow-hidden w-[100dvw] h-auto flex flex-col gap-[2rem]'>
      <div className='md:translate-y-[4vw] w-[90vw] mx-auto'>
        <div className=' text-center text-2xl font-bold text-[#5FBC1E]'>
          <p>PLATFORM FEATURES</p>
        </div>
        <div className='text-center'>
          <p className='text-5xl'>One Platform-Multiple Sports</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 boxes '>
        <div className='grid grid-cols-3  box'>
          <div className=''><img className='image' src={feature1} alt="" /></div>
          <div className='main-text'>Booking</div>
          <div className='side-text'>Easily reserve sports venues and grounds with our seamless platform. Find the perfect location for your event in just a few clicks.</div>
        </div>
        <div className='grid grid-cols-3 box custom-background text-white'>
          <div className=''><img className='image' src={feature2} alt="" /></div>
          <div className='main-text'>Management</div>
          <div className='side-text'>Organize and manage sports leagues effortlessly. From team registration to scheduling, we handle it all to ensure smooth operation.</div>
        </div>
        <div className='grid grid-cols-3  box'>
          <div className=''><img className='image' src={feature3} alt="" /></div>
          <div className='main-text'>Analytics</div>
          <div className='side-text'>Leverage advanced sports and video analytics to track performance, analyze data, and gain insights that drive improvement.</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;