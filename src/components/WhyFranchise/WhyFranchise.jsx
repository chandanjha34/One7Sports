import React from 'react'
import './WhyFranchise.css'
import image5 from '../../assets/Franchise_assets/Why.png'

function WhyFranchise() {
  return (
    <div className='flex justify-around flex-col sm:flex-row p-[1rem] gap-[4rem] sm:gap-[0rem]'>
        <div className='w-[80vw] sm:w-[40vw] h-[50vh] mx-auto'><img className='h-[60vh] mx-auto' src={image5} alt="" /></div>
        <div className='w-[80vw] sm:w-[40vw] h-[50vh] flex flex-col gap-2'>
            <div className='text-4xl'>Why One7 Sports Leagues</div>
            <div className='points'>Big Business</div>
            <div className='points'>Product Placement</div>
            <div className='points'>Social Cause and Engagement</div>
            <div className='points'>Content Marketing</div>
            <div className='points'>Cause Marketing</div>
            <div className='points'>Target Audience</div>
            <div className='points'>Network Opportunity</div>
            <div className='points'>Brand Visibility</div>
            <div className='bg-[#F59431] border border-[#F59431] w-fit px-[1rem] py-1 rounded-lg'><button>DOWNLOAD OUR APP</button></div>
        </div>
    </div>
  );
}
export default WhyFranchise;
