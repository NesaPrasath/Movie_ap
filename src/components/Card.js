'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({img,title,rating,id}) {
  return (
    <div className='w-full h-9/10 rounded-sm py-2 bg-transparent overflow-hidden shadow-slate-300 shadow-1md '>
      <Link href={`/api/${title}`} width={300} height={300}>
        <section className='overflow-hidden h-8/10'><Image alt={"image"} src={img} className='w-full h-full object-contain object-top hover:scale-110 transition-all delay-300 ease-out ' width={300} height={300}/></section></Link>
      <div className='px-3'>
      <Link href={`/api/${title}`}><h2 className='text-yellow-500 text-lg font-bold hover:underline underline-offset-2'>{title}</h2></Link>
      <p className='tracking-wider'><span className='mx-2'>&#11088;</span>{rating}</p> 
      </div>
  </div>
  )
}
