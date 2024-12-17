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
                <div className='text-center font-bold'>Commitment to Excellence</div>
                <div className='text-center'>We aim to deliver top-notch sports experiences to players, fans, and all stakeholders.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image2} alt="" /></div>
                <div className='text-center font-bold'>Inclusive Approach</div>
                <div className='text-center'>From corporate pros to youth cricketers and women players, our leagues have it all.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image3} alt="" /></div>
                <div className='text-center font-bold'>Technology-Driven Growth</div>
                <div className='text-center'>At One7 Sports, a true love for cricket fuels our push to set new sports standards.</div>
            </div>
            <div className='flex flex-col items-center gap-[1rem]'>
                <div><img className='image-circle bg-[#103A88] rounded-full p-[0.5rem]' src={image4} alt="" /></div>
                <div className='text-center font-bold'>Passion for Sports</div>
                <div className='text-center'>Data, analytics, and video tech enhance player growth and sharpen game strategy.</div>
            </div>     
        </div>
    </div>
  );
}
export default Why;
