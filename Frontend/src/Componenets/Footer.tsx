import React from 'react'
import { payment } from '../assets'
import FooterTop from './FooterTop'

function Footer() {
  return (
    <div className='mt-10'>
        <FooterTop/>
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between m-6">
            <p>@2024 E-commers Solutions. All rights reserved</p>
            <img src={payment} alt="paymentImage" className='object-cover' />
        </div>

    </div>
  )
}

export default Footer