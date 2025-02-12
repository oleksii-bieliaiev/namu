import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false); 
  };
 

  return (
    <AnimatePresence onExitComplete={onClose}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          key="menu"
          variants={menuVariants}
          transition={{ duration: 0.5 }}
          id="menu"
          className='fixed flex flex-col lg:h-screen md:h-screen sm:h-screen max-sm:h-screen w-full z-50'>
          <div className='grid lg:grid-cols-12 md:gap-8 sm:gap-x-4 max-sm:gap-x-4 bg-[#1A5A4C] lg:h-[233px] md:h-[225px] sm:h-[459px] max-sm:h-[459px] md:grid-cols-11 sm:grid-cols-3 max-sm:grid-cols-3 lg:pt-[40px] lg:pr-[55px] md:pt-[40px] sm:pt-[30px] max-sm:pt-[30px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-auto lg:pb-[40px] md:pb-[40px] sm:pb-[30px] max-sm:pb-[30px] md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto '>
            <div className='lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-1 max-sm:col-start-1 max-sm:col-span-1 mt-0 mb-auto flex md:flex-col sm:flex-row max-sm:flex-row lg:items-start md:justify-center sm:justify-start max-sm:justify-start max-sm:items-center'>
              <a
                className="flex cursor-pointer pl-[4px] pt-[4px]"
                onClick={handleClose}
              >
                <img
                  src="/cross.svg"
                  alt="Facebook"
                  className="w-[13px] h-[13px] object-contain transition-all duration-300 hover:opacity-0"
                />
                <img
                  src="/cross_hover.svg"
                  alt="Facebook Hover"
                  className="w-[13px] h-[13px] object-contain transition-all duration-300 absolute opacity-0 hover:opacity-100"
                />
              </a>
            </div>

            <div className='lg:col-start-2 lg:col-span-2 md:col-start-2 md:col-span-1 sm:col-start-2 sm:col-span-1 max-sm:col-start-2 max-sm:col-span-1  flex flex-col items-center mt-0 md:pb-0 sm:pb-2 max-sm:pb-2 mb-auto lg:justify-center md:justify-start sm:justify-start max-sm:justify-start max-sm:translate-x-[-2rem] lg:ml-[25%]'>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#gallery"
                  className='self-start lg:text-[22px] md:text-[16px] md:leading-[22px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
      hover:text-[#F14A27] hover:font-medium  transition-all duration-500'
                >
                  Галерея
                </a>
              </div>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#current-events"
                  className='self-start lg:text-[22px] md:text-[16px] md:leading-[22px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
      hover:text-[#F14A27] hover:font-medium  transition-all duration-500'
                >
                  Виставки та події
                </a>
              </div>
            </div>

            <div className='lg:col-start-4 lg:col-span-2 md:col-start-4 md:col-span-1 sm:col-start-3 sm:col-span-1 max-sm:col-start-3 max-sm:col-span-1 flex flex-col items-end mt-0 md:pb-0 sm:pb-2 max-sm:pb-2 mb-auto lg:justify-center  lg:ml-[25%] '>
              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#page-top"
                  className='lg:text-[22px] md:leading-[22px] md:text-[16px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
    hover:text-[#F14A27] hover:font-medium transition-all duration-500 whitespace-nowrap'
                >
                  Про Нас
                </a>
              </div>
              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#subscription"
                  className=' lg:text-[22px] md:leading-[22px] md:text-[16px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
    hover:text-[#F14A27] hover:font-medium transition-all duration-500'
                >
                  Контакти
                </a>
              </div>
            </div>

            <div className='hidden lg:col-start-7 lg:col-span-1 md:col-start-5 md:col-span-1 md:flex sm:hidden max-sm:hidden flex-col lg:items-start lg:justify-start md:items-end'>
              <img
                src="/line_3.svg"
                alt="Image"
                className='flex object-contain lg:w-[1px] bg-[#FFFFFF] md:h-[145px]  w-[1px] h-[100px]'
              />
            </div>

            <div className='hidden sm:col-start-1 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-3 md:hidden sm:flex max-sm:flex flex-row lg:items-start lg:justify-start md:items-end'>
              <img
                src="/line_4.svg"
                alt="Image"
                className='flex object-contain lg:w-[1px] bg-[#FFFFFF] w-[90vw] h-[1px]'
              />
            </div>

            <div className='lg:col-start-8 lg:col-span-2 md:col-start-6 md:col-span-3 sm:col-start-1 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-3 flex flex-col items-center mt-0 md:mt-0 sm:mt-[24px] max-sm:mt-[24px] mb-auto lg:justify-center max-sm:justify-start md:ml-[10%] max-sm:items-start '>
              <p className='flex md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] ml-0 mr-auto font-flexsans'>Графік роботи</p>

              <div className='flex md:flex-row max-sm:flex-row w-full justify-start md:pt-[20px] max-sm:pt-[10px]'>
                <p className='block pr-1 md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>12:00-20:00</p>
                <p className='block md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>середа</p>
              </div>

              <div className='flex w-full md:flex-row max-sm:flex-row justify-start'>
                <p className='block pr-1 md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>12:00-20:00</p>
                <p className='block md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>четвер</p>
              </div>

              <div className='flex md:flex-row max-sm:flex-row w-full justify-start'>
                <p className='block pr-1 md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>12:00-20:00</p>
                <p className='block md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>п'ятниця</p>
              </div>

              <div className='flex md:flex-row max-sm:flex-row w-full justify-start'>
                <p className='block pr-1 md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>11:00-19:00</p>
                <p className='block md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>субота</p>
              </div>

              <div className='flex md:flex-row max-sm:flex-row w-full justify-start pb-[20px]'>
                <p className='block pr-1 md:text-[14px] md:leading-[20px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>11:00-19:00</p>
                <p className='block md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>неділя</p>
              </div>
            </div>

            <div className='lg:col-start-10 lg:col-span-2 md:col-start-10 sm:col-start-1 sm:col-span-3  max-sm:col-start-1 max-sm:col-span-3 lg:translate-x-0 md:translate-x-[-50px] md:col-span-2 flex flex-col items-center mt-0 max-sm:mt-0 mb-auto lg:justify-center md:ml-[10%] max-sm:justify-start sm:items-start max-sm:items-start lg:pt-[42px] md:pt-[40px]'>
              <div className='flex md:flex-row md:w-[140px] max-sm:flex-row lg:w-full justify-start '>
                <p className='pr-1 md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-bold max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>Вихідні:</p>
                <p className='md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>
                  понеділок,</p>
              </div>
              <div className='lg:w-full md:w-[140px] md:text-left'>
                <p className='md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>вівторок</p>
              </div>
              <div className='lg:w-full md:w-[140px] text-left'>
                <p className='md:text-[14px] md:leading-[21px] max-sm:text-[14px] font-normal max-sm:leading-[21px] text-[#FFFFFF] font-flexsans'>Каса припиняє роботу за 1 годину до закриття музею</p>
              </div>
            </div>

          </div>
          <div className='bg-[#2f2f2f] opacity-65 w-full h-full' />


        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
