import Image from 'next/image'
import React from 'react'

export default function Works() {
  return (
    <div className='mb-16'>
      <div className='text-2xl my-8 font-semibold'>Some of my Projects</div>
      <div className='grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <a href="https://github.com/andrearivadeneyra1997/react-eatable" target='_blank' className=''>
          <Image className="opacity-90 hover:opacity-100 rounded-sm" width={350} height={60} alt="eatable" src="/eatable2.png" />
        </a>
        <a href="https://github.com/andrearivadeneyra1997/rails-tweetable" target='_blank' className=''>
          <Image className="opacity-90 hover:opacity-100 rounded-sm" width={350} height={60} alt="tweetable" src="/tweetable2.png" />
        </a>
        <a href="https://github.com/andrearivadeneyra1997/js-doable" target='_blank' className=''>
          <Image className="opacity-90 hover:opacity-100 rounded-sm" width={350} height={60} alt="doable" src="/doable2.png" />
        </a>
        <a href="https://github.com/andrearivadeneyra1997/ruby-clivia-generator" target='_blank' className=''>
          <Image className="opacity-90 hover:opacity-100 rounded-sm" width={350} height={60} alt="clivia" src="/clivia2.png" />
        </a>
      </div>
    </div>
  )
}
