import React, { useState } from 'react'
import icon_menu from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import icon_close from '../assets/images/icon-close.svg'

function Navbar() {

    const [open, setOpen] = useState(false)
    const [cartDrawer, setCartDrawer] = useState(true)

    function cartOpen(){
        setCartDrawer(prevCartDrawer => !prevCartDrawer)
    }

  return (
    <div className='md:px-[10rem]'>
        <div className='nav--menu px-6 py-4 md:px-0 md:py-0 md:h-[8rem] shadow-md md:shadow-none md:border-b-2 flex items-center  justify-between'>
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
                    <div aria-checked={cartDrawer} className='aria-checked:invisible absolute   inset-x-4 md:w-[370px] shadow-xl top-20 md:top-32 md:left-[1000px] rounded-lg z-20 h-[250px] bg-white'>
                        <div className='p-6'>
                            <h3 className='font-bold font-kumbh'>Cart</h3>
                        </div>
                        <hr />
                        <div className='flex justify-center text-Darkgrayishblue font-bold items-center h-[60%]'>
                            Your cart is empty
                        </div>
                    </div>
                </div>
                <img src={avatar} className='w-[30px] cursor-pointer md:w-[40px] hover:ring-2 rounded-full hover:ring-Orange' />
            </div>
        </div>
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
  )
}

export default Navbar