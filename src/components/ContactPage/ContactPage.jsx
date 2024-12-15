import React from 'react'
import Map from '../Map/Map'
import Navbar from '../Navbar/Navbar'
import Contact from '../ContactPage/Contact'
import Footer from '../Footer/Footer'

function ContactPage(){
  return (
    <div>
        <div className='w-screen h-screen'>
            <Navbar/>
            <Map/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  );
}
export default ContactPage;
