import React from 'react'
import image from '../../assets/EventsPage_assets/frontPage.png'

function SportsPark(){
  return (
    <div className='w-[90vw] mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='w-[95vw] flex flex-col gap-[1rem] md:w-[45vw]'>
            <p className='font-bold text-2xl'>One7 Sports Park Highlights</p>
            <p className='bullet-items'><span className='font-bold text-lg'>Three Magnificent Cricket Grounds:</span> Each meticulously maintained to ensure a world-class experience for players and spectators.</p>
            <p className='bullet-items'><span className='font-bold text-lg'>Prime Location:</span> Situated in Baliyawas, Gurugram’s new sports hub, easily accessible from all parts of the city.</p>
            <p className='bullet-items'><span className='font-bold text-lg'>Professional Management Team:</span> Founded by entrepreneurs and cricket enthusiasts dedicated to transforming the local sports scene.</p>
            <p className='bullet-items'><span className='font-bold text-lg'>State-of-the-Art Amenities:</span> Featuring high-quality sports infrastructure, comfortable viewing areas, and a refreshing café serving a variety of food and drinks.</p>
        </div>
        <div className='w-[95vw] md:w-[40vw]'><img className='rounded-lg' src={image} alt="" /></div>
    </div>
  );
}
export default SportsPark;
