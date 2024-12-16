import React from 'react'
import Map from '../Map/Map'
import Navbar from '../Navbar/Navbar'
import Contact from '../ContactPage/Contact'
import Footer from '../Footer/Footer'

function ContactPage(){
  return (
    <div>
        <div className='w-screen h-screen relative z-100 '>
            <Navbar/>
            <Map/>
        </div>
        <div className='relative z-100'>
          <Contact/>
        </div>
        <div className='relative z-100'>
          <Footer/>
        </div>
    </div>
  );
}
export default ContactPage;
