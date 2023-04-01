import React, {useState} from 'react'
import image_1 from '../assets/images/image-product-1.jpg'
import image_2 from '../assets/images/image-product-2.jpg'
import image_3 from '../assets/images/image-product-3.jpg'
import image_4 from '../assets/images/image-product-4.jpg'
import icon_next from '../assets/images/icon-next.svg'
import icon_previous from '../assets/images/icon-previous.svg'
import icon_minus from '../assets/images/icon-minus.svg'
import icon_plus from '../assets/images/icon-plus.svg'
import cart from '../assets/images/icon-cart.svg'


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
const [count, setCount] = useState(0)

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

function add(){
  setCount(prevCount => prevCount + 1)
}
function subtract(){
  setCount(prevCount => prevCount < 1 ? 0 : prevCount - 1)
}

  return (
    <div className='home--page md:px-[10rem] md:grid md:grid-cols-2 md:mt-20'>
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
      <div className='h-full hidden md:flex flex-col'>
        <img src={image_1} className='h-[445px] w-[450px] rounded-lg '/>
      </div>
      <div className='main--section p-6 font-kumbh'>
        <h3 className='font-kumbh uppercase tracking-wide font-bold text-Orange'>sneaker company</h3>
        <h1 className='font-bold mt-2 text-Verydarkblue md:text-5xl md:mt-4 text-3xl'>Fall Limited Edition Sneakers</h1>
        <p className='mt-3 text-sm md:mt-5 md:text-base leading-5 text-Darkgrayishblue'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className='flex md:flex-col md:gap-2 md:items-start justify-between mt-4 items-center '>
        <div className='flex items-center gap-2 md:gap-4'>
          <h2 className='text-3xl font-bold'>$125.00</h2>
          <div className='text-Orange px-2 text-sm font-bold py-1 rounded-lg bg-Paleorange '>50%</div>
        </div>
        <p className='font-bold text-Grayishblue line-through'>$250.00</p>
      </div>
      <div className='md:flex md:gap-4'>
        <div className='mt-3 w-full md:basis-2/5 bg-Lightgrayishblue flex justify-between items-center rounded-lg p-4'>
          <button type='button' onClick={subtract}><img src={icon_minus} alt="" /></button>
          <p className='font-bold'>{count}</p>
          <button type='button' onClick={add}><img src={icon_plus} alt="" /></button>
        </div>
        <div type='button' className='w-full md:basis-3/5 flex items-center justify-center mt-4 py-3 rounded-lg bg-Orange gap-4 hover:bg-Paleorange transition-shadow ease-in-out'>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>
          <p className='text-white font-bold'>Add to Cart</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main