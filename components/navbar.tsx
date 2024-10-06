'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import { Button } from './ui/button'
import LoginButton from './auth/login-button'
import { useState } from 'react';
import MobileNav from './mobile-nav';
import navLinks from '@/constants';

const NavigationBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolling,setScrolling] = useState(false);
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY,"change",(latest)=>{
        if(latest > 60) {
            setScrolling(true);
        }
        else {
            setScrolling(false);
        }
    });

  return (
    <motion.header className='fixed top-0 left-0 right-0 z-50'>
        <motion.div
         variants={{
            initial: { backgroundColor: 'rgba(255,255,255,0)'},
            scrolling: { backgroundColor: 'rgba(255,255,255,0.95)',boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.1)',border:'1px solid rgba(0,0,0,0.1)',transition: {duration: 0.3, ease: 'easeInOut'}}
        }}
        initial="initial"
        animate={scrolling ? "scrolling" : "initial"}
        className='flex items-center justify-between p-5 lg:p-7'>
            {!scrolling ? 
            <Link href='#'>
                <Image src='/Logo-White.svg' width={120} height={100} alt='Scriptly logo featuring an image of a pen and text reading Scriptly.' />
            </Link>    
            :
            <Link href='#'>
                <Image src='/Logo.svg' width={120} height={100} alt='Scriptly logo featuring an image of a pen and text reading Scriptly.' />
            </Link>
}
            <nav className='flex gap-5'>
                <ul className='items-center hidden sm:flex gap-5'>
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                            <Link onClick={()=>setActiveLink(link.name)} className={`hover:text-stone-900 ${activeLink === link.name ? 'text-stone-900' : 'text-stone-500'} ${scrolling && activeLink !== link.name ? 'text-stone-500 hover:text-stone-900' : 'text-white'}`} href={link.href}>[ {link.name} ]</Link>
                        </li>
                    ))}
                </ul>
                <aside className='flex items-center gap-2'>
                    <div className='hidden md:flex items-center gap-2'>
                        <LoginButton mode='login'>
                            <Button className={`text-md ${scrolling ? 'bg-black text-white' : 'bg-white text-stone-800'} transition-all duration-300`}>Login</Button>
                        </LoginButton>

                        <LoginButton mode='register'>
                            <Button className='bg-yellow-300 text-black font-bold'>Register</Button>
                        </LoginButton>
                    </div>
                    <MobileNav />
                </aside>    
            </nav>
        </motion.div>
    </motion.header>
  )
}

export default NavigationBar