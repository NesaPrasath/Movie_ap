'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Subheading from './Subheading';

export default function Moviecontainer({container,heading}) {
    const [current,setCurrent]=useState(0);
    const prev=()=>
    {
        setCurrent(prev=>prev-1)
    }
    const next=()=>
    {
        setCurrent(prev=>prev+1)
    }
  return (
    <div >
    <Subheading title={heading}/>
        <div className='relative flex h-150 w-full my-4 overflow-hidden py-3 '>
        {container.map((data,index)=>
    {
        if(index===current)
        {
            return <div key={index} className='flex justify-around w-full absolute left-1 h-full gap-6 transition-all duration-300 ease-out'>
                {data.map(data=><Card key={data.Title} img={data.Poster} title={data.Title} rating={data.imdbRating}/>)}
            </div>
        }
        else if(index<current)
        {
            return <div key={index} className='flex justify-around w-full absolute -left-full h-full gap-6 transition-all duration-300 ease-out'>
                {data.map(data=><Card key={data.Title} img={data.Poster} title={data.Title} rating={data.imdbRating}/>)}
            </div>
        }
        else
        {
            return <div key={index} className='flex justify-around w-full absolute left-full h-full gap-6 transition-all duration-300 ease-out'>
                {data.map(data=><Card key={data.Title} img={data.Poster} title={data.Title} rating={data.imdbRating}/>)}
            </div>
        }
    })}
        {current>0&&<button className='absolute top-40/1 left-0 p-3 bg-black-st border-1  rounded-sm border-slate-400 font-bold text-3xl' onClick={prev}>{'<'}</button>}
        {current<container.length-1&&<button className='absolute right-0 top-40/1 p-3 border-1 bg-black-st rounded-sm border-slate-400 font-bold text-3xl' onClick={next}>{'>'}</button>}
    </div>
    </div>
  )
}
