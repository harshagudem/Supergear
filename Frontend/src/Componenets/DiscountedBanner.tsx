import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom';
import { discountImgOne, discountImgTwo } from '../assets';

function DiscountedBanner() {
    const popularSearchItems = [
        { title: "Smart Watches", link: "smartWatches" },
        { title: "Headphone", link: "headphones" },
        { title: "Cameras", link: "camerasAndPhotos" },
        { title: "Audio", link: "tvAndAudio" },
        { title: "Laptop & Computers", link: "computersAndLaptop" },
        { title: "Cell Phone", link: "cellPhones" },
      ];
  return (
    <div>
        <div>
            <Title text = "Popular Search"/>
            <div className='w-full h-[1px] bg-gray-200 mt-3'></div>
            <div className='my-7 flex-center flex-wrap gap-4'>
                {popularSearchItems.map(({title,link})=>(
                    <Link key = {title} to = {"/category/${link}"} className='border border-[px] border-gray-300 px-8 m-3 py-3 rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200'>{title}</Link>
                ))}
            </div>
            <div className='w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden '>
                <img src={discountImgOne} alt="diacountedImageONe"  className='hidden lg:inline-flex h-36'/>
                <div className="flex flex-col flex-1 gap-1 items-center">
                    <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
                        <h2>Sony Headphone</h2>
                        <Link to = {"/product"} className='border border-red-600 px-4 py-2 text-xl md:text-3xl text-red-600 rounded-full'>Discount 20%</Link>
                    </div>
                </div>
                <img src={discountImgTwo} alt="" className='hidden lg:inlene-flex h-36' />
            </div>
        </div>
    </div>
  )
}

export default DiscountedBanner