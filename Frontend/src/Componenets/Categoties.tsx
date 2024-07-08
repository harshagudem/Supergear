import React, { useEffect, useState } from 'react'
import { config } from "../../config";
import { getData } from "../lib/index";
import Title from './Title';
import { Link } from 'react-router-dom';
import { CategoryProps } from '../../type';

function Categoties() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
      const endpoint = `${config?.baseUrl}categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.log("Error on fetching data", error);
      }
    };
    fetchData();
  },[]);
  return (
    <div>
        <div className='mb-10'>
            <div className='flex item-center justify-between '>
                <Title text = "Popular categories"/>
                <Link to = {"/category/tvAndAudio"} className='font-medium relative group overflow-hidden'>
                View All Categories <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
                </Link>
            </div>
            <div className='w-full h-[1px] bg-gray-200 mt-3'/>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-col-6 gap-7'>
        {categories.map((item:CategoryProps)=>(
            <Link to = {`/category/${item?._base}`} key = {item?._id} className='w-full h-auto relative grow overflow-hidden '>
                <img src={item?.image} alt="categoryImage" className = "w-full h-auto rounded-md group-hover:scale-110 duartion-300 "/>
                <div className='absolute bottom-3 w-full text-center'>
                    <p className='text-sm md:text-base font-bold'>{item?.name}</p>
                </div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Categoties