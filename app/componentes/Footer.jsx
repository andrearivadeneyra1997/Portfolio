import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-32 flex items-center px-12 py-4 bg-pastelYellow text-pastelBrown mt-8 justify-end'>
      <div className='flex gap-4'>
        <a href='https://www.linkedin.com/in/andrearivadeneyrasciolli/' target='_blank'>
          <Image width={30} height={30} alt="linkedin" src="/linkedin.svg" />
        </a>
        <a href='https://github.com/andrearivadeneyra1997' target='_blank'>
          <Image width={30} height={30} alt="github" src="/github.svg" />
        </a>
      </div>
    </footer>
  )
}
