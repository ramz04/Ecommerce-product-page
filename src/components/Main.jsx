import React, {useState} from 'react'
import image_1 from '../assets/images/image-product-1.jpg'
import image_2 from '../assets/images/image-product-2.jpg'
import image_3 from '../assets/images/image-product-3.jpg'
import image_4 from '../assets/images/image-product-4.jpg'
import icon_next from '../assets/images/icon-next.svg'
import icon_minus from '../assets/images/icon-previous.svg'


function Main() {

  const data = [
    {
        url:`${image_1}`
    },
    {
        url:`${image_2}`
    },
    {
        url:`${image_3}`
    },
    {
        url:`${image_4}`
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
    <div className='home--page'>
      <div className='max-w-[100%] w-full m-auto relative h-[300px]'>
        <div style={{backgroundImage: `url(${data[currentIndex].url})`}} className="w-full h-full bg-center bg-cover bg-no-repeat duration-500">
        <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full px-3 py-1 bg-white text-white cursor-pointer'>
        <button><img src={icon_minus} className='w-[10px] h-[12px]' /></button>
      </div>
      <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full px-3 py-1 bg-white text-white cursor-pointer'>
        <button ><img src={icon_next} className='w-[10px] h-[12px]' /></button>
      </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Main