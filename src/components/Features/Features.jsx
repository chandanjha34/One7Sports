import React from 'react';
import './Features.css'; // Custom CSS for additional styles if required
import feature1 from '../../assets/Features_assets/feature1.png'
import feature2 from '../../assets/Features_assets/feature2.png'
import feature3 from '../../assets/Features_assets/feature3.png'

const FeatureSection = () => {
  return (
    <div w-screen overflow-hidden h-screen>
      <div className='text-center text-[#5FBC1E]'>
        <p>PLATFORM FEATURES</p>
      </div>
      <div className='text-center scale-[200%]'>
        <p>One Platform-Multiple Sports</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 boxes '>
        <div className='grid grid-cols-3  box'>
          <div className=''><img className='image' src={feature1} alt="" /></div>
          <div className='main-text'>Booking</div>
          <div className='side-text'>Easily reserve sports venues and grounds with our seamless platform. Find the perfect location for your event in just a few clicks.</div>
        </div>
        <div className='grid grid-cols-3  box' style={{backgroundColor:'blue', color:'white'}}>
          <div className=''><img className='image' src={feature2} alt="" /></div>
          <div className='main-text'>Booking</div>
          <div className='side-text'>Easily reserve sports venues and grounds with our seamless platform. Find the perfect location for your event in just a few clicks.</div>
        </div>
        <div className='grid grid-cols-3  box'>
          <div className=''><img className='image' src={feature3} alt="" /></div>
          <div className='main-text'>Booking</div>
          <div className='side-text'>Easily reserve sports venues and grounds with our seamless platform. Find the perfect location for your event in just a few clicks.</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;