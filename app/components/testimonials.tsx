'use client'; 

import { testimonials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const firstColumn  = testimonials.slice(0, 3);
export const secondColumn = testimonials.slice(3, 6);
export const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = ( props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?:number;
}) => {
    return (
        <div className={`${props.className} p-3`}>
            <motion.div animate={{translateY: "-50%"}} transition={{duration:props.duration || 10, repeat:Infinity, ease:"linear",repeatType:"loop"}} whileHover={{translateY: "0"}} className="flex flex-col gap-6 pb-6">
                {[...new Array(2)].map((_,index)=>(
                    <React.Fragment key={index}> 
                        {props.testimonials.map((testimonial,index)=> (
                            <div key={index} className='bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-4 w-full md:w-[350px]'>
                                <p>{testimonial.text}</p>
                                <div className='flex items-center gap-2'>
                                    <Image src={testimonial.imageSrc} alt={testimonial.name} width={40} height={40} className='rounded-full' />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.username}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}



const Testimonial = () => {
  return (
    <section className='min-h-screen pt-10 px-3 md:px-8 lg:px-[80px]'>
        <div className='flex flex-col justify-center items-center'>
            <header className='w-full h-[2px] bg-yellow-300 relative'>
                <h1 className='bg-blue-700 text-white text-center font-semibold text-sm py-2 px-16 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase'>
                    [Testimonials]
                </h1>
            </header>

            <div className='mt-14 flex flex-col gap-2'>
                <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-stone-900'>What our users say</h1>
                <h2 className='text-center text-lg md:text-2xl text-stone-500'>Our users are our priority,<br /> and we value their feedback.</h2>
            </div>

            <div className='h-[700px] flex gap-6 justify-center mt-14 overflow-hidden [mask-image:linear-gradient(transparent,white,white,transparent)]'>
                <TestimonialsColumn duration={15} testimonials={firstColumn} />
                <TestimonialsColumn duration={17} testimonials={secondColumn} className='hidden sm:block' />
                <TestimonialsColumn duration={19} testimonials={thirdColumn} className='hidden lg:block' />
            </div>
        </div>
    </section>
  )
}

export default Testimonial
