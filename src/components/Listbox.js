'use client'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react' 
import Box from './Box';
import { UserContext } from './Header';


export default function Listbox({data}) {
  // 
  const {user,setUser}=useContext(UserContext)
  const genre =useParams().genre;
  const movie=data.filter(data=>
    {
      const type=data.Genre.toLowerCase();
      if(type.search(genre)!==-1)
      {
        return data;
      }
    })
  return (
    <>{(user!=='')?<div>
    <h1 className='text-yellow-500 text-3xl font-bold p-2'>{genre.toUpperCase()} List</h1> 
      {movie.map(data=><Box key={data.Title} Title={data.Title} Rating={data.imdbRating} Actors={data.Actors} Year={data.Year} Plot={data.Plot} img={data.Poster}/>)}
  </div> :<div className='inline-flex justify-center h-full w-full my-4'><p className='font-xl font-semibold p-4'>Please Login to see the details!</p></div>}</>
  )
}
{/* <div>
      <h1 className='text-yellow-500 text-3xl font-bold p-2'>{genre.toUpperCase()} List</h1>
        {movie.map(data=><Box key={data.Title} Title={data.Title} Rating={data.imdbRating} Actors={data.Actors} Year={data.Year} Plot={data.Plot}/>)}
    </div> */}