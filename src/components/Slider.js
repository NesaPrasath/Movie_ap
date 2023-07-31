'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Slider() {
  const [current,setCurrent]=useState(0);
  function prev()
  {
    setCurrent(prev=>prev-1)
  }
  function next()
  {
    setCurrent(prev=>prev+1)
  }
  function slidemap(data,index)
  {
    if(index<current)
    {
      return <div key={data.id} className='flex bg-black w-full absolute -left-full top-0 h-full justify-center transition-all duration-300 ease-linear'><Image alt={""} width={300} height={200} src={data.img} className=' object-contain bg-black'/></div>
    }
    else if(index===current)
    {
      return <div key={data.id} className='flex bg-black w-full absolute left-0 top-0 h-full justify-center transition-all duration-300 ease-linear'><Image alt={""} width={300} height={200} src={data.img} className=' object-contain bg-black'/></div>
    }
    else
    {
      return <div key={data.id} className='flex bg-black w-full absolute left-full top-0 h-full justify-center transition-all duration-300 ease-linear'><Image alt={""} width={300} height={200} src={data.img} className=' object-contain bg-black'/></div>
    }
  }
  function handleSlide(e)
  {
    setCurrent(prev=>Number(e.target.dataset.id));
  }
  return (
    <div className='felx relative w-full h-100 bg-slate-300 overflow-hidden text-center'>
        <div className='w-full flex' id='slide_id'>
            {slide_detail.map(slidemap)}
        </div>
        {current>0&&<button className='absolute top-40/1 left-0 p-3  border-1  rounded-sm border-slate-400 font-bold text-3xl' onClick={prev}>{'<'}</button>}
        {current<slide_detail.length-1&&<button className='absolute right-0 top-40/1 p-3  border-1  rounded-sm border-slate-400 font-bold text-3xl' onClick={next}>{'>'}</button>}
        <div className='absolute left-2/4 bottom-1 z-0 flex gap-2'>{slide_detail.map((data,index)=><button width={300} height={200} key={index} className={(index==current)?'border border-white p-1 rounded-50% bg-white':'border border-white p-1 rounded-50% bg-transparent'} data-id={index} onClick={handleSlide}></button>)}</div>
    </div>
  )
}
const slide_detail=[
{
  id:'slide_1',
  img:"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
},
{
  id:'slide_2',
  img:"https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
},
{
  id:'slide_3',
  img:"https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg",
},
{
  id:'slide_4',
  img:"https://m.media-amazon.com/images/M/MV5BNDJmMzY0ZGUtYWE1My00OWViLTg1NTctOWMwZWJlNDQzNGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
}
]
