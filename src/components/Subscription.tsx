import React, { useRef, useState } from 'react'

const Subscription = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;


    if (!email) {
      setError('This field cannot be empty!');
      return;
    }

    console.log('Submitted email:', email);


    if (emailRef.current) {
      emailRef.current.value = '';
    }

    setError('');
  };

  return (
    <section id='subscription' className='relative flex flex-col lg:h-[75vh] md:h-[86vh] max-sm:h-[70vh] overflow-hidden md:mb-0 max-sm:mb-0'>
      <div className='grid lg:grid-cols-12 md:gap-8 md:grid-cols-6 sm:grid-cols-2 max-sm:grid-cols-2 lg:pr-0 md:pr-0 max-sm:pr-0 sm:pr-0 lg:pl-0 md:pl-0 max-sm:pl-0 sm:pl-0 md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto'>
        <div className='lg:col-start-1 lg:col-span-12 md:col-start-1 md:col-span-6 max-sm:col-start-1 max-sm:col-span-2 flex flex-col lg:items-start lg:justify-center md:justify-center md:relative lg:pb-[104px] md:pb-[36px] max-sm:pb-[16px]'>
          <div className='lg:w-full lg:h-[550px] md:w-full md:h-[380px] max-sm:w-full max-sm:h-[386px] overflow-hidden group'>
            <img
              src="/Subscription.svg"
              alt="Image"
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
          </div>
        </div>

        <div className='lg:col-start-4 lg:col-span-6 bg-tranparent lg:w-[570px] lg:h-[224px] md:w-[570px] md:h-[224px] max-sm:w-[280px] max-sm:h-[140px] md:col-start-1 md:col-span-6 max-sm:col-start-1 max-sm:col-span-2 flex flex-col justify-center  absolute lg:top-[50%] md:top-[50%] max-sm:top-[50%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <div className='w-full flex flex-col justify-center'>
            <p className='md:text-center max-sm:text-center md:w-[100%] md:text-[48px] md:leading-[48px] max-sm:text-[36px] font-bold max-sm:leading-[36px] pb-[16px] text-[#FFFFFF]'>Підписка</p>
            <p className='md:text-center max-sm:text-center lg:w-[100%] md:text-[18px] md:leading-[18px] max-sm:text-[18px] font-normal max-sm:leading-[27px] md:pb-[72px] max-sm:pb-[45px] text-[#FFFFFF] font-flexsans'>Бути в курсі всіх актуальних подій та останніх новин.</p>

            <form className='flex items-center justify-between lg:w-[100%] mx-auto md:w-[80%] h-[70px] '
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="E-mail"
                className="lg:w-[80%] md:w-[80%] md:h-[70px] max-sm:h-[50px] px-[10px] bg-white text-black border-transparent focus:outline-none hover:bg-[#fffdbc] focus:bg-[#fffdbc] transition-all duration-1000"
              />
              <button
                type="submit"
                className="md:w-[70px] max-sm:w-[50px] md:h-[70px] max-sm:h-[50px] bg-[#F14A27] text-white flex items-center group justify-center transition-all duration-1000 hover:bg-[#1A5A4C]"
              >
                <span className="font-bold ">
                  <img
                    src="/arrow_right.svg"
                    alt="Image"
                    className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-150'
                  />
                </span>
              </button>
            </form>

          </div>
          {error && (
            <div className="absolute md:bottom-[-26px] max-sm:bottom-[-50px] left-[40%] font-bold  uppercase transform -translate-x-1/2 text-red-500 text-[10px] ">
              <p>{error}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Subscription
