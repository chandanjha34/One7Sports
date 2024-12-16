import React from 'react'
import './Booking.css'

function Booking(){
  return (
    <div className='py-[3rem]'>
        <div className='ground-booking text-white'>
            <div className='text-lg text-[#5FBC1E]'>Start playing</div>
            <div className='text-xl sm:text-5xl'>"Join the action. Elevate your game!"</div>
            <div className='text-center'>Join One7 Sports in transforming the future of sports. Together, we’ll continue to innovate, compete, and create new opportunities for sports enthusiasts across India!</div>
            <div><p className='text-center font-bold'>Want To Book Ground</p></div>
            <div><a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en&pli=1"><button className='bg-[#F59431] p-3 rounded-lg'>Download Our App</button></a></div>
        </div>
    </div>
  );
}
export default Booking;
