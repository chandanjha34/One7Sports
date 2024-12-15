import React from 'react';
import './Owner.css';

function Owner(){
  return (
    <div className='max-w-screen overflow-hidden w-[100dvw] h-auto flex flex-col gap-[2rem]'>
      <div className='md:translate-y-[4vw] w-[90vw]'>
        <div className=' text-center text-[#5FBC1E]'>
          <p>Why own a franchise</p>
        </div>
        <div className='text-center'>
          <p className='text-lg md:text-5xl'>Be a proud owner of a team in one of the most sought after private pro league</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 boxes '>
        <div className='grid grid-cols-3  box hover:scale-[105%] transition-transform duration-300 gap-[1rem]'>
          <div className='main-text'>Profitable</div>
          <div className='side-text'>Cricket is the most celebrated and profitable sport</div>
        </div>
        <div className='grid grid-cols-3  box hover:scale-[105%]  transition-transform duration-300 gap-[1rem]' style={{backgroundColor:'blue', color:'white'}}>
          <div className='main-text'>Opportunity</div>
          <div className='side-text'>Opportunity to be a part of a BRAND with exponential growth potential</div>
        </div>
        <div className='grid grid-cols-3  box hover:scale-[105%]  transition-transform duration-300 gap-[1rem]'>
          <div className='main-text'>Analytics</div>
          <div className='side-text'>
            <div className='bullet-items'>Opportunity for Corporate networking & relationship building</div>
            <div className='bullet-items'>Right to trade the asset and realize capital growth and returns</div>
            <div className='bullet-items'>Diverse range of revenue stream to develop and exploit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;