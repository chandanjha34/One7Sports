import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/AboutPage/AboutPage'
import Events from './components/EventsPage/EventsPage'
import Services from './components/ServicesPage/ServicesPage'
import Franchise from './components/Franchise/Franchise'
import Contact from './components/ContactPage/ContactPage'
import Career from './components/Careers/Careers'
import JobDetails from './components/Careers/JobDetails/JobDetails'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/franchise" element={<Franchise/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/careers' element={<Career/>}/>
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  )
}

export default App
