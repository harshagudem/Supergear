import React, { useState } from 'react'
import { logo } from '../assets'
import {IoClose,  IoSearchOutline} from "react-icons/io5"
import { FiUser, FiStar, FiShoppingCart, FiChevronDown } from "react-icons/fi"
import { Link } from 'react-router-dom'

const bottomNavigation = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/product" },
    { title: "Cart", link: "/cart" },
    { title: "Orders", link: "/orders" },
    { title: "My Account", link: "/profile" },
    { title: "Blog", link: "/blog" },
  ];

function Header() {
    const [searchText, setsearchText] = useState('')
  return (
    <div className = "w-full bg-white">
        <div className = "max-w-screen-xl mx-auto h-8 flex item-center justify-between px-4 lg:px-0 mt-5">
            <Link to ={"/"}><img src={logo} alt="logo" className = "w-44" /></Link>
            <div className =" hidden md:inline-flex max-w-3xl w-full relative">
                <input type="text"  onChange = {(e)=> setsearchText(e.target.value)} value = {searchText} placeholder='Search for Products' className ="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1  focus:ring-darkText sm:text-sm px-4 py-2"/>
                {searchText ? (<IoClose className ="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200" onClick ={()=> setsearchText("")}/>):(<IoSearchOutline className='absolute top-2.5 right-3 text-xl'/>)}
            </div>
            <div className='flex item-center gap-x-6 text-2xl'>
                <Link to ={"/profile"}><FiUser className = "hover:text-skyText duration-200 cursor-pointer"/></Link>
                <Link to ={"/favourite"} className='relative'>
                    <FiStar className="hover:text-skyText duration-200 cursor-pointer"/>
                    <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">0</span>
                </Link>
                <Link to ={"/cart"} className='relative'>
                    <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer"/>
                    <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">0</span>
                </Link>

            </div>
        </div>
        <div className="w-full bg-darkText text-white mt-5 h-12">
            <div className='py-2 max-w-4xl flex items-center gap-10 justify-between mx-auto'>
                <p className='flex items-center gap-2'>Select Catogery <FiChevronDown/></p>
                {bottomNavigation.map(({title,link})=> (<Link to ={link} key = {title} className='uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:textWhite dutaion-200 relative overflow-hidden group '>{title}
                <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300"/></Link>))}
            </div>
        </div>
    </div>
    
  )
}

export default Header