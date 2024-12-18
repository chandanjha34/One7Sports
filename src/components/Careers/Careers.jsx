import React from 'react';
import './Careers.css';
import Navbar from '../Navbar/Navbar';
import mainImage from '../../assets/EventsPage_assets/frontPage.png';
import Why from '../Careers/WhyCareer/WhyCareer';
import JobList from '../Careers/JobPosting/JobList';
import Footer from '../Footer/Footer';

function Careers() {
  return (
    <div>
      {/* Main Career Section */}
      <div className="w-[95vw] h-auto mx-auto main-career relative">
        {/* Navbar with z-index */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Career Header Section */}
        <div className="Main-Career relative z-40 mt-10">
          <div className="text-3xl text-[#5FBC1E] mb-4">Career Opportunities</div>
          <div className="text-7xl font-bold mb-6">Join Our Team</div>
          <div className="text-lg mb-8">
            At One7sports, we believe in fostering a collaborative and
            innovative work environment where every team member can thrive. We
            are always looking for talented, passionate individuals to help us
            drive growth and make an impact in the industry.
          </div>
          <div className="relative z-30">
            <img
              className="rounded-lg shadow-lg"
              src={mainImage}
              alt="Career Main"
            />
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="relative z-20">
        <Why />
      </div>

      {/* Job List Section */}
      <div className="relative z-10">
        <JobList />
      </div>

      {/* Footer Section */}
      <div className="relative z-0">
        <Footer />
      </div>
    </div>
  );
}

export default Careers;
