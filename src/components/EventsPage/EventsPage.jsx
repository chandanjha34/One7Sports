import React from 'react'
import Navbar from '../Navbar/Navbar'
import './EventsPage.css'
import EventSlider from '../EventsSlider/EventsSliders'
import Events from '../Events/Events'
import Downloads from '../Downloads/Downloads'
import Footer from '../Footer/Footer'

function EventsPage(){
  return (
    <div>
        <div className='EventsContainer px-[3vw]'>
            <Navbar/>
        </div>
        <EventSlider/>
        <Events/>
        <Downloads/>
        <Footer/>
    </div>
  );
}
export default EventsPage;
