import * as React from 'react'
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



function Lightbox() {

    const data = [
        {
            url:`${image_1}`,
            thumbnail:`${image_1_thumbnail}`,
        },
        {
            url:`${image_2}`,
            thumbnail:`${image_2_thumbnail}`,
        },
        {
            url:`${image_3}`,
            thumbnail:`${image_3_thumbnail}`,
        },
        {
            url:`${image_4}`,
            thumbnail:`${image_4_thumbnail}`,
        },
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
      }
      
      const nextSlide = () => {
        const isLastSlide = currentIndex === data.length - 1
        const newIndex = isLastSlide ? 0 :currentIndex + 1
        setCurrentIndex(newIndex)
      }

  return (
    <div className='bg-black bg-opacity-50 hidden h-screen md:flex justify-center items-center inset-0 z-50 fixed'>
        <div className='flex flex-col items-center gap-8'>
            <img src={close} className='w-10 h-10 self-end' alt="" />
            <div className='image--carousel-mobile hidden md:flex items-center justify-center max-w-[100%] w-[600px] m-auto relative h-[600px] '>
                <div style={{backgroundImage: `url(${data[currentIndex].url})`}} className="w-full h-full bg-center bg-cover bg-no-repeat rounded-xl duration-500">
                <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 rounded-full px-3 py-2 bg-white cursor-pointer'>
                <button><FaChevronLeft /></button>
                </div>
                <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 rounded-full px-3 py-2 bg-white cursor-pointer'>
                    <button ><FaChevronRight /></button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lightbox