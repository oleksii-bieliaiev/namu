import React from 'react'
import { CustomCarousel } from './Carousel'

const Gallery = () => {
  return (
    <section id='gallery' className='relative flex flex-col lg:h-[175vh] md:h-[175vh] overflow-hidden mb:pb-[50px] max-sm:pb-[50px]'>
      <div className='grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-1 md:gap-2 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-[55px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] lg:mb-[104px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto'>
        <p className='lg:text-[48px] w-full md:whitespace-nowrap max-sm:md:text-[48px] sm:text-[36px] sm:leading-[36px] max-sm:text-[36px] max-sm:leading-[36px] md:flex max-sm:col-start-1 max-sm:col-span-2 max-sm:text-center font-bold lg:leading-[48px] md:leading-[48px] text-black lg:pt-[3rem] lg:pb-[56px] md:pt-[2rem] md:pb-[38px] sm:pb-[40px] max-sm:pb-[40px]'>Галерея</p>
        <div className='lg:col-start-1 lg:col-span-4 lg:flex md:hidden sm:hidden max-sm:hidden flex flex-col lg:items-start lg:justify-center md:justify-center md:relative 2xl:pb-[60px] lg:pb-[30px] md:pb-[30px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:max-w-[390px] lg:h-[600px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Gal_1.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className='lg:col-start-5 lg:col-span-8 lg:flex md:hidden sm:hidden max-sm:hidden flex flex-col lg:items-start lg:justify-center md:justify-center md:relative 2xl:pb-[60px] lg:pb-[30px] md:pb-[30px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:max-w-[970px] lg:h-[600px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Gal_2.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className='lg:col-start-1 lg:col-span-8 lg:flex md:hidden sm:hidden max-sm:hidden flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[30px] md:pb-[30px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:max-w-[870px] lg:h-[360px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Gal_3.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className='lg:col-start-9 lg:col-span-4 lg:flex md:hidden sm:hidden max-sm:hidden flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[30px] md:pb-[30px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:max-w-[470px] lg:h-[360px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Gal_4.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className="lg:hidden md:flex md:h-full md:col-start-1 md:col-span-6 max-sm:col-start-1 max-sm:col-span-2 max-sm::h-full pb-8">
          <CustomCarousel />
        </div>
      </div>
    </section>
  )
}

export default Gallery
