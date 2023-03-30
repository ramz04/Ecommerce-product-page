import React, { useState } from 'react'
import icon_menu from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import icon_close from '../assets/images/icon-close.svg'

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div className='md:px-[8rem]'>
        <div className='nav--menu px-6 py-4 md:py-0 md:h-[8rem] md:border-b-2 flex items-center  justify-between'>
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
                <div>
                    <img src={cart} classname='md:w-[40px]' />
                </div>
                <img src={avatar} className='w-[30px] md:w-[40px] hover:ring-2 rounded-full hover:ring-Orange' />
            </div>
        </div>
        <div aria-checked={!open} className='nav--drawer h-screen aria-checked:-translate-x-full transition-transform ease-in-out fixed bg-orange w-[70%] z-40 left-0 top-0'>
            <div className='w-full h-full py-4 px-6 bg-gray-300 duration-300 backdrop:brightness-50 '>
                <button onClick={() => setOpen(!open)}>
                    <img src={icon_close} />
                </button>
            </div>

        </div>
    </div>
  )
}

export default Navbar