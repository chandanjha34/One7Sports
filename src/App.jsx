import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/AboutPage/AboutPage'
import Events from './components/EventsPage/EventsPage'
import Services from './components/ServicesPage/ServicesPage'
import Franchise from './components/Franchise/Franchise'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/franchise" element={<Franchise/>}/>
      </Routes>
    </Router>
  )
}

export default App
