import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row gap-8 mb-8 min-h-[300px] items-center'>
      <div className='w-full md:w-1/2 px-4'>
        <small>Hi, my name is Andrea</small>
        <div className='text-5xl leading-tight font-extrabold mt-4'>I am a fullstack Developer & Designer</div>
        <div className='mt-4 text-lg'>
          I am Jr. full-stack developer with knowledge in marketing, advertising and design.
        </div>
      </div>
      <div className='w-full md:w-1/2 h-full flex justify-center'>
        <Image className="rounded-sm" width={450} height={100} alt="andrea hero" src="/hero1.png" />
      </div>
    </div>
  )
}
