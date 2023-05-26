import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full h-32 flex items-center px-12 py-4'>
      <Image className="rounded-full mr-2" width={40} height={40} alt="andrea logo" src="/logo1.png" />
      <div className='flex font-extrabold text-2xl tracking-wide'>
        <div>Andrea Rivadeneyra</div>
      </div>
    </header>
  )
}
