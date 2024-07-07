import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

function ProductList() {
  return (
    <div>
        <div className='mb-10'>
            <div className='flex items-center justify-between'>
                <Title text = "Top Selling Products"/>
                <Link to = {"/product"}>
                View All Products</Link>
            </div>
            <div className='w-full h=[1px] bg-gray-200 mt-2'/>
            <Pagination/>
        </div>
        
    </div>
  )
}

export default ProductList