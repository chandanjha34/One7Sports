import React, { useState } from 'react'
import './Games.css'
import upArrow from '../../assets/Games_assets/upArrow.png'
import downArrow from '../../assets/Games_assets/downArrow.png'
import game1 from '../../assets/Games_assets/Game1.png'
import game2 from '../../assets/Games_assets/Game2.jpg'
import game3 from '../../assets/Games_assets/Game3.jpg'
import game4 from '../../assets/Games_assets/Game4.jpg'
import game5 from '../../assets/Games_assets/Game5.jpg'

function Games () {

    const [reDirect1,changeImage1]=useState(upArrow);
    const [reDirect2,changeImage2]=useState(downArrow);
    const [reDirect3,changeImage3]=useState(downArrow);
    const [reDirect4,changeImage4]=useState(downArrow);
    const [reDirect5,changeImage5]=useState(downArrow);

  return (
    <div className='whole-section overflow-hidden w-screen h-auto'>
        <div className='text-[#5FBC1E]'>
            Games Offered
        </div>
        <div className='text-section'>
            <div className='first-text'>
            Discover the Exciting Games You Can Play
            </div>
            <div className='second-text'>
            Our sports campus offers games and activities for all ages and skill levels. Whether you're improving skills, staying fit, or seeking friendly competition, we have something for everyone—team sports like soccer and basketball or individual challenges like tennis and track.
            </div>
        </div>
        <div className='flex flex-col overflow-y-visible h-auto md:items-center md:justify-center md:flex-row gap-[2em]'>
            <div className='image1 bg-white rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)] flex flex-col gap-[1rem] md:gap-0 overflow-hidden transform transition-all duration-200 active:scale-[110%] active:shadow-none md:hover:scale-[110%] md:hover:shadow-none' >
                    <div className='py-[1rem]'>
                        <img className='absolute w-[6vw] bg-[#1C66EE] border-2 border-black rounded-full' src={reDirect1} alt="" />
                        <img className='' src={game1} alt="" />
                    </div>
                    <p className='text-2xl font-bold'>Basketball</p>
                    <p className='text-md '>our campus is perfect for players of all skill levels, offering a fun and competitive environment.</p>
            </div>
            <div className='flex flex-wrap text-white '>
                <div className='image2 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)] flex flex-col transform transition-all duration-200 active:scale-[110%] active:shadow-none  md:hover:scale-[110%] md:hover:shadow-none' onMouseDown={() => changeImage2(upArrow)} onMouseUp={() => changeImage2(downArrow)} >
                    <img className='rounded-xl w-full h-full' src={game2} alt="" />
                    <img className='absolute w-[6vw] bg-white border-2 border-black rounded-full' src={reDirect2} alt="" />
                    <p   className='game-text absolute rotate-[270deg] bottom-[2rem] left-[1rem]' >TABLE TENNIS</p>
                </div>
                <div className='image2 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)] flex flex-col transform transition-all duration-200 active:scale-[110%] active:shadow-none  md:hover:scale-[110%] md:hover:shadow-none' onMouseDown={() => changeImage2(upArrow)} onMouseUp={() => changeImage2(downArrow)} >
                    <img className='rounded-xl w-full h-full' src={game3} alt="" />
                    <img className='absolute w-[6vw] bg-white border-2 border-black rounded-full' src={reDirect3} alt="" />
                    <p   className='game-text absolute rotate-[270deg] bottom-[2rem] left-[1rem]' >BADMINTON</p>
                </div>
                <div className='image2 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)] flex flex-col transform transition-all duration-200 active:scale-[110%] active:shadow-none  md:hover:scale-[110%] md:hover:shadow-none' onMouseDown={() => changeImage4(upArrow)} onMouseUp={() => changeImage4(downArrow)} >
                    <img className='rounded-xl w-full h-full' src={game4} alt="" />
                    <img className='absolute w-[6vw] bg-white border-2 border-black rounded-full' src={reDirect4} alt="" />
                    <p   className='game-text absolute rotate-[270deg]  bottom-[2rem] left-[1rem]' >TENNIS</p>
                </div>
                <div className='image2 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)] flex flex-col transform transition-all duration-200 active:scale-[110%] active:shadow-none  md:hover:scale-[110%] md:hover:shadow-none' onMouseDown={() => changeImage5(upArrow)} onMouseUp={() => changeImage5(downArrow)} >
                    <img className='rounded-xl w-full h-full' src={game5} alt="" />
                    <img className='absolute w-[6vw] bg-white border-2 border-black rounded-full' src={reDirect5} alt="" />
                    <p   className='game-text absolute rotate-[270deg] bottom-[2rem] left-[1rem]' >CRICKET</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Games