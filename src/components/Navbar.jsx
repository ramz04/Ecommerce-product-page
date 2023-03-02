import React, { useState } from 'react'
import icon_menu from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import icon_close from '../assets/images/icon-close.svg'

function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <div className='nav--menu px-6 py-4 flex items-center shadow-md justify-between'>
            <div className='flex gap-4 items-center'>
                <button className='md:hidden' onClick={() => setOpen(!open)}>
                    <img src={icon_menu}  alt='icon-menu'/>
                </button>
                <img src={logo} alt='logo' />
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src={cart} />
                </div>
                <img src={avatar} className='w-[30px]' />
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