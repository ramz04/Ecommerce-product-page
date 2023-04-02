import React from 'react'
import image_1 from '../assets/images/image-product-1.jpg'
import image_1_thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import image_2 from '../assets/images/image-product-2.jpg'
import image_2_thumbnail from '../assets/images/image-product-2-thumbnail.jpg'
import image_3 from '../assets/images/image-product-3.jpg'
import image_3_thumbnail from '../assets/images/image-product-3-thumbnail.jpg'
import image_4 from '../assets/images/image-product-4.jpg'
import image_4_thumbnail from '../assets/images/image-product-4-thumbnail.jpg'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import close from '../assets/images/icon-close.svg'
import { useState } from 'react'
import Main from './Main'



function Lightbox(props) {

  return (
    <div aria-checked={props.lbox} className='bg-black bg-opacity-50 aria-checked:hidden h-screen md:flex justify-center items-center inset-0 z-50 fixed'>
        <div className='flex flex-col items-center gap-8'>
            <button onClick={props.closelbox} className='self-end cursor-pointer'><img src={close} className='w-10 h-10 ' alt="" /></button>
            <div className='image--carousel-mobile hidden md:flex items-center justify-center max-w-[100%] w-[600px] m-auto relative h-[600px] '>
                <div style={{backgroundImage: `url(${props.image})`}} className="w-full h-full bg-center bg-cover bg-no-repeat rounded-xl duration-500">
                <div onClick={props.previousslide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 rounded-full px-3 py-2 bg-white cursor-pointer'>
                <button><FaChevronLeft /></button>
                </div>
                <div onClick={props.nextslide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 rounded-full px-3 py-2 bg-white cursor-pointer'>
                    <button ><FaChevronRight /></button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lightbox