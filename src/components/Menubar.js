'use client'
import React, { createContext, useState } from 'react'
import Image from 'next/image';
import Menulist from './Menulist';
// context.js

export const Slidecontext=createContext(null);

export default function Menubar() {
  const [slide,setSlide]=useState(false)
  const menuslide=()=>
  {
    setSlide(prev=>!prev)
  }
  return (
    <div className=' w-10 h-10 z-10 relative'>
        <div>
          <button onClick={menuslide} className="w-fit">
          <svg className='w-10 h-12'><path className='fill-white hover:fill-yellow-300'  d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </button>
        </div>
        <Slidecontext.Provider value={{slide,setSlide}}><div className={slide?'absolute p-4 slide transition-all ease-in-out delay-10 w-100 -translate-y-20 bg-slate-700':'absolute p-4 slide transition-all ease-in-out delay-10 w-100 -translate-y-200 bg-slate-700'}>
        <Menulist/>
        <button className='bg-yellow-400 text-black w-fit rounded-full px-3 absolute right-2 top-5' onClick={menuslide}>X</button>
        </div></Slidecontext.Provider>
    </div>
  )
}
