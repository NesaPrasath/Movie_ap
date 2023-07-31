import Moviecontainer from '@/components/Moviecontainer'
import Slider from '@/components/Slider'
import Subheading from '@/components/Subheading'  
import { promises as fs } from 'fs'  

export default async function Home() {
  let data=[JSON.parse(await fs.readFile('src/data/top_trending.json','utf-8')),JSON.parse(await fs.readFile('src/data/rcm_mov.json','utf-8')),JSON.parse(await fs.readFile('src/data/series.json','utf-8'))];
  return ( 
    <div className='bg-black'>
      <Slider/> 
      {data.map((data,index)=><Moviecontainer key={data.index} container={data.movie} heading={data.heading}/>)}
    </div>
  )
}
