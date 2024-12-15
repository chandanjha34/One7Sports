import React from 'react';
import './Footer.css'
import logo from '../../assets/Footer_assets/logo.png'
import image1 from '../../assets/Footer_assets/img1.png'
import image2 from '../../assets/Footer_assets/img2.png'
import image3 from '../../assets/Footer_assets/img3.png'
import image4 from '../../assets/Footer_assets/img4.png'

const Footer = () => {
    return (
        <footer className=" bg-blue-500 wholes text-white  flex flex-col items-center">
            <div className='foot'>
                <div className='h-[40vh]'><img className='h-full' src={logo} alt="" /></div>
                <div className='text-center text-white drop-shadow-[0_1px_1px_#000] border-1 border-black text-lg md:text-2xl'>"Why wait for luck to find the perfect ground?<br />With One7 Sports , booking your dream sports ground is just a tap away.<br />No hassle. No wait. Just play.<br />Download now and claim your game!"</div>
                <div className='text-4xl'>Join our community </div>
                <div className='text-lg text-center'>Subscribe for exclusive updates and be part of the action!</div>
                <div className='flex gap-4'>
                    <button className='border w-fit lg:w-[17vw] text-sm p-3'>Provide your Gmail</button>
                    <button className='border w-fit lg:w-[8vw] text-sm  p-3'>SUBMIT</button>
                </div>
                <div className='flex gap-3'>
                    <span><a href="#"><img src={image1} alt="" /></a></span>
                    <span><a href="#"><img src={image2} alt="" /></a></span>
                    <span><a href="#"><img src={image3} alt="" /></a></span>
                    <span><a href="#"><img src={image4} alt="" /></a></span>
                </div>
                <div className='flex gap-4'>   
                        <span>Services</span>
                        <span>About</span>
                        <span>Franchise</span>
                        <span>Events</span>
                        <span>Contact Us</span>
                </div>
                <div className='border-t-[1px] w-[100vw] text-center'>© 2024 One7sports. All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;