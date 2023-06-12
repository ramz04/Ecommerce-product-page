import React, { useState } from 'react'
import icon_menu from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import icon_close from '../assets/images/icon-close.svg'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import icon_delete from '../assets/images/icon-delete.svg'


function Navbar() {

    const [open, setOpen] = useState(false)
    const [cartDrawer, setCartDrawer] = useState(true)

    function cartOpen(){
        setCartDrawer(prevCartDrawer => !prevCartDrawer)
    }

  return (
    <div className='md:px-[8rem]'>
        <div className='nav--menu px-6 py-4 md:px-0 md:py-0 md:h-[6rem] shadow-md md:shadow-none md:border-b-2 flex items-center  justify-between'>
            <div className='flex gap-4 items-center h-full'>
                <button className='md:hidden' onClick={() => setOpen(!open)}>
                    <img src={icon_menu}  alt='icon-menu'/>
                </button>
                <div className='flex gap-10 items-center h-full'>
                    <a href="/"><img src={logo} alt='logo' /></a>
                    <div className='hidden md:flex font-kumbh text-Darkgrayishblue h-full text-sm'>
                        <ul className='flex gap-8 items-center'>
                            <li className='h-full flex items-center hover:border-b-4 hover:border-Orange hover:text-Verydarkblue transition-transform ease-in-out '><a href="#">Collections</a></li>
                            <li className='h-full flex items-center hover:border-b-4 hover:border-Orange hover:text-Verydarkblue transition-transform ease-in-out '><a href="#">Men</a></li>
                            <li className='h-full flex items-center hover:border-b-4 hover:border-Orange hover:text-Verydarkblue transition-transform ease-in-out '><a href="#">Women</a></li>
                            <li className='h-full flex items-center hover:border-b-4 hover:border-Orange hover:text-Verydarkblue transition-transform ease-in-out '><a href="#">About</a></li>
                            <li className='h-full flex items-center hover:border-b-4 hover:border-Orange hover:text-Verydarkblue transition-transform ease-in-out '><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 md:gap-10 items-center'>
                <div onClick={cartOpen} type='button'>
                    <img src={cart} className='md:w-[25px] cursor-pointer' />
                    {cartDrawer && <div className='absolute w-[21.5rem] right-4 md:right-20 shadow-xl top-20  md:top-28 md:w-[22rem] rounded-lg z-20 h-[250px] bg-white'>
                        <div className='p-6'>
                            <h3 className='font-bold font-kumbh'>Cart</h3>
                        </div>
                        <hr />
                        <div className='flex px-6 py-3 text-Darkgrayishblue  items-center'>
                            <div className='flex items-center gap-4 font-kumbh '>
                                <img src={thumbnail} className='rounded-lg w-14' />
                                <ul className='text-sm'>
                                    <li>Fall Limited Edition Sneakers</li>
                                    <li>$125.00 x 3 <span className='font-bold text-slate-900'>$375.00</span> </li>
                                </ul>
                                <button><img src={icon_delete} alt="" /></button>
                            </div>
                        </div>
                        <div className='px-6'><button className='mt-3 w-full rounded-lg text-white font-bold hover:bg-orange-300 bg-Orange py-3'>Checkout</button></div>
                    </div> }
                </div>
                <img src={avatar} className='w-[30px] cursor-pointer md:w-[40px] hover:ring-2 rounded-full hover:ring-Orange' />
            </div>
        </div>
        <div aria-checked={!open} className=' aria-checked:invisible absolute inset-0 bg-black bg-opacity-75 z-50 transition-transform ease-in-out'>
            <div aria-checked={!open} className='nav--drawer h-screen aria-checked:-translate-x-full transition-transform ease-in-out fixed bg-orange w-[70%] z-40 left-0 top-0'>
                <div className='w-full h-full  bg-white shadow-xl duration-300 backdrop:brightness-50 '>
                    <button className='py-4 px-6' onClick={() => setOpen(!open)}>
                        <img src={icon_close} />
                    </button>
                    <div className='flex pl-6 font-kumbh mt-10 md:h-full md:text-sm'>
                            <ul className='flex flex-col gap-6 tracking-wide w-full items-start font-bold'>
                                <li className='text-Verydarkblue w-full hover:border-r-4 hover:border-Orange'><a href="#">Collections</a></li>
                                <li className='text-Verydarkblue w-full hover:border-r-4 hover:border-Orange'><a href="#">Men</a></li>
                                <li className='text-Verydarkblue w-full hover:border-r-4 hover:border-Orange'><a href="#">Women</a></li>
                                <li className='text-Verydarkblue w-full hover:border-r-4 hover:border-Orange'><a href="#">About</a></li>
                                <li className='text-Verydarkblue w-full hover:border-r-4 hover:border-Orange'><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar