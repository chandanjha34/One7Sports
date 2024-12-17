import React from 'react';
import './Games.css';
import game1 from '../../assets/Games_assets/Game1.png';
import game2 from '../../assets/Games_assets/Game2.jpg';
import game3 from '../../assets/Games_assets/Game3.jpg';
import game4 from '../../assets/Games_assets/Game4.jpg';
import game5 from '../../assets/Games_assets/Game5.jpg';

function Games() {
  return (
    <div className="whole-section mx-auto">
      <div className="text-[#5FBC1E] text-2xl font-bold text-center mb-4">
        Games Offered
      </div>
      <div className="text-section text-center px-4">
        <div className="first-text text-3xl md:text-4xl leading-snug font-bold">
          Discover the Exciting Games You Can Play
        </div>
        <div className="second-text mt-4 text-base md:text-lg">
          Our sports campus offers games and activities for all ages and skill
          levels. Whether you're improving skills, staying fit, or seeking
          friendly competition, we have something for everyone—team sports like
          soccer and basketball or individual challenges like tennis and track.
        </div>
      </div>
      <div className="main-game flex flex-wrap justify-center gap-4 mt-8">
        {/* Main Game Image */}
        <div className="image1 bg-white rounded-lg shadow-lg flex flex-col items-center p-4 w-full md:w-1/3 lg:w-1/4">
          <img className="h-48 w-full object-cover rounded-lg" src={game5} alt="Cricket" />
          <p className="text-xl font-bold mt-2">Cricket</p>
          <p className="text-md text-center mt-1">
            Perfect for players of all skill levels, offering a fun and
            competitive environment.
          </p>
        </div>

        {/* Smaller Game Images */}
        {[{ src: game2, name: 'TABLE TENNIS',description:'A fast, reflex-based sport played on a small table.' }, { src: game3, name: 'BADMINTON',description:'A fast-paced racket sport requiring agility, precision, and quick reflexes.' }, { src: game4, name: 'TENNIS',description:'A versatile racket sport requiring physical agility and mental focus.' }, { src: game1, name: 'BASKETBALL',description:'A dynamic team sport focused on scoring points through hoops.' }].map(
          (game, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg w-full sm:w-[45%] md:w-[30%] lg:w-[20%] p-4"
            >
              <img
                className="h-48 w-full object-cover rounded-lg"
                src={game.src}
                alt={game.name}
              />
              <p className="text-xl font-bold mt-2">{game.name}</p>
              <p className='text-md text-center mt-1'>{game.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Games;
