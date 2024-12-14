import React from 'react'
import './Impact.css'
import image1 from '../../assets/AboutPage_assets/impact1.png'
import image2 from '../../assets/AboutPage_assets/impact2.png'
import image3 from '../../assets/AboutPage_assets/impact3.png'

function Impact(){
  return (
    <div className='flex flex-col p-[2rem] md:p-[3rem] gap-[5rem]'>
        <div className='flex flex-col md:flex-row justify-around gap-[2rem] md:gap-[0rem]'>
            <div className='text-area text-5xl font-bold'>
                <div className='text-6xl'>Our Impact In NCR Region</div>
            </div>
            <div className='text-area'>
                <div className=' bullet-item'>One7 Sports has launched leagues that have quickly gained traction and are making waves in the NCR region.</div>
                <div className=' bullet-item'>Our leagues are recognized for their innovative formats, competitive spirit, and high-quality experience, becoming the talk of the town among sports enthusiasts and professionals alike.</div>
            </div>
        </div>
        <div className='flex justify-around'>
            <div className='w-[25vw] md:w-[20vw] image-curve'><img src={image1} alt="" /></div>
            <div className='w-[25vw] md:w-[20vw] image-curve'><img src={image2} alt="" /></div>
            <div className='w-[25vw] md:w-[20vw] image-curve'><img src={image3} alt="" /></div>
        </div>
    </div>
  );
}
export default Impact;
