import React from 'react';
import '../sportsManagement/Sports.css';
import image1 from '../../assets/Franchise_assets/image1.png';
import image2 from '../../assets/Franchise_assets/image2.png';
import image3 from '../../assets/Franchise_assets/image3.png';
import image4 from '../../assets/Franchise_assets/image4.png';
import tick from '../../assets/AboutPage_assets/tick.png';

function Offers() {
  const offers = [
    {
      id: 1,
      image: image1,
      league: 'Comprehensive Sporting Ecosystem',
      description:
        'By integrating venues, leagues, and technology, One7 Sports offers a holistic approach to sports development and player engagement.',
    },
    {
      id: 2,
      image: image2,
      league: 'Player Centric Leagues',
      description:
        'Our leagues are designed with a unique focus on different player demographics—corporate professionals, seasoned athletes, and aspiring youth.',
    },
    {
      id: 3,
      image: image3,
      league: 'Technological Innovation',
      description:
        'Leveraging technology to deliver real-time data, analytics, and player feedback, making training and performance optimization seamless and impactful.',
    },
    {
      id: 4,
      image: image4,
      league: 'Franchise-Based Model',
      description:
        'All leagues are franchise-based, offering exciting opportunities for player auctions and fostering healthy competition, strategic team-building, and robust fan engagement.',
    },
  ];

  return (
    <div>
      <div className="text-center text-2xl font-bold text-[#F59431] pt-[4rem]">
        Sports Management
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around px-[1rem] py-[3rem] gap-[3rem]">
        <div className="card-container flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="card"
              style={{
                backgroundImage: `url(${offer.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="card-front">
                <p> </p>
              </div>
              <div className="card-back">
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
