'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/ui/button'
import AnimatedButton from '@/components/animated-button'


const CallToAction = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const translateY  = useTransform(scrollYProgress, [0,1], [150,-150]);
  return (
    <section ref={sectionRef} className='py-20 md:py-32 lg:py-44 flex flex-col justify-center items-center gap-7 bg-gradient-to-b from-white via-white to-blue-500 relative'>
        <div className='flex flex-col gap-3 items-center z-10'>
            <p className='text-3xl sm:text-5xl lg:text-7xl font-bold'>Ready To Try Scriptly?</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-center w-[30ch]'>Sign up for free and start writing your word documents easily</p>
        </div>
        <div>
            <AnimatedButton>Sign Up For Free</AnimatedButton>
        </div>
        <div className='absolute top-16 -left-14 sm:-left-32 md:-left-40 lg:-left-20 xl:left-0'>
            <motion.img src='/spring.png' alt='3d spring' width={500} height={500} className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px]' style={{translateY}} />
        </div>
        <div className='absolute bottom-16 -right-14 sm:-right-28 sm:bottom-0 md:-right-40 lg:-right-20 xl:right-0'>
            <motion.img src='/star.png' alt='3d spring' width={300} height={300} className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]' style={{translateY}} />
        </div>
    </section>
  )
}

export default CallToAction