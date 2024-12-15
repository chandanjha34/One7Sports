import React from 'react'
import './Leagues.css'
import image1 from '../../assets/Franchise_assets/image1.png'
import image2 from '../../assets/Franchise_assets/image2.png'
import image3 from '../../assets/Franchise_assets/image3.png'
import image4 from '../../assets/Franchise_assets/image4.png'
import image5 from '../../assets/Franchise_assets/image5.png'
import image6 from '../../assets/Franchise_assets/image6.png'

function Leagues(){
  return (
    <div className='brand-container z-12'>
        <div className='mx-auto text-lg lg:text-4xl w-[90vw] text-center font-semibold lg:w-[60vw]'>Teams can be bought by Sports Enthusiasts, Corporates, Individuals, Academies, Existing Team Captains</div>
        <div className='flex flex-wrap league z-12'>
            <div><img className='w-[20vw] rounded-lg' src={image1} alt="" /></div>
            <div><img className='w-[20vw] rounded-lg' src={image2} alt="" /></div>
            <div><img className='w-[20vw] rounded-lg' src={image3} alt="" /></div>
            <div><img className='w-[20vw] rounded-lg' src={image4} alt="" /></div>
            <div><img className='w-[20vw] rounded-lg' src={image5} alt="" /></div>
        </div>
        <img className='absolute w-[13rem] z-3 opacity-[20%]' src={image6} alt="" />
    </div>

  );
}
export default Leagues;
