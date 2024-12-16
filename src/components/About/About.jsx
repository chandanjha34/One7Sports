import React from 'react'
import about from '../../assets/About_assets/about.png'
import './About.css'
function About(){
  return (
    <div className='flex flex-col md:flex-row w-screen h-full md:h-screen md:gap-[10vw] p-6'>
        <div className='about-parts'>
            <img src={about} alt="" />
        </div>
        <div className='about-parts'>
            <div className='text-[#5FBC1E] text-2xl font-bold'>
            About us 
            </div>
            <div className='text-5xl'>
            Empowering Athletes, Building Communities
            </div>
            <div>
            <span className='text-[#5FBC1E]'>At One7Sports</span>, we are dedicated to supporting our clients throughout their cricketing journey with the utmost professionalism and integrity. Here's how we make that happen:
            </div>
            <div className='bullet-list'>
                <div className='bullet-item'>
                    <div className='text-[#5FBC1E]'>Professionalism at Every Step</div>
                    <div>We uphold the highest standards in everything we do, ensuring our clients receive expert guidance and seamless service.</div>
                </div>
                <div className='bullet-item'>
                    <div  className='text-[#5FBC1E]'>Integrity-Driven Approach</div>
                    <div>Honesty and transparency are at the core of our operations, making us a trusted partner in your cricketing endeavors.</div>
                </div>
                <div className='bullet-item'>
                    <div className='text-[#5FBC1E]'>Cricket Sports Management Expertise</div>
                    <div>With a deep understanding of the cricket world, we guide players and teams through the exciting and evolving landscape of sports management.</div>
                </div>
            </div>
            <div>
                <button className='bg-[#F59431] hover:scale-[105%] border px-4 py-1 text-white rounded-md'>
                    Download our App
                </button>
            </div>
        </div>
    </div>
  );
}
export default About;
