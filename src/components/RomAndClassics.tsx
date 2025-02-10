import React from 'react'

const RomAndClassics = () => {
  return (
    <section id='rom-end-classics' className='relative flex flex-col lg:h-screen md:h-[135vh] sm:h-[70vh] max-sm:h-[70vh] overflow-hidden sm:mb-0 md:mb-0 max-sm:mb-0'>
      <div className='grid lg:grid-cols-12 md:gap-8 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-0 md:pr-0 max-sm:pr-0 sm:pr-0 lg:pl-0 md:pl-0 max-sm:pl-0 sm:pl-0 md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto md:min-h-[74vh] sm:min-h-[53vh] max-sm:min-h-[53vh]'>
        <div className='lg:col-start-1 lg:col-span-12 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[104px] md:pb-[36px] sm:pb-[16px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:h-[550px] md:w-full md:h-[390px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Pic_3.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>

        <div className='lg:col-start-4 lg:col-span-6 bg-white lg:w-[570px] lg:h-[204px] md:w-[570px] md:h-[204px] sm:w-[280px] sm:h-[140px] max-sm:w-[280px] max-sm:h-[140px] md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col justify-center border border-gray-300 shadow-md absolute lg:top-[74%] md:top-[68%] sm:top-[68%] max-sm:top-[56%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <div className='flex flex-row items-center justify-evenly pt-1 md:pb-4 sm:pb-3 max-sm:pb-3'>
            <p className='block md:pr-28 md:text-[14px] md:leading-[14px] sm:text-[16px] sm:leading-[16px] max-sm:text-[16px] max-sm:leading-[16px] text-[#687480] font-medium font-flexsans'>ЛЕКЦІЯ</p>
            <p className='block md:text-[14px] md:leading-[14px] max-sm:text-[16px] max-sm:leading-[16px] text-[#1A5A4C] font-bold font-flexsans'>26/08/2019 - 11:00</p>
          </div>
          <div className='w-full flex justify-center'>
            <p className='md:text-left sm:text-center max-sm:text-center md:w-[69%] md:text-[36px] md:leading-[36px] sm:text-[28px] sm:leading-[28px] max-sm:text-[28px] max-sm:leading-[28px] text-[#0F0E08]'>Від класицизму до романтизму</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default RomAndClassics
