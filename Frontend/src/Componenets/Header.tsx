import React, { useState } from 'react'
import { logo } from '../assets'
import {IoClose,  IoSearchOutline} from "react-icons/io5"
import { FiUser, FiStar, FiShoppingCart } from "react-icons/fi"
import Container from './Container'


function Header() {
    const [searchText, setsearchText] = useState('')
  return (
    <div className = "w-full bg-white">
        <div className = "max-w-screen-xl mx-auto h-8 flex item-center justify-between px-4 lg:px-0 mt-5">
            <img src={logo} alt="logo" className = "w-44" />
            <div className =" hidden md:inline-flex max-w-3xl w-full relative">
                <input type="text"  onChange = {(e)=> setsearchText(e.target.value)} value = {searchText} placeholder='Search for Products' className ="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1  focus:ring-darkText sm:text-sm px-4 py-2"/>
                {searchText ? (<IoClose className ="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200" onClick ={()=> setsearchText("")}/>):(<IoSearchOutline className='absolute top-2.5 right-3 text-xl'/>)}
            </div>
            <div className='flex item-center gap-x-6 text-2xl'>
                <FiUser className = "hover:text-skyText duration-200 cursor-pointer"/>
                <div className='relative'>
                    <FiStar className="hover:text-skyText duration-200 cursor-pointer"/>
                    <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">0</span>
                </div>
                <div className='relative'>
                    <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer"/>
                    <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">0</span>
                </div>

            </div>
        </div>
        <div className="w-full bg-darkText text-whiteText mt-5 h-12">
            <Container className=''>
                <p>Select Catogery</p>
            </Container>
        </div>
    </div>
    
  )
}

export default Header