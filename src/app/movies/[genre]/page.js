import React from 'react'
import { promises as fs} from 'fs'
import Listbox from '@/components/Listbox'

export default async function Page() {
 const data =JSON.parse(await fs.readFile('src/data/movies/data.json','utf-8'))
  return (
    <div><Listbox data={data.data}/></div>
  )
}

export async function getStaticPaths()
{
  const url=JSON.parse(await fs.readFile('src/data/movies/main.json','utf-8')).name;
  
  const data=url.map(data=>({params:{genre:data}}))
  return {
    paths: data,
    fallback:false,
  }
}
