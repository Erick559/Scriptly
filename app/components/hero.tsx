'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'

import LoginButton from '@/components/auth/login-button'
import animationData from '@/assets/Typing-animation.json';
import easyTypingAnimationData from '@/assets/easy-typing.json';
import Image from 'next/image';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


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

  const easyTypingOptions = {
    loop: true,
    autoplay: true,
    animationData: easyTypingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center bg-blue-600 pt-24 md:pt-36'>
      <div className="h-full w-full dark:bg-black bg-blue-600 dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_80%)]"></div>
        <div className='flex flex-col items-center justify-center z-20 gap-5 px-2 lg:px-6'>
          <div className='flex flex-col items-center justify-center z-20 gap-8 px-2 relative'>
            <div className = 'bg-blue-400 bg-opacity-70 backdrop-blur-lg rounded-full py-2 px-10 xl:py-3 xl:px-12'>
              <p className='text-black font-bold text-sm xl:text-md'>✨ Writing made easy</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 p-2 z-10'>
              <h1 className='text-white text-4xl sm:text-6xl md:text-7xl font-black text-center xl:w-[20ch]'>
                Write your documents easily with Scriptly. 
              </h1>
              <p className='text-stone-300 text-md xl:text-xl text-center w-[30ch sm:w-[35ch] xl:w-[40ch]'>Scriptly has AI capabilities that allow you to write your documents fast and easily. Try it out now, It&apos;s free!</p>
              <motion.div initial='initial' whileHover='hover' animate='initial' className='bg-yellow-300 text-black px-10 py-3 rounded-lg font-bold mt-5 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer'>
                <LoginButton className='relative group'>
                  <motion.span
                  variants={underlineVariant}
                    className='w-7 h-[2px] bg-black absolute left-0 right-0 bottom-0'></motion.span>
                  Get Started Today!
                </LoginButton>   
              </motion.div>
            </div>
            <div className='w-full md:w-[30%] block md:absolute bottom-0 right-0 xl:top-50 z-0'>
              <Lottie animationData={animationData} height="100%" width="100%" />
            </div>
            <div className='w-full md:w-[30%] lg:w-[20%] hidden md:block md:absolute top-0 left-0 z-0'>
              <Lottie animationData={easyTypingAnimationData} height="100%" width="100%" />
            </div>
          </div>
          <div className='w-full hidden md:block'>
            <Image src='/documet-preview.png' alt='document-preview' width={1200} height={720} className='rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
