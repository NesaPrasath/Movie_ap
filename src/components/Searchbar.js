'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Searchbar() {
  const [url,setUrl]=useState('/')

  function handleChange(e)
  {
    setUrl(`/api/${e.target.value}`)
  }
  return (
    <div className='relative text-lg w-2/4 mb-1'>
        <input id='search' className='border absolute p-2 left-0 right-0 inset-y-0 bg-white border-none h-12 w-full text-black rounded-md focus:outline-none' placeholder='search a movie,series' onChange={handleChange}/>
        <Link href={url} onClick={()=>document.getElementById('search').value=''}><button className='border bg-white border-none absolute right-0 rounded-e-md inset-y-0 px-2 h-12 w-fit text-black cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg></button></Link>
    </div>
  )
}
