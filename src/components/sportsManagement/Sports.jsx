import React from 'react';
import trophy from '../../assets/AboutPage_assets/trophy.png';
import image1 from '../../assets/Franchise_assets/image1.png';
import image2 from '../../assets/Franchise_assets/image2.png';
import image3 from '../../assets/Franchise_assets/image3.png';
import image4 from '../../assets/Franchise_assets/image4.png';
import './Sports.css';

function Sports() {
  const sports = [
    {
      id: 1,
      image: image1,
      league: 'One7 Big Boys League (BBL)',
      description:
        'Designed exclusively for corporate professionals aged 30+ who retain their love, passion, and skills for cricket. The league offers a platform for corporate leaders to showcase their talent on the field and connect with like-minded professionals.',
    },
    {
      id: 2,
      image: image2,
      league: 'One7 Big Boys League Pro (BBL Pro)',
      description:
        'Tailored for professional players aged 30+ seeking competitive cricket at the highest level.',
    },
    {
      id: 3,
      image: image3,
      league: 'One7 North India Pro Cricket League (NICPL)',
      description:
        'Targets young cricketers from across 7 states in North India. Provides a unique platform for talent development and exposure through franchise-based cricket leagues.',
    },
    {
      id: 4,
      image: image4,
      league: 'One7 Women Premier League',
      description:
        'Focused on nurturing and developing women cricketers across North India. Aims to provide visibility and growth opportunities through franchise-based competitions and auctions.',
    },
  ];

  return (
    <div className="containers">
      <div className="text-center text-2xl font-bold text-[#F59431] pt-[4rem]">
        Sports Management
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around px-[1rem] pb-[3rem] gap-[3rem]">
        <div className="card-container flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="card relative bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${sport.image})`,
              }}
            >
              <div className="card-fronts bg-black bg-opacity-50 p-4 rounded-lg flex flex-col items-center">
                <p></p>
              </div>
              <div className="card-back bg-white p-4 rounded-lg text-black">
                <p>{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;
