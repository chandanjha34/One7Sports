import React from 'react'
import './WhyCareer.css'

function WhyCareer (){
  return (
    <div className='flex flex-col py-[3rem]'>
        <div className='text-center text-4xl font-bold text-[#5FBC1E]'>Why join us</div>
        <div className='flex justify-around flex-col md:flex-row items-center w-[90vw] mx-auto gap-[2rem] md:gap-[0rem] pt-[2rem]'>
            <div className='obj'>
                <div className='font-bold text-xl'>Growth Opportunities</div>
                <div className='text-sm'>We provide continuous learning and development to help you achieve your career goals.</div>
            </div>
            <div className='obj'>
                <div className='font-bold text-xl'>Dynamic Culture</div>
                <div className='text-sm'>Join a diverse, inclusive team that values creativity, innovation, and teamwork.</div>
            </div>
            <div className='obj'>
                <div className='font-bold text-xl'>Work-Life Balance</div>
                <div className='text-sm'>We offer flexible work arrangements to support your personal & professional well-being.</div>
            </div>
            <div className='obj'>
                <div className='font-bold text-xl'>Competitive Benefits</div>
                <div className='text-sm'>Enjoy a comprehensive benefits package that includes health, wellness, and financial perks.</div>
            </div>
        </div>
    </div>
  );
}
export default WhyCareer;
