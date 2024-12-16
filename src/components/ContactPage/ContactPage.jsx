import React from 'react'
import Map from '../Map/Map'
import Navbar from '../Navbar/Navbar'
import Contact from '../ContactPage/Contact'
import Footer from '../Footer/Footer'

function ContactPage() {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <div className="relative w-[95vw] mx-auto z-[1000]">
          <Navbar />
        </div>
        <div className="relative z-10">
          <Map />
        </div>
      </div>
      <div className="relative z-[100]">
        <Contact />
      </div>
      <div className="relative z-[100]">
        <Footer />
      </div>
    </div>
  );
}
export default ContactPage;
