import DownloadFeature from '@/components/features/download-feature'
import SuggestionsFeature from '@/components/features/suggestions-feature'
import UploadFeature from '@/components/features/upload-feature'
import React from 'react'

const Features = () => {
  return (
    <section className='min-h-screen pt-10 px-3 md:px-8'>
        <div className='flex flex-col'>
            <header className='w-full h-[2px] bg-yellow-300 relative'>
                <h1 className='bg-blue-700 text-white text-center font-semibold text-sm py-2 px-16 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase'>
                    [Features]
                </h1>
            </header>
            <div className='mt-14 w-full'>
                <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-stone-900'>Using Scriptly is easy like <br /> 1..2..3</h1>
            </div>

            <div className='mt-16 w-full flex flex-col gap-14'>
                <UploadFeature />
                <SuggestionsFeature />
                <DownloadFeature />
            </div>
        </div>
    </section>
  )
}

export default Features
