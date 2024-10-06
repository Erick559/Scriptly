import { motion } from 'framer-motion'
import React from 'react'
import LoginButton from './auth/login-button'

const AnimatedButton = ({children}:{children:React.ReactNode}) => {
    const underlineVariant = {
        initial: {width: '0%',transition:{duration:0.5,ease:'easeInOut'}},
        hover: {width: '100%',backgroundColor:'white',transition:{duration:0.5,ease:'easeInOut'}},
    }
  return (
    <motion.div initial='initial' whileHover='hover' animate='initial' className='bg-yellow-300 text-black px-10 py-3 rounded-lg font-bold mt-5 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer'>
        <LoginButton className='relative group'>
        <motion.span
        variants={underlineVariant}
        className='w-7 h-[2px] bg-black absolute left-0 right-0 bottom-0'>
        </motion.span>
        {children}
        </LoginButton>   
    </motion.div>
  )
}

export default AnimatedButton
