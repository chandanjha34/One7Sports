import React from 'react'
import image1 from '../../assets/AboutPage_assets/feature1.png'
import image2 from '../../assets/AboutPage_assets/feature2.png'
import image3 from '../../assets/AboutPage_assets/feature3.png'
import image4 from '../../assets/AboutPage_assets/feature4.png'
function Why(){
  return (
    <div className='flex flex-col gap-[1rem] bg-[#E7EEF9]'>
        <div className='text-center text-2xl font-bold'>Our features</div>
        <div className='text-center text-2xl font-bold'>Why Choose One7 Sports?</div>
        <div className='flex flex-col md:flex-row w-[90vw] mx-auto justify-around gap-[3rem] my-[3rem]'>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image1} alt="" /></div>
                <div className='text-center font-bold'>Pursuit of Excellence</div>
                <div className='text-center'>Our focus is on delivering superior sports experiences for players, fans, and stakeholders.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image2} alt="" /></div>
                <div className='text-center font-bold'>Inclusive Approach</div>
                <div className='text-center'>From corporate leaders to aspiring young cricketers and talented women players, our leagues offer something for everyone.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image3} alt="" /></div>
                <div className='text-center font-bold'>Technology-Driven Growth</div>
                <div className='text-center'>We use data, analytics, and video technology to drive player development and improve game strategy.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image4} alt="" /></div>
                <div className='text-center font-bold'>Passion for Sports</div>
                <div className='text-center'>At the heart of One7 Sports is a deep love for cricket and a drive to push boundaries and set new standards in the sports industry.</div>
            </div>     
        </div>
    </div>
  );
}
export default Why;
