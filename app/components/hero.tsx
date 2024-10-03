import LoginButton from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen w-full flex flex-col justify-center items-center bg-blue-600'>
      <div className="h-full w-full dark:bg-black bg-blue-600 dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_70%)]"></div>
        <div className='flex flex-col items-center justify-center z-20 gap-10'>
          <div className = 'bg-blue-400 bg-opacity-70 backdrop-blur-lg rounded-full py-2 px-10'>
            <p className='text-white text-sm font-medium'>✨ Writing made easy</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-white text-4xl sm:text-7xl font-extrabold text-center'>
              Write your documents easily with Scriptly. 
            </h1>
            <p className='text-stone-300 text-md text-center w-[30ch]'>Scriptly has AI capabilities that allow you to write your documents fast and easily. Try it out now, It's free!</p>
            <Button className='bg-yellow-300 text-black px-10 rounded-lg font-bold mt-5 hover:bg-yellow-500 hover:text-white'>
              <LoginButton>Get Started Today!</LoginButton>   
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
