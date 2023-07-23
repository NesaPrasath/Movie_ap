import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/'><h1 className="text-black bg-yellow-400 rounded-sm h-fit font-bold p-2 cursor-pointer text-xl w-fit">LOGO</h1></Link>
  )
}
