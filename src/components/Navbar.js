import Link from 'next/link'
import React from 'react'

export default function Navbar({element}) {
  return (
    <div className='flex gap-2 justify-center'>
        {element.map(data=><Link key={data.text} href={data.path} target='_blank'><button className="border-none p-4 mx-1 rounded-md text-center text-white hover:underline underline-offset-4 hover:bg-slate-800">{data.text}</button></Link>)}
    </div>
  )
}
