import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './JobDetailsPage.css'

import image from '../../../assets/Careers_assets/compo.png'

function JobDetailsPage(){
  return (
    <div className='w-[95vw] mx-auto'>
        <Navbar/>
        <div className='imag-container'>
            <img className='w-[90vw]' src={image} alt="" />
        </div>
    </div>
  );
}
export default JobDetailsPage;
