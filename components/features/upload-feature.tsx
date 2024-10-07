'use client'

import React from 'react'
import Lottie from 'lottie-react'
import { FolderUp, Upload } from 'lucide-react'

import { Card, CardContent } from '../ui/card'
import uploadAnimation from '@/assets/upload.json'

const UploadFeature = () => {
  return (
    <div className='flex flex-col gap-5 xl:gap-16 md:flex-row px-5 sm:px-10 lg:px-24 xl:px-72'>
        <div className='flex flex-col gap-2 items-center flex-1 md:items-start justify-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 text-center md:text-left'>Upload your Word Document</h2>
            <p className='text-lg text-center md:text-left w-[30ch] text-style'>Our AI model will then rewrite your document in a way that is more engaging and easier to understand.</p>
        </div>

        <div className='flex-1'>
            <Card className='bg-blue-300 lg:py-10'>
                <CardContent className='flex items-center justify-center pt-3'>
                    <div className='relative w-150px h-full border-dashed border-2 border-blue-400 bg-white flex flex-col gap-4 p-4 items-center'>
                        <div className="w-[100px] h-[100px] bg-blue-400 rounded-full flex justify-center items-center cursor-pointer">
                            <FolderUp className="w-10 h-10 stroke-white" />
                        </div>

                        <div className={`flex items-center shadow-xl mt-auto justify-center w-full py-3 px-5 rounded-lg border border-black`}>
                            <span className="flex gap-2 items-center">Upload Document&nbsp;<Upload className="w-4 h-4" /></span>
                        </div>

                        <div className='w-[60px] h-[60px] absolute top-0 right-0'>
                            <Lottie animationData={uploadAnimation} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default UploadFeature