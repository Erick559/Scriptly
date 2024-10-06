import React from 'react';
import dynamic from 'next/dynamic';
import { Manrope } from "next/font/google";
import NavigationBar from "@/components/navbar";
import Hero from './components/hero';

const Features = dynamic(() => import('./components/features'), { ssr: false });
const CallToAction = dynamic(() => import('./components/call-to-action'), { ssr: false });
const Footer = dynamic(() => import('./components/footer'), { ssr: false });

const manrope = Manrope({weight:['300','400','700'],subsets:['latin']});

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className = {`${manrope.className}`}>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
