'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie';

import LoginButton from '@/components/auth/login-button'
import animationData from '@/assets/Typing-animation.json';

const Hero = () => {
  const underlineVariant = {
    initial: {width: '0%',transition:{duration:0.5,ease:'easeInOut'}},
    hover: {width: '100%',backgroundColor:'white',transition:{duration:0.5,ease:'easeInOut'}},
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <section className='h-screen w-full flex flex-col justify-center items-center bg-blue-600'>
      <div className="h-full w-full dark:bg-black bg-blue-600 dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_60%)]"></div>
        <div className='flex flex-col items-center justify-center z-20 gap-5 px-2'>
          <div className='flex flex-col items-center justify-center z-20 gap-8 px-2'>
            <div className = 'bg-blue-400 bg-opacity-70 backdrop-blur-lg rounded-full py-2 px-10'>
              <p className='text-white text-sm font-medium'>✨ Writing made easy</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 p-2'>
              <h1 className='text-white text-4xl sm:text-6xl font-extrabold text-center'>
                Write your documents easily with Scriptly. 
              </h1>
              <p className='text-stone-300 text-md text-center w-[30ch sm:w-[35ch]'>Scriptly has AI capabilities that allow you to write your documents fast and easily. Try it out now, It&apos;s free!</p>
              <motion.div initial='initial' whileHover='hover' animate='initial' className='bg-yellow-300 text-black px-10 py-3 rounded-lg font-bold mt-5 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer'>
                <LoginButton className='relative group'>
                  <motion.span
                  variants={underlineVariant}
                    className='w-7 h-[2px] bg-black absolute left-0 right-0 bottom-0'></motion.span>
                  Get Started Today!
                </LoginButton>   
              </motion.div>
            </div>
          </div>
          <div>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
