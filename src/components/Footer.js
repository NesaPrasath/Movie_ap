import React from 'react'
import Navbar from './Navbar'

export default function Footer() {
    const element=[
        {
          text:'Facebook',
          path:'https://www.facebook.com'
        },
        {
          text:'Instagram',
          path:'https://www.instagram.com'
        },
        {
          text:'Youtube',
          path:'https://www.youtube.com'
        },
        {
          text:'Twitter',
          path:'https://www.twitter.com'
        }]
    const element2=[
        {
            text:'Conditions of Use',
            path:'/'
        },
        {
            text:'Privacy Policy',
            path:'/'
        }
    ]
  return (
    <div className='p-4 text-center my-2'>
        <Navbar element={element}/>
        <Navbar element={element2}/>
        <p className='my-4'>@ 2023 Copyright by abcd.com,Inc</p>
    </div>
  )
}
