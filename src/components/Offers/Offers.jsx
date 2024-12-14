import React from 'react'
import '../sportsManagement/Sports.css'
import tick from '../../assets/AboutPage_assets/tick.png'
function Offers(){

    const offers = [
        { id: 1, league:"Comprehensive Sporting Ecosystem",description:"By integrating venues, leagues, and technology, One7 Sports offers a holistic approach to sports development and player engagement."},
        { id: 2, league:"Player Centric Leagues", description:"Our leagues are designed with a unique focus on different player demographics—corporate professionals, seasoned athletes, and aspiring youth"},
        { id: 3, league:"Technological Innovation",description:"Leveraging technology to deliver real-time data, analytics, and player feedback, making training and performance optimization seamless and impactful."},
        { id: 4, league:"Franchise-Based Model",description:"All leagues are franchise-based, offering exciting opportunities for player auctions and fostering healthy competition, strategic team-building, and robust fan engagement."},
      ];

  return (
    <div>
        <div className="text-center text-lg text-[#F59431] pt-[4rem]">Top Leagues</div>
          <div className="flex flex-col items-center md:flex-row md:justify-around px-[1rem] py-[3rem] gap-[3rem]">
            <div className="card-container flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8">
              {offers.map((offers) => (
                <div className="card" key={offers.id}>
                  <div className="card-front">
                    <img src={tick} alt="Trophy Icon" className="w-[3rem]" />
                    <h3 className='text-xl'>{offers.league}</h3>
                  </div>
                  <div className="card-back">
                    <p>{offers.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
}
export default Offers;
