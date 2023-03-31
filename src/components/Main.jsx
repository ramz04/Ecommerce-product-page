import React, {useState} from 'react'
import image_1 from '../assets/images/image-product-1.jpg'
import image_2 from '../assets/images/image-product-2.jpg'
import image_3 from '../assets/images/image-product-3.jpg'
import image_4 from '../assets/images/image-product-4.jpg'
import icon_next from '../assets/images/icon-next.svg'
import icon_previous from '../assets/images/icon-previous.svg'
import icon_minus from '../assets/images/icon-minus.svg'
import icon_plus from '../assets/images/icon-plus.svg'


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
      <div className='image--carousel-mobile md:hidden max-w-[100%] w-full m-auto relative h-[300px]'>
        <div style={{backgroundImage: `url(${data[currentIndex].url})`}} className="w-full h-full bg-center bg-cover bg-no-repeat duration-500">
          <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full px-3 py-1 bg-white cursor-pointer'>
          <button><img src={icon_previous} className='w-[10px] h-[12px]' /></button>
          </div>
          <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full px-3 py-1 bg-white text-white cursor-pointer'>
            <button ><img src={icon_next} className='w-[10px] h-[12px]' /></button>
          </div>
        </div>
      </div>
      <div className='main--section p-6 font-kumbh'>
        <h3 className='font-kumbh uppercase tracking-wide font-bold text-Orange'>sneaker company</h3>
        <h1 className='font-bold mt-2 text-Verydarkblue text-3xl'>Fall Limited Edition Sneakers</h1>
        <p className='mt-3 text-sm leading-5 text-Darkgrayishblue'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className='flex justify-between mt-4 items-center '>
        <div className='flex items-center gap-2'>
          <h2 className='text-3xl font-bold'>$125.00</h2>
          <div className='text-Orange px-2 text-sm font-bold py-1 rounded-lg bg-Paleorange '>50%</div>
        </div>
        <p className='font-bold text-Grayishblue line-through'>$250.00</p>
      </div>
      </div>

      
      
    </div>
  )
}

export default Main