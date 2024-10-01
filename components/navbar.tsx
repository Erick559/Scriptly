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
    <motion.header className='fixed top-0 left-0 right-0 p-3 md:px-11 lg:px-20'>
        <motion.div
         variants={{
            initial: { backgroundColor: 'rgba(255,255,255,0)' },
            scrolling: { backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)', marginTop: '20px',borderRadius:'10px',boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.1)',padding:'25px',border:'1px solid rgba(0,0,0,0.1)'}
        }}
        initial="initial"
        animate={scrolling ? "scrolling" : "initial"}
        transition={{duration: 0.3, ease: 'easeInOut'}}
        className='flex items-center justify-between p-3'>
            <Link href='#'>
                <Image src='/Logo.svg' width={120} height={100} alt='Scriptly logo featuring an image of a pen and text reading Scriptly.' />
            </Link>
            <nav className='flex gap-5'>
                <ul className='items-center hidden sm:flex gap-5'>
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                             <Link onClick={()=>setActiveLink(link.name)} className={`hover:text-sky-500 ${activeLink === link.name ? 'text-sky-500' : 'text-stone-500'}`} href={link.href}>{link.name} /</Link>
                        </li>
                    ))}
                </ul>
                <aside className='flex items-center gap-2'>
                    <div className='hidden md:flex items-center gap-2'>
                        <LoginButton mode='login'>
                            <Button variant='ghost' className='text-indigo-500 text-md'>Login</Button>
                        </LoginButton>

                        <LoginButton mode='register'>
                            <Button className='bg-sky-600 text-white font-bold'>Register</Button>
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