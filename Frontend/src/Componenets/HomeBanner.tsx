import React from 'react'
import { homeBanner } from '../assets'
import LinkButton from './LinkButton'

function HomeBanner() {
  return (
    <div className='relative py-5 overflow-hidden'>
        <div className='relative '>
            <img src={homeBanner} alt="homebanner" className='w-full h-full object-cover rounded-md' />
            <div className='w-full h-full absolute top-0 left-0 bg-dark/10'/>
            <div className='absolute inset-0 flex flex-col justify-center px-10'>
                <h2 className='text-xl md:text-4xl lg:text-6xl text-white font-bold'>Mi Air Purifier</h2>
                <p className='text-base md:text-ls font-semibold leadin-6 text-white max-w-[250px] mt-4'>The new tech gifts you are wishing for right here</p>
                <LinkButton className='w-44 flex items-center justify-center bg-white text-darkText hover:text-whiteText duration-200 mt-4'/>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner