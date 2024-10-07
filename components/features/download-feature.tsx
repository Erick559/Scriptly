'use client'

import React from 'react'
import Lottie from 'lottie-react'

import { Card, CardContent } from '../ui/card'
import downloadAnimation from '@/assets/download.json';

const DownloadFeature = () => {
  return (
    <div className='flex flex-col gap-5 xl:gap-16 md:flex-row px-5 sm:px-10 lg:px-24 xl:px-72'>
        <div className='flex flex-col gap-2 items-center flex-1 md:items-start justify-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 text-center md:text-left'>Now Download Your Document</h2>
            <p className='text-lg text-center md:text-left w-[30ch] text-style'>After editing, your document is now ready to download. Download it in word format.</p>
        </div>

        <div className='flex-1'>
            <Card className='bg-blue-300 lg:py-10'>
                <CardContent className='flex items-center justify-center pt-3'>
                    <div className='w-full flex items-center justify-center'>
                        <Lottie className='w-[250px] h-[250px]' animationData={downloadAnimation} />
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default DownloadFeature