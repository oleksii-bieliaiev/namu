import React from 'react'

const CurrentEvents = () => {
  return (
    <section id='current-events' className='relative flex flex-col lg:h-[200vh] overflow-hidden mb:pb-[50px]'>
      <div className='grid lg:grid-cols-12 lg:gap-8 md:gap-2 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-[55px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] lg:mb-[104px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto'>
        <p className='lg:text-[48px] w-full md:whitespace-nowrap max-sm:md:text-[48px] sm:text-[36px] sm:leading-[36px] max-sm:text-[36px] max-sm:leading-[36px] md:flex max-sm:col-start-1 max-sm:col-span-2 max-sm:text-center font-bold lg:leading-[48px] md:leading-[48px] text-black lg:pt-[3rem] lg:pb-[56px] md:pt-[4rem] sm:pt-[4rem] md:pb-[38px] sm:pb-[40px] max-sm:pb-[40px]'>Актуальні події</p>

        <div className='lg:col-start-1 lg:col-span-7 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2  max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[104px] md:pb-[36px] sm:pb-[16px] max-sm:pb-[16px]'>
          <div className='lg:w-[700px] lg:h-[520px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Pic2.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className='lg:col-start-9 lg:col-span-4 md:col-start-1 md:col-span-4 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:justify-center lg:pb-[104px] md:pb-[64px] sm:pb-[60px] max-sm:pb-[60px]'>
          <div className='flex flex-row items-center justify-start pt-1 md:pb-7 sm:pb-3 max-sm:pb-3'>
            <p className='block pr-8 md:text-[14px] md:leading-[14px] sm:text-[16px] max-sm:text-[16px] sm:leading-[16px] max-sm:leading-[16px] text-[#687480] font-medium font-flexsans'>ВИСТАВКА</p>
            <p className='block md:text-[14px] md:leading-[14px] max-sm:text-[16px] max-sm:leading-[16px] text-[#1A5A4C] font-bold font-flexsans'>26.08-29.11.2019</p>
          </div>
          <div className='flex flex-row items-center mb:justify-start max-sm:whitespace-nowrap pb-4 w-full'>
            <p className='block md:pr-4 max-sm:pr-2 md:text-[36px] md:leading-[36px] max-sm:text-[28px] max-sm:leading-[28px] text-[#0F0E08]'>Йду і повертаюсь</p>
            <div className='md:h-[15px] md:w-[15px] max-sm:h-[10px] max-sm:w-[10px] bg-[#F14A27] md:translate-y-1 max-sm:translate-y-0.5'></div>
          </div>
          <p className='block font-flexsans md:text-[16px] md:leading-[24px] max-sm:text-[16px] max-sm:leading-[24px] text-[#4E4E4E]'>Національний Художній Музей України презентує унікальну частину колекції Градобанку - українське мистецтво другої половини 1980-1995 років.</p>

        </div>

        <div className='lg:col-start-1 lg:col-span-7 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[104px] md:pb-[36px] sm:pb-[16px] max-sm:pb-[16px]'>
          <div className='lg:w-[700px] lg:h-[520px] md:w-full md:h-[520px] max-sm:w-full max-sm:h-[210px] overflow-hidden group'>
            <img
              src="/Pic1.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>
        <div className='lg:col-start-9 lg:col-span-4 md:col-start-1 md:col-span-4 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:justify-center lg:pb-[104px] md:pb-[64px] sm:pb-[60px] max-sm:pb-[60px]'>
          <div className='flex flex-row items-center justify-start pt-1 md:pb-7 sm:pb-3 max-sm:pb-3'>
            <p className='block pr-8 md:text-[14px] md:leading-[14px] max-sm:text-[16px] max-sm:leading-[16px] text-[#687480] font-medium font-flexsans'>ВИСТАВКА</p>
            <p className='block md:text-[14px] md:leading-[14px] max-sm:text-[16px] max-sm:leading-[16px] text-[#1A5A4C] font-bold font-flexsans'>26.08-29.11.2019</p>
          </div>
          <div className='flex flex-row items-center mb:justify-start max-sm:whitespace-nowrap pb-4 w-full'>
            <p className='block md:pr-4 max-sm:pr-2 md:text-[36px] md:leading-[36px] max-sm:text-[28px] max-sm:leading-[28px] text-[#0F0E08]'>І спогади і мрії</p>
            <div className='md:h-[15px] md:w-[15px] max-sm:h-[10px] max-sm:w-[10px] bg-[#F14A27] md:translate-y-1 max-sm:translate-y-0.5'></div>
          </div>
          <p className='block font-flexsans md:text-[16px] md:leading-[24px] max-sm:text-[16px] max-sm:leading-[24px] text-[#4E4E4E]'>Національний художній музей України до 100 річчя від дня народження   видатної української художниці  Тетяни Яблонської  відкриває ретроспективну ювілейну виставку «І спогади і мрії».</p>

        </div>

      </div>

    </section>
  )
}

export default CurrentEvents
