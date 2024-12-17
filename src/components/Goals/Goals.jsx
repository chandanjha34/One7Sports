import React from 'react'
import goal1 from '../../assets/Franchise_assets/goal1.png'
import goal2 from '../../assets/Franchise_assets/goal2.png'
import goal3 from '../../assets/Franchise_assets/goal3.png'
import goal4 from '../../assets/Franchise_assets/goal4.png'
import goal5 from '../../assets/Franchise_assets/goal5.png'
import goal6 from '../../assets/Franchise_assets/goal6.png'

function Goals(){
  return (
    <div className='flex flex-col px-[1rem] py-[2rem] gap-[1rem]'>
        <div className='text-lg text-center lg:text-start text-[#5FBC1E]'>Games Offered</div>
        <div className='text-4xl text-center lg:text-start'>One7 Sports Leagues Goals</div>
        <div className='flex justify-around flex-col gap-[3rem] items-center lg:flex-row'>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center gap-[1rem] mx-auto'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] lg:h-[30vw]'><img src={goal1} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Enhancing Brand Image</div>
            </div>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center lg:gap-[1rem]'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] h-[30vw]'><img src={goal2} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Corporate social </div>
            </div>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center gap-[1rem]'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] h-[30vw]'><img src={goal3} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Networking</div>
            </div>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center gap-[1rem]'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] h-[30vw]'><img src={goal4} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Direct visibility and audience connection on the ground</div>
            </div>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center gap-[1rem]'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] h-[30vw]'><img src={goal5} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Professional and memorable experience</div>
            </div>
            <div className='w-full lg:w-[12vw] lg:h-[40vh] flex flex-col items-center gap-[1rem]'>
                <div className='w-[30vw] mx-auto lg:w-[12vw] h-[30vw]'><img src={goal6} alt="" /></div>
                <div className='relative top-0 h-full text-center'>Direct Sales Oppourtunities</div>
            </div>
        </div>
    </div>
  );
}
export default Goals;
