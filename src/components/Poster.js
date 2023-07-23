'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Poster({image}) {
  // console.log(image)
  return (
    <div className='w-full h-1/4 inline-flex justify-evenly'>
        {/* <img src={image} className='object-contain'/> */}
        <Image src={image} width={200} height={150} alt='poster image'/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8" title="YouTube video player" allowfullscreen  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        
    </div>
  )
}
