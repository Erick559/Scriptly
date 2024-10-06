import React from 'react';
import dynamic from 'next/dynamic';
import { Manrope } from "next/font/google";
import NavigationBar from "@/components/navbar";
import Hero from './components/hero';
import Footer from '@/components/footer';
import CallToAction from './components/call-to-action';

const Features = dynamic(() => import('./components/features'), { ssr: false });

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
