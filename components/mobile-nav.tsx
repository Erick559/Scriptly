import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import navLinks from '@/constants'
import Link from 'next/link'
import LoginButton from './auth/login-button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden'>
            <MenuIcon className='w-7 h-7 text-white' />
        </SheetTrigger>
        <SheetContent>
            <SheetHeader className='mt-10'>
                <SheetTitle>
                    <Image src='/Logo.svg' width={120} height={100} alt='Scriptly logo featuring an image of a pen and text reading Scriptly.' />
                </SheetTitle>
            </SheetHeader>
            <ul className='flex flex-col gap-3 mt-10'>
                {navLinks.map((link)=>(
                    <SheetClose asChild key={link.id}>
                        <li className='text-lg'>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    </SheetClose>
                ))}
            </ul>
            <div className='flex flex-col items-start gap-3 mt-10'>
                <SheetClose asChild>
                    <LoginButton mode='login'>
                        <Button className='w-[200px] bg-indigo-400 text-white font-bold'>Login</Button>
                    </LoginButton>
                </SheetClose>

                <SheetClose asChild>
                    <LoginButton mode='register'>
                        <Button className='w-[200px] bg-green-500 text-white font-bold'>Register</Button>
                    </LoginButton>
                </SheetClose>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
