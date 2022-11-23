import Image from 'next/image';
import React from 'react'
import { wallpaper } from "../assets";

function Banner() {
  return (
    <header className='relative h-[300px] sm:h-[400px] lg:h-[600px] xl-[700] 2xl:h-[800px]'>
        <Image
          src={wallpaper}
          fill
          alt='wallpaper'
          className='object-cover bg-slate-50'
        />

        <div className='absolute top-0 bottom-0 left-0 right-0 bg-blackOverlay'/>
        
        <div className='absolute top-1/2 w-full text-center'>
          <p className='text-sm text-white font-extrabold sm:text-lg lg:text-xl shadow-md'>Not Sure Where to go ?</p>
          <button className='text-purple-400 bg-white rounded-full my-3 px-10 py-4 font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150'>I'm Flexible</button>
        </div>
    </header>
  )
}

export default Banner