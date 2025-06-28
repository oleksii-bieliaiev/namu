import React from 'react'

const Footer = () => {
  return (
    <section id='page-top' className='relative flex flex-col lg:h-[62vh] md:h-[146vh] sm:h-[164vh] max-sm:h-[124vh]'>
      <div className='grid lg:grid-cols-12 lg:gap-x-7 lg:gap-y-20 md:gap-x-8 sm:gap-x-6 max-sm:gap-x-6 sm:gap-y-4 max-sm:gap-y-4  md:gap-y-[70px] md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-[55px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px]  md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-auto lg:pb-[35px] max-sm:pb-[35px] pt-[47px] md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto'>
        <div className='lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-1 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 mt-0 mb-auto flex md:flex-col max-sm:flex-row lg:items-center md:justify-center sm:justify-between sm:items-center max-sm:justify-between max-sm:items-center'>
          <img
            src="/NAMU_footer.svg"
            alt="Image"
            className='flex object-contain w-[63px] md:pt-1 pl-1 h-[72px] '
          />
          <div className=' flex w-full max-w-[72px] flex-row md:pt-[62px] justify-between'>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-[24px] h-[24px] object-contain transition-all duration-300 hover:opacity-0"
              />
              <img
                src="/facebook_hover.svg"
                alt="Facebook Hover"
                className="w-[24px] h-[24px] object-contain transition-all duration-300 absolute opacity-0 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-[24px] h-[24px] object-contain transition-all duration-300 hover:opacity-0"
              />
              <img
                src="/instagram_hover.svg"
                alt="Instagram Hover"
                className="w-[24px] h-[24px] object-contain transition-all duration-300 absolute opacity-0 hover:opacity-100"
              />
            </a>
          </div>
        </div>

        <div className='lg:col-start-3 lg:col-span-2 md:col-start-2 md:col-span-2 sm:col-start-1 sm:col-span-1 max-sm:col-start-1 max-sm:col-span-1 flex flex-col items-center mt-0 md:mt-0 sm:mt-[40px] max-sm:mt-[40px] mb-auto lg:justify-center sm:items-start max-sm:items-start '>
          <p className='flex md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>Графік роботи</p>

          <div className='flex md:flex-row max-sm:flex-col w-full justify-start pt-[20px]'>
            <p className='block pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>12:00-20:00</p>
            <p className='block lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>середа</p>
          </div>

          <div className='flex w-full md:flex-row max-sm:flex-col justify-start'>
            <p className='block pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>12:00-20:00</p>
            <p className='block lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>четвер</p>
          </div>

          <div className='flex md:flex-row max-sm:flex-col w-full justify-start'>
            <p className='block pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>12:00-20:00</p>
            <p className='block lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>п'ятниця</p>
          </div>

          <div className='flex md:flex-row max-sm:flex-col w-full justify-start'>
            <p className='block pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>11:00-19:00</p>
            <p className='block lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>субота</p>
          </div>

          <div className='flex md:flex-row max-sm:flex-col w-full justify-start pb-[20px]'>
            <p className='block pr-1 lg:text-[14px] md:leading-[20px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>11:00-19:00</p>
            <p className='block lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>неділя</p>
          </div>

          <div className='flex md:flex-row max-sm:flex-col w-full justify-start '>
            <p className='pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>Вихідні:</p>
            <p className='lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>
              понеділок,</p>
          </div>
          <div className='w-full text-left'>
            <p className='lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>вівторок</p>
          </div>
          <div className='w-full text-left'>
            <p className='lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>Каса припиняє роботу за 1 годину до закриття музею</p>
          </div>
        </div>

        <div className='lg:col-start-5 lg:col-span-2 md:col-start-4 md:col-span-2 flex flex-col items-center mt-0 mb-auto md:pt-0 sm:pt-[40px] max-sm:pt-[40px] max-sm:items-start lg:justify-center '>
          <p className=' md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>Контакти:</p>
          <div className='flex flex-row w-full justify-start pt-[20px]'>
            <p className='block pr-1 lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans'>вул. М. Грушевського, 6; Київ, 01001
              тел. +38 (044) 278-13-57
              факс +38 (044) 278-74-54
              e-mail: info@namu.kiev.ua</p>
          </div>
        </div>

        <div className='hidden lg:col-start-7 lg:col-span-1 lg:flex flex-col items-center mt-0 mb-auto lg:justify-center'>
          <img
            src="/line.svg"
            alt="Image"
            className='flex object-contain lg:w-[1px] lg:h-[260px] md:h-[1px] w-[1px] h-[100px]'
          />
        </div>

        <div className='lg:hidden md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 md:mt-0 md:mb-0 sm:mt-14 sm:mb-10 max-sm:mt-14 max-sm:mb-10 md:flex max-sm:flex flex-col items-center mt-0 mb-auto justify-center'>
          <img
            src="/line_2.svg"
            alt="Image"
            className='flex object-contain md:w-[460px] md:h-[1px] max-sm:w-[280px] max-sm:h-[2px]'
          />
        </div>

        <div className='lg:col-start-8 lg:col-span-2 md:col-start-2 md:col-span-2 flex flex-col items-center mt-0 md:pb-0 sm:pb-16 max-sm:pb-16 mb-auto lg:justify-center '>
          <div className='flex flex-row w-full justify-start pb-[20px]'>
            <a
              href="#gallery"
              className='md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans 
    hover:text-[#F14A27] hover:font-normal transition-all duration-500'

            >
              Галерея
            </a>
          </div>
          <div className='flex flex-row w-full justify-start pb-[20px]'>
            <a
              href="#current-events"
              className='md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans 
    hover:text-[#F14A27] hover:font-normal transition-all duration-500'
            >
              Виставки та події
            </a>
          </div>
        </div>

        <div className='lg:col-start-10 lg:col-span-2 md:col-start-4 md:col-span-2 flex flex-col items-center mt-0 md:pb-0 sm:pb-16 max-sm:pb-16 mb-auto lg:justify-center '>
          <div className='flex flex-row w-full justify-start pb-[20px]'>
            <a
              href="#page-top"
              className='md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans 
    hover:text-[#F14A27] hover:font-normal transition-all duration-500'
            >
              Про Нас
            </a>
          </div>
          <div className='flex flex-row w-full justify-start pb-[20px]'>
            <a
              href="#subscription"
              className='md:w-[100%] lg:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#0F0E08] font-flexsans 
    hover:text-[#F14A27] hover:font-normal transition-all duration-500'
            >
              Контакти
            </a>
          </div>
        </div>

        <div className='h-[17px] lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex md:flex-row sm:justify-center max-sm:justify-center md:justify-start lg:mt-[80px] md:mt-[20px] sm:mt-0 max-sm:mt-0 mb-0'>
          <p className='font-light lg:text-[12px] md:text-[12px] md:leading-[16px] sm:text-[12px] max-sm:text-[12px] max-sm:leading-[16px] font-flexsans'>Copyright © 2019. All Rights Reserved.</p>
        </div>
        <div className='h-[17px] lg:col-start-10 lg:col-span-3 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex md:flex-row sm:justify-center max-sm:justify-center md:justify-end lg:mt-[80px] md:mt-[20px] max-sm:mt-0'>
          <p className='font-light lg:text-[12px] md:text-[12px] md:leading-[16px] sm:text-[12px] max-sm:text-[12px] max-sm:leading-[16px] font-flexsans'>Designed by Zhyriada Marina</p>
        </div>


      </div>
    </section>
  )
}

export default Footer
