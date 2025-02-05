"use client";

import React, { useState } from 'react'
import Menu from './Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section id='page-top' className='relative flex flex-col h-screen overflow-hidden max-sm:mb-[60px]'>

      {menuOpen && (
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />)}

      <div className='grid lg:grid-cols-12 md:gap-8 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-0 md:pr-0 max-sm:pr-0 sm:pr-0 lg:pl-[55px] md:pl-[39px] max-sm:pl-0 sm:pl-0 md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto md:min-h-[85vh] max-sm:min-h-[53vh]'>
        <div className='lg:col-start-1 lg:col-span-5 md:col-start-1 md:col-span-3 flex flex-col items-center lg:justify-center md:justify-start md:relative absolute h-[85vh] z-10'>
          <a
            onClick={() => setMenuOpen(true)}
            className='group flex md:static sm:absolute max-sm:absolute flex-col w-[24px] h-[24px] lg:ml-0 md:mr-auto md:mt-[39px] md:mb-0 max-sm:mr-auto max-sm:ml-[60px] max-sm:mt-[27px] max-sm:mb-0 group cursor-pointer'>
            <img
              src="/menu.svg"
              alt="Image"
              className='flex object-contain w-[24px] h-[24px] transition-all duration-300 group-hover:opacity-0'
            />
            <img
              src="/menu_focus.svg"
              alt="Facebook Hover"
              className="flex object-contain w-[24px] h-[24px] transition-all duration-300 absolute opacity-0 group-hover:scale-125 group-hover:opacity-100"
            />
          </a>
          <p className='lg:text-[72px] max-sm:hidden sm:hidden md:text-[54px] max-sm:text-[45px] max-sm:text-center max-sm:left-[8vw] md:block max-sm:top-[68%] font-bold lg:leading-[86.4px] md:leading-[64.8px] max-sm:leading-[45px] text-black uppercase lg:pt-[7.3rem] lg:pb-[70px] md:pt-[4rem] md:pb-[38px] max-sm:absolute '>
            Художній музей
          </p>

          <a
            href="#events"
            className="lg:mr-0 lg:ml-auto md:mr-auto md:ml-0 w-[269px] h-[70px] md:flex max-sm:hidden sm:hidden border-[#1A5A4C] border-[1px] items-center justify-between overflow-hidden relative group"
          >

            <div className="pl-[25%] flex items-center justify-center text-base font-medium font-flexsans leading-none text-[#0F0E08] uppercase transition-opacity duration-300 group-hover:opacity-0">
              квитки
            </div>

            <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#1A5A4C] flex items-center justify-center group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out">
              <img
                src="/arrow.svg"
                alt="arrow"
                className="w-[24px] h-[24px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
              />
            </div>
          </a>

          <div className='lg:block hidden mb-0 ml-0 mr-auto'>
            <img
              src="/podii.svg"
              alt="Image"
              className='flex w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='lg:col-start-6 lg:col-span-7 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 md:flex flex-col items-center justify-start relative max-sm:h-[53vh] overflow-hidden group'>
          <img
            src="/Photo_big.svg"
            alt="Image"
            className='block w-full md:h-[85vh] sm:h-[53vh] max-sm:h-[53vh] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
          />
          <div className='absolute md:top-[15px] max-sm:top-[9px] md:left-0 max-sm:left-[44vw] flex flex-row items-center md:w-[170px] md:h-[72px] max-sm:w-[55px] max-sm:h-[61px]'>
            <img
              src="/namu.svg"
              alt="Image"
              className='flex object-contain w-full h-full'
            />
          </div>
        </div>

        <div className='hidden max-sm:flex flex-col max-sm:col-start-1 max-sm:col-span-2 w-full max-sm:mt-10 max-sm:mb-10'>
          <p className='max-sm:text-[45px] text-center font-bold leading-[45px] text-black uppercase mx-auto'>
            Художній музей
          </p>
          <a
            href="#events"
            className=" mt-10 mx-auto w-[269px] h-[70px] md:hidden max-sm:flex border-[#1A5A4C] border-[1px] items-center justify-between overflow-hidden relative group"
          >

            <div className="pl-[25%] flex items-center justify-center text-base font-medium font-flexsans leading-none text-[#0F0E08] uppercase transition-opacity duration-300 group-hover:opacity-0">
              квитки
            </div>

            <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#1A5A4C] flex items-center justify-center group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out">
              <img
                src="/arrow.svg"
                alt="arrow"
                className="w-[24px] h-[24px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
              />
            </div>
          </a>
        </div>
      </div>

    </section >
  )
}

export default Header
