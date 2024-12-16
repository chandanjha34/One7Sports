import React from 'react'
import trophy from '../../assets/AboutPage_assets/trophy.png'
import card from '../../assets/AboutPage_assets/card.png'
import './Sports.css'

function Sports(){

  const sports = [
    { id: 1, league:"One7 Big Boys League (BBL)",description:"Designed exclusively for corporate professionals aged 30+ who retain their love, passion, and skills for cricket The league offers a platform for corporate leaders to showcase their talent on the field and connect with like-minded professionals."},
    { id: 2, league:"One7 Big Boys League Pro (BBL Pro)",description:"Tailored for professional players aged 30+ seeking competitive cricket at the highest level."},
    { id: 3, league:"One7 North India Pro Cricket League (NICPL)",description:"Targets young cricketers from across 7 states in North India. Provides a unique platform for talent development and exposure through franchise-based cricket leagues."},
    { id: 4, league:"One7 Women Premier League",description:"Focused on nurturing and developing women cricketers across North India. Aims to provide visibility and growth opportunities through franchise-based competitions and auctions."},
  ];

  return (
        <div className="containers">
          <div className="text-center text-2xl font-bold text-[#F59431] pt-[4rem]">Top Leagues</div>
          <div className="flex flex-col items-center md:flex-row md:justify-around px-[1rem] pb-[3rem] gap-[3rem]">
            <div className="card-container flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8">
              {sports.map((sports) => (
                <div className="card" key={sports.id}>
                  <div className="card-front">
                    <img src={trophy} alt="Trophy Icon" className="icon" />
                    <h3 className='text-xl text-white'>{sports.league}</h3>
                  </div>
                  <div className="card-back">
                    <p>{sports.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
export default Sports;
