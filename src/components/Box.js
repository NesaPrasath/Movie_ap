import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Box({Title,Year,Rating,Plot,Actors,img}) {
  // console.log(img,Title)
  return (
    <div className=' bg-transparent border-y-2 my-2 border-white p-4 flex gap-2'>
        <Image src={img} width={100} height={100} alt='movie_img'/>
        <div><section className='flex gap-4'><Link href={`/api/${Title}`}><h1 className='text-blue-500 font-bold text-lg hover:underline underline-offset-1'>{Title}</h1></Link><p className='text-slate-500 text-sm italic pt-1'>({Year})</p></section>
        <p>&#11088;{Rating}</p>
        <p>{Plot}</p>
        <p className='text-slate-500 italic'>{Actors}</p></div>
    </div>
  )
}
