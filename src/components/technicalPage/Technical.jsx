import React from 'react'
import './technical.css'
import mobile1 from '../../assets/Downloads_assets/demo1.png'
import mobile2 from '../../assets/Downloads_assets/demo2.png'
import image1 from '../../assets/AboutPage_assets/tool1.png'
import image2 from '../../assets/AboutPage_assets/tool2.png'
import image3 from '../../assets/AboutPage_assets/tool3.png'

function Technical(){
  return (
    <div className='flex justify-around flex-col lg:flex-row'>
        <div className='side'>
            <div className='absolute left-[-4rem] lg:left-[7rem]'><img src={mobile1} alt="" /></div>
            <div className='absolute left-[6rem] lg:left-[0rem]'><img src={mobile2} alt="" /></div>
        </div>
        <div className='side right-parts'>
            <div className='text-[#103A88] text-2xl font-bold'>Technology Solutions</div>
            <div className='benefits'>
                <div><img src={image1} alt="" /></div>
                <div className='font-semibold'>One7 App</div>
                <div>Aggregates sports venues across India, making it easier for players and enthusiasts to find, book, and play.</div>
            </div>
            <div className='benefits'>
                <div><img src={image2} alt="" /></div>
                <div className='font-semibold'>Data Analytics Tools</div>
                <div>Offers unparalleled insights into player performance, helping athletes at all levels track, analyze, and improve their game.</div>
            </div>
            <div className='benefits'>
                <div><img src={image3} alt="" /></div>
                <div className='font-semibold'>Video Analytics Tools</div>
                <div>Cutting-edge video solutions that provide in-depth analysis and player feedback, revolutionizing the way cricket is played and trained.</div>
            </div>
        </div>
    </div>
  );
}
export default Technical;
