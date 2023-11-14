import React, { useState, useEffect } from 'react'

import { RiBox3Line, RiArrowDropRightLine, RiArrowRightLine, RiCloseLine } from "react-icons/ri"
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {

  const [hover, setHover] = useState(false)
  const [showIcon, setShowIcon] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)



  const toggleIcon = () => {
    setShowIcon(!showIcon);
  }



  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <nav className={`hack-nav flex transition-all
        justify-between bg-gray-900 text-white px-2 lg:px-20 pt-2 sticky ${visible ? 'top-0' : ''}`}>

        <div className={`hack-nav-logo flex lg:items-center cursor-pointer ${showIcon ? 'hidden' : ''}`}>
          <RiBox3Line color='#f7f70a' size={30} />
          <div className='ml-2 text-lg space-x-0.5'>
            <span className='font-bold'>HACK</span>
            <span className='font-normal'>THE</span>
            <span className='font-bold'>BOX</span>
          </div>
        </div>
        <div className='hack-nav-menu text-gray-400 text-md font-medium w-full lg:w-auto transition-all'>
          <ul className={`py-3 w-full pl-5 pr-20 lg:px-0 lg:w-auto absolute lg:relative top-20 lg:top-0 lg:grid lg:grid-cols-5 lg:gap-2 lg:h-full lg:content-center space-y-3 lg:space-y-0 bg-gray-900 text-center ${showIcon ? "block" : "hidden"}`}>
            <li className='border-b border-gray-500 py-2 lg:border-0 hover:text-white transition-all cursor-pointer'>Business</li>
            <li className='border-b border-gray-500 py-2 lg:border-0 hover:text-white transition-all cursor-pointer'>Hackers</li>
            <li className='border-b border-gray-500 py-2 lg:border-0 hover:text-white transition-all cursor-pointer'>Industries</li>
            <li className='border-b border-gray-500 py-2 lg:border-0 hover:text-white transition-all cursor-pointer lg:pl-2'>Resources</li>
            <li className='border-b border-gray-500 py-2 lg:border-0 hover:text-white transition-all cursor-pointer lg:pl-2'>Company</li>
          </ul>
        </div>
        <div className='hack-nav-btns hidden lg:flex space-x-2'>
          <button className='bg-transparent text-gray-400 text-md font-medium transition-all hover:text-white'>Sign In</button>
          <button className='bg-btns px-4 text-black text-md font-medium rounded'>Get Started</button>
        </div>

        <div className='menu-icons lg:hidden' onClick={toggleIcon}>
          {
            showIcon
              ? <RiCloseLine size={35} color={"#fff"} cursor={"pointer"} />
              : <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} />
          }
        </div>
      </nav>
      <header className='hack-head text-gray-400 flex justify-center text-center items-center cursor-pointer mt-40'>
        <div className='w-8/12 lg:w-5/12 flex bg-gray-800 rounded-lg px-2 py-1 justify-center items-center transition-all hover:text-btns' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <span className='font-medium text-btns text-xs bg-gray-700 rounded-lg px-2 py-1 mr-2'>NEW</span>
          <p className='text-sm font-medium'>Join the biggest cybersecurity event for Universities! More than $65,000 in prizes</p>
          <span className='items-center'>
            {
              !hover
                ? <RiArrowDropRightLine size={25} />
                : <RiArrowRightLine size={25} />
            }
          </span>
        </div>
      </header>
    </>
  )
}

export default Header