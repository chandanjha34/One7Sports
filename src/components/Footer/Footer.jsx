import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Footer_assets/logo.png';
import image1 from '../../assets/Footer_assets/img1.png';
import image2 from '../../assets/Footer_assets/img2.png';
import image3 from '../../assets/Footer_assets/img3.png';
import image4 from '../../assets/Footer_assets/img4.png';

const Footer = () => {
    const [email, setEmail] = useState(''); // State for email input

    const handleChange = (e) => {
        setEmail(e.target.value); // Update email state as user types
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Email submitted:", email); // Log or perform any action with email
        setEmail(''); // Clear the email field after submission
    };

    return (
        <footer className="wholes text-white flex flex-col items-center">
            <div className="foot">
                <div className="h-[40vh]">
                    <img className="h-full" src={logo} alt="One7Sports Logo" />
                </div>
                <div className="text-center text-white drop-shadow-[0_1px_1px_#000] border-1 border-black text-md max-w-[90vw] md:text-2xl">
                    "Why wait for luck to find the perfect ground?<br />
                    With One7 Sports, booking your dream sports ground is just a tap away.<br />
                    No hassle. No wait. Just play.<br />
                    Download now and claim your game!"
                </div>
                <div className="text-4xl">Join our community</div>
                <div className="text-lg text-center">
                    Subscribe for exclusive updates and be part of the action!
                </div>
                <form onSubmit={handleSubmit} className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Provide Your Email"
                        value={email} // Controlled input
                        onChange={handleChange} // Update state on change
                        className="border w-fit lg:w-[15vw] placeholder-[#000000] text-black bg-[#1C66EE1F] text-md rounded-lg p-3"
                        required
                    />
                    <button
                        type="submit" // Form submission triggers handleSubmit
                        className="border w-fit lg:w-[8vw] bg-[#1C66EE1F] text-black text-md rounded-lg p-3"
                    >
                        SUBMIT
                    </button>
                </form>
                <div className="flex gap-3">
                    <span>
                        <a href="#"><img src={image1} alt="Social Media Icon 1" /></a>
                    </span>
                    <span>
                        <a href="#"><img src={image2} alt="Social Media Icon 2" /></a>
                    </span>
                    <span>
                        <a href="#"><img src={image3} alt="Social Media Icon 3" /></a>
                    </span>
                    <span>
                        <a href="#"><img src={image4} alt="Social Media Icon 4" /></a>
                    </span>
                </div>
                <div className="flex gap-2 md:gap-4 max-w-[90vw]">
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/franchise">Franchise</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
                <div className="border-t-[1px] w-[100vw] text-center">
                    © 2024 One7sports. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
