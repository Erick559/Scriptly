import React from 'react'
import Image from 'next/image'
import navLinks from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-blue-500 py-6 md:py-4'>
      <div className='flex flex-col justify-between items-center gap-5'>
        <div>
          <Image src='/Logo-White.svg' alt="Scriplty Logo" width={100} height={100} className='md:w-[150px] md:h-[150px]' />
        </div>
        <div>
          <ul className='flex gap-7 w-full'>
            {navLinks.map((link,index)=>(
              <li key={index}>
                <Link className='text-white md:text-lg' href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-2 sm:flex-row justify-between items-center border-t border-white py-4 px-2 sm:px-5 mt-6'>
        <p className='text-white text-sm md:text-base'>© 2024 Scriplty. All rights reserved.</p>
        <Link className='text-white text-sm md:text-base underline' href="https://www.kungu.xyz" target='_blank'>Made with ❤️ by Kungu</Link>
      </div>
    </footer>
  )
}

export default Footer
