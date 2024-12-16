import React from 'react'
import './Founder.css'
import image1 from '../../assets/AboutPage_assets/founder1.png'
import image2 from '../../assets/AboutPage_assets/founder2.png'
import image3 from '../../assets/AboutPage_assets/founder3.png'

function Founder(){
  return (
    <div className='flex flex-col py-[3rem] gap-[2rem]'>
        <div className='basket'>
            <div className='sidePart px-[2rem]'>
                <div className='text-xl md:text-3xl'>Ajay Chhangani</div>
                <div className='text-md md:text-lg text-[#103A88]'>Co - founder</div>
                <div className='text-md hidden sm:block'>Ajay is a dynamic professional with 24+ years of entrepreneurship and leadership experience. A passionate cricketer, he actively leads a cricket club in Gurgaon. <br /> <br /> Ajay has a proven track record of driving exponential growth in various startups and is recognized for his expertise in Bottom of the Pyramid (BoP) markets. <br /> <br />His strengths include building strong government relations, forming strategic alliances, and securing CSR partnerships. <br /> <br />With experience across IT, Food-Tech, Ed-Tech, Sports-Tech, and E-Commerce, Ajay was named one of Asia's 100 Emerging Young Leaders in 2017 by PwC & URS and has received several prestigious awards, including the DNA Education Award and Indian Achiever's top 50 under 50 recognition.</div>
            </div>
            <div className='sidePart'><img src={image1} alt="" /></div>
        </div>
        <div className='basket'>
            <div className='sidePart'><img src={image2} alt="" /></div>
            <div className='sidePart  p-[2rem]'>
                <div className='text-xl md:text-3xl'>Nikhil Dhingra</div>
                <div className='text-md md:text-lg text-[#103A88]'>Co - founder and CEO</div>
                <div className='hidden sm:block text-md '>Nikhil Dhingra, a seasoned cricketer with a rich background in school and inter-university cricket, serves as the driving force behind One7 Sports. <br /><br />As the CEO, Nikhil brings a unique blend of on-field experience and strategic leadership. His vision is to create a cricketing ecosystem that fosters talent development, community engagement, and overall growth within the local cricketing scene.Beyond his role, Nikhil is an active club cricketer in Gurgaon and NCR. <br /><br />His dedication to the sport drives him to lead and manage a local cricket club, fostering a sense of community.</div>
            </div>
        </div>
        <div className='basket'>
            <div className='sidePart p-[2rem]'>
                <div className='text-xl md:text-3xl'>Arpit</div>
                <div className='text-md md:text-lg text-[#103A88]'>Co - founder and CEO</div>
                <div className='hidden sm:block text-md '>Arpit, a visionary leader in Data Science, brings a passion for learning and expertise in Data Science, Machine Learning, and User Experience. <br /><br />A lifelong sports enthusiast and active member of a cricket club in Gurgaon, Arpit combines his love for sports with his data-driven approach to make a positive impact in the sports world. <br /><br />With extensive experience in end-to-end data science projects, Arpit excels in tackling complex problems using sophisticated algorithms. His goal is to leverage his skills to drive innovation, enhance community engagement, and improve the sports experience for enthusiasts, reflecting his commitment to growth and community welfare.</div>
            </div>
            <div className='sidePart'><img src={image3} alt="" /></div>
        </div>
    </div>
  );
}
export default Founder;
