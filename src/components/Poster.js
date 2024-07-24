'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Poster({image}) {
  return (
    <div className='w-full h-1/4 inline-flex justify-evenly'>
        {/* <img src={image} className='object-contain'/> */}
        <Image src={image} width={200} height={150} alt='poster image'/>
        
    </div>
  )
}
