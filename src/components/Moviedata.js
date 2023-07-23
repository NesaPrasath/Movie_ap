import React from 'react'

export default function Moviedata({title,year,rating,runtime,released,plot,genre,director,writer,language,cast,id}) {
  return (
    <div className='justify-center'>
        <h3 className='text-xl font-bold border-l-8 border-yellow-500 p-2'>{title}</h3>
        <p><span className='font-semibold text-yellow-500'>year:</span>{year}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Rated:</span>{rating}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Runtime:</span>{runtime}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Released:</span>{released}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Plot:</span>{plot}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Genre:</span>{genre}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Director:</span>{director}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Writer:</span>{writer}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Languge:</span>{language}</p><br/>
        <p><span className='font-semibold text-yellow-500'>Cast&Crew:</span>{cast}</p><br/>
    </div>
  )
}
