import React from 'react'
import image1 from '../../assets/EventsPage_assets/image1.png'
import image2 from '../../assets/EventsPage_assets/image2.png'
import image3 from '../../assets/EventsPage_assets/image3.png'
import image4 from '../../assets/EventsPage_assets/image4.png'
import image5 from '../../assets/EventsPage_assets/image5.png'

function EventsHub(){
  return (
    <div className='w-screen h-auto flex flex-col gap-[1rem] p-2'>
        <div className='text-2xl font-bold text-center'>One7Sports Park - Event Hub</div>
        <div className='text-xl text-center'>Welcome to One7Sports Park, North India’s largest privately owned sports park, spanning 24 acres in the heart of Gurugram. We host sports days, leagues, tournaments, and much more, providing an exceptional venue for corporates, athletes, and sports enthusiasts to enjoy a premier sports experience.</div>
        <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='w-[90vw] flex flex-col items-center md:w-[10vw]'>
                <div><img className='max-w-[50vw] md:max-w-[10vw]' src={image1} alt="" /></div>
                <div>Professional Management</div>
            </div>
            <div className='w-[90vw] flex flex-col items-center  md:w-[10vw]'>
                <div><img className='max-w-[50vw] md:max-w-[10vw]' src={image2} alt="" /></div>
                <div>Monthly Events with Significant Exposure</div>
            </div>
            <div className='w-[90vw] flex flex-col items-center  md:w-[10vw]'>
                <div><img className='max-w-[50vw] md:max-w-[10vw]' src={image3} alt="" /></div>
                <div>Large & Loyal Membership Base</div>
            </div>
            <div className='w-[90vw] flex flex-col items-center  md:w-[10vw]'>
                <div><img className='max-w-[50vw] md:max-w-[10vw]' src={image4} alt="" /></div>
                <div>Multiple Marketing Site for Branding</div>
            </div>
            <div className='w-[90vw] flex flex-col items-center  md:w-[10vw]'>
                <div><img className='max-w-[50vw] md:max-w-[10vw]' src={image5} alt="" /></div>
                <div>State for the Art Amenities</div>
            </div>
        </div>
    </div>
  );
}
export default EventsHub;
