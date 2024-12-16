import React from 'react'
import Navbar from '../Navbar/Navbar'
import './EventsPage.css'
import EventSlider from '../EventsSlider/EventsSliders'
import Events from '../Events/Events'
import Downloads from '../Downloads/Downloads'
import Footer from '../Footer/Footer'
import EventsHub from '../EventsHub/EventsHub'
import SportsPark from '../SportsPark/SportsPark'

function EventsPage(){
  return (
    <div>
        <div className='EventsContainer px-[3vw]'>
            <Navbar/>
        </div>
        <div className='relative z-100'>
          <EventSlider/>
        </div>
        <div className='relative z-100'>
          <Events/>
        </div>
        <div className='relative z-100'>
          <EventsHub/>
        </div>
        <div className='relative z-100'>
          <SportsPark/>
        </div>
        <div className='relative z-100'>
          <Events/>
        </div>
        <div className='relative z-100'>
          <Downloads/>
        </div>
        <div className='relative z-10'>
          <Footer/>
        </div>
    </div>
  );
}
export default EventsPage;
