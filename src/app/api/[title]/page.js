'use client'
import React, { useContext, useEffect, useState } from 'react'
import Poster from '@/components/Poster'
import Moviedata from '@/components/Moviedata'
import { useParams } from 'next/navigation'
import { UserContext } from '@/components/Header'
import Box from '@/components/Box'
import Subheading from '@/components/Subheading'

export default function Page() {
  const param=useParams()
  const [data,setData]=useState({Response:'True'})
  const {user}=useContext(UserContext)
  const recdata=require('src/data/movies/data.json').data
  const api_key=process.env.NEXT_PUBLIC_API
  // https://api.kinocheck.de/movies?tmdb_id=299534
    useEffect(()=>
    {
      fetch(`http://www.omdbapi.com/?t=${param.title}&apikey=${api_key}`).then(response=>response.json()).then(data=>setData(data))
      console.log();
    },[param.title])
  return (
    <div>
    {(user!=='')?<>{(data.Response==='True')?<div className='h-fit'>
       {(data.Poster!==undefined)?<Poster image={data.Poster}/>:<p className='h-full w-full p-6 text-center text-2xl font-bold text-yellow-400'>Loading...!</p>}
       <div className='bg-transparent w-full flex justify-between my-2   p-2'>
        <Moviedata title={data.Title} year={data.Year} rating={data.imdbRating} runtime={data.Runtime} released={data.Released} id={data.imdbID} director={data.Director} genre={data.Genre} language={data.Language} writer={data.Writer} cast={data.Actors} plot={data.Plot}/>
        <div className='w-1/3'><Subheading title={'Recomended'}></Subheading>{recdata.filter((data,index)=>{if(index<5)
    {
      return data
    }}).map(data=><Box key={data.Title} Title={data.Title} Rating={data.imdbRating} Actors={data.Actors} Year={data.Year} Plot={data.Plot} img={data.Poster}/>)}</div>
    </div>   
    </div>:<div className='text-center'><p className='text-xl p-2 bg-slate-600'>No movies Found !</p></div>}</>:<div className='inline-flex justify-center h-full w-full my-4'><p className='font-xl font-semibold p-4'>Please Login to see the details!</p></div>}
    </div>
  )
}
// (require('/home/administrator/Movie-app/my-app/src/data/movies/data.json').data)
//   const fildata=recdata.filter(data=>{
//     if(data.Genre===data.Genre)
//     {
//       return data
//     }
//   })
// .filter(movie=>
//   {
//     if(movie.Genre.search(data.Genre)!==-1)
//     {
//       return movie
//     }
//   })