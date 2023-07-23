import Link from 'next/link'
import React, { useContext } from 'react'
import { Slidecontext } from './Menubar'

export default function Menuelement({heading,topics}) {
  const {slide,setSlide}=useContext(Slidecontext)
  function handleclick()
  {
    setSlide(prev=>!prev)
  }
  return (
    <div> 
        <h1 className='text-lg font-semibold text-yellow-300'>{heading}</h1>
        <ul>
           { topics.map(data=><Link key={data.name} href={data.path}><li key={data.name}><button className='hover:text-yellow-200 w-full' onClick={handleclick}>{data.name}</button></li></Link>)}
        </ul>
    </div>
  )
}
