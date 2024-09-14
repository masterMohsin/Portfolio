import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
// import {IoCloseSharp} from 'react-icons/ios'
import { RxCrossCircled } from "react-icons/rx";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    const navItems = [
        {
            id : 1,
            item : 'Home'
        },
        {
            id : 2,
            item : 'About'
        },
        {
            id : 3,
            item : 'Portfolio'
        },
        {
            id : 4,
            item : 'Experience'
        },
        {
            id : 5,
            item : 'Contact'
        },
    ]
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md font-serif fixed left-0 right-0 top-0 z-50 bg-white'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-2'>
                <img className='h-12 w-12 rounded-full' src="./imgs/logo.jfif" alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Mohsin <span className='text-green-500 text-2xl'>Ali</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* Desktop Menubar */}
            <div>
                <ul className='hidden md:flex gap-8'>
                    {
                        navItems.map((currItem) => {
                            return (
                                <li className='hover:scale-105 cursor-pointer hover:duration-200' key={currItem.id}>
                                    <Link to={currItem.item} smooth = {true} duration = {500} offset={-70} activeClass="active">{currItem.item}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='md:hidden' onClick={() => setMenu(!menu)}>{menu ? <RxCrossCircled  size={24}/> : < AiOutlineMenu size={24}/>}</div>
            </div>
        </div>

        {/* Mobile Menubar */}
        {menu && (
            <div>
            <ul className='md:hidden flex flex-col h-lvh justify-center items-center gap-y-4 font-semibold text-xl'>
                {
                    navItems.map((currItem) => {
                        return (
                            
                            <li className='hover:scale-105 hover:cursor-pointer hover:duration-200' key={currItem.id}>
                                <Link onClick={() => setMenu(!menu)} to={currItem.item} activeClass = "active" smooth={false} duration={500} offset={-70}>{currItem.item}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        )}
        
      </div>
    </>
  )
}

export default Navbar
