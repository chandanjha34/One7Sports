import React from 'react'
import './AboutGrounds.css'
import image1 from '../../assets/AboutPage_assets/ground1.png'
import image2 from '../../assets/AboutPage_assets/ground2.png'

function AboutGrounds(){
  return (
    <div>
        <div>
            ABOUT US
        </div>
        <div>
            Core Vertical
        </div>
        <div className='intro-section'>
            <div className='part'>
                <div>Sports Venues</div>
                <div>One7 Sports is rapidly expanding its footprint across India, both organically and through strategic acquisitions.</div>
                <div>Our goal is to become India’s largest network of premium sports venues, offering state-of-the-art facilities for cricket and other sports.</div>
                <div>Every One7 venue is designed to provide high-quality infrastructure, safety, and accessibility, fostering a thriving community of sports enthusiasts.</div>
            </div>
            <div className='part'>
                <img src={image1} alt="" />
            </div>
        </div>
        <div className='intro-section'>
            <div className='part'>
                <img src={image2} alt="" />
            </div>
            <div className='part'>
                <div>North India's Largest, Privately Owned Sports Park</div>
                <div>One7 Sports has successfully launched North India's largest, privately owned sports park, spread across 24 acres of land, strategically located in the heart of Gurgaon City. This premier facility offers:</div>
                <div>
                    <div>3 Lush Green Cricket Grounds</div>
                    <div>4 Pickle Ball Courts</div>
                    <div>Badminton Court</div>
                    <div>Tennis Court (Coming Soon)</div>
                    <div>Volleyball Court (Coming Soon)</div>
                    <div>Indoor Box Cricket Facility</div>
                    <div>Football Ground (Coming Soon)</div>
                    <div>Football and Cricket Academies (Coming Soon)</div>
                    <div>State-of-the-Art Café</div>
                    <div>Basket Ball Courts ( Coming Soon)</div>
                    <div>Additional high-quality amenities and sports facilities designed to create a vibrant sports community.</div>
                    <div>Every One7 venue is designed to provide high-quality infrastructure, safety, and accessibility, fostering a thriving community of sports enthusiasts.</div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default AboutGrounds;
