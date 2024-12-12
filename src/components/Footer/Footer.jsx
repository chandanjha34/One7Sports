import React from 'react';
import './Footer.css'
import logo from '../../assets/Footer_assets/logo.png'
import image1 from '../../assets/Footer_assets/img1.png'
import image2 from '../../assets/Footer_assets/img2.png'
import image3 from '../../assets/Footer_assets/img3.png'
import image4 from '../../assets/Footer_assets/img4.png'

const Footer = () => {
    return (
        <footer className=" bg-blue-500 whole text-white  flex flex-col items-center">
            <div className='foot flex flex-col items-center py-4 gap-2'>
                <div><img src={logo} alt="" /></div>
                <div className='text-2xl'>Join our community </div>
                <div>Subscribe for exclusive updates and be part of the action!</div>
                <div className='flex gap-4'>
                    <button className='border w-[17vw] text-sm p-3'>Provide your Gmail</button>
                    <button className='border w-[8vw] text-sm  p-3'>SUBMIT</button>
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