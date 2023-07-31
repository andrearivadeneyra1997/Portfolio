import React from 'react'

export default function Skills() {
  return (
    <div className='mb-16 flex flex-col lg:flex-row gap-8'>
      <div className='flex-1 bg-pastelBlue p-8 rounded-md'>
        <div className='text-xl font-semibold text-center tracking-wide'>Development</div>
        <ul className='flex gap-2 mt-4'>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>React</li>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>NextJS</li>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>Javascript</li>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>RubyOnRails</li>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>Ruby</li>
          <li className='bg-white text-pastelBlue font-semibold w-fit px-4 py-2 rounded-md text-md'>SQL</li>
        </ul>
      </div>
      <div className='flex-1 bg-pastelPink p-8 rounded-md'>
        <div className='text-xl font-semibold text-center tracking-wide'>Design</div>
        <ul className='flex gap-2 mt-4'>
          <li className='bg-white text-pastelPink font-semibold w-fit px-4 py-2 rounded-md text-md'>Photoshop</li>
          <li className='bg-white text-pastelPink font-semibold w-fit px-4 py-2 rounded-md text-md'>Illustrator</li>
          <li className='bg-white text-pastelPink font-semibold w-fit px-4 py-2 rounded-md text-md'>Cinema4D</li>
          <li className='bg-white text-pastelPink font-semibold w-fit px-4 py-2 rounded-md text-md'>InDesign</li>
          <li className='bg-white text-pastelPink font-semibold w-fit px-4 py-2 rounded-md text-md'>Figma</li>
        </ul>
      </div>
    </div>
  )
}
