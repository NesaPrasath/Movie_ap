import Menuelement from './Menuelement'
import Logo from './Logo'


export default function Menulist() {
  const element=[
    {
      heading:'Movies',
      topics:[{name:'Action',
      path:'/movies/action'},{name:'Comedy',
      path:'/movies/comedy'},{name:'Adventure',
      path:'/movies/adventure'},{name:'Horror',
      path:'/movies/horror'}]
    },
    {
      heading:'Series',
      topics:[{name:'Action',
    path:'/series/action'},{name:'Comedy',
    path:'/series/comedy'},{name:'Adventure',
    path:'/series/adventure'},{name:'Horror',
    path:'/series/horror'}]
    }
    ,
    {
      heading:'Community',
      topics:[{name:'Help',
      path:'/'},{name:'Terms and Condition',
      path:'/'}]
    }
  ]
  return (
    <div className='p-4 px-12 z-20'>
        <div className='grid grid-cols-2'>
          {element.map(data=>{
            return (<Menuelement key={data.heading} heading={data.heading} topics={data.topics}/>)})}
          </div> 
    </div>
  )
}
