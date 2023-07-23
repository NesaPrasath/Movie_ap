import React from 'react'

export const dynamicParams = false;

export default function page() {
  return (
    <div>
        <h1>
            Help page
        </h1>
    </div>
  )
}
export async function generateStaticParams()
{
  return ['1','2','3'].map(data=>{id:data})
}