import React from 'react'
import './AboutGrounds.css'
import image1 from '../../assets/AboutPage_assets/ground1.png'
import image2 from '../../assets/AboutPage_assets/ground2.png'

function AboutGrounds(){
  return (
    <div className='flex gap-[1rem] flex-col'>
        <div className='text-center text-[#5FBC1E] text-4xl font-bold'>
            ABOUT US
        </div>
        <div className='text-center text-2xl'>
            Core Vertical
        </div>
        <div className='intro-section'>
            <div className='sm:hidden part'>
                <img className='image6' src={image1} alt="" />
            </div>
            <div className='part'>
                <div className='text-[#103A88] text-2xl font-bold py-[1rem]'>Sports Venues</div>
                <div className='bullet-item'>One7 Sports is rapidly expanding its footprint across India, both organically and through strategic acquisitions.</div>
                <div className='bullet-item'>Our goal is to become India’s largest network of premium sports venues, offering state-of-the-art facilities for cricket and other sports.</div>
                <div className='bullet-item'>Every One7 venue is designed to provide high-quality infrastructure, safety, and accessibility, fostering a thriving community of sports enthusiasts.</div>
            </div>
            <div className='hidden sm:block part'>
                <img className='image6' src={image1} alt="" />
            </div>
        </div>
        <div className='intro-section'>
            <div className='part'>
                <img className='image7' src={image2} alt="" />
            </div>
            <div className='part'>
                <div className='text-[#103A88] text-2xl font-bold'>North India's Largest, Privately Owned Sports Park</div>
                <div className='text-lg py-[1rem]'>One7 Sports has successfully launched North India's largest, privately owned sports park, spread across 24 acres of land, strategically located in the heart of Gurgaon City. This premier facility offers:</div>
                <div>
                    <div className='bullet-item'>3 Lush Green Cricket Grounds</div>
                    <div className='bullet-item'>4 Pickle Ball Courts</div>
                    <div className='bullet-item'>Badminton Court</div>
                    <div className='bullet-item'>Tennis Court (Coming Soon)</div>
                    <div className='bullet-item'>Volleyball Court (Coming Soon)</div>
                    <div className='bullet-item'>Indoor Box Cricket Facility</div>
                    <div className='bullet-item'>Football Ground (Coming Soon)</div>
                    <div className='bullet-item'>Football and Cricket Academies (Coming Soon)</div>
                    <div className='bullet-item'>State-of-the-Art Café</div>
                    <div className='bullet-item'>Basket Ball Courts ( Coming Soon)</div>
                    <div className='bullet-item'>Additional high-quality amenities and sports facilities designed to create a vibrant sports community.</div>
                    <div className='bullet-item'>Every One7 venue is designed to provide high-quality infrastructure, safety, and accessibility, fostering a thriving community of sports enthusiasts.</div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default AboutGrounds;
