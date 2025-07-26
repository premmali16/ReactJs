import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import Songitems from './Songitems'
const Displayhome = () => {
  return (
    <>
       <Navbar/> 
       <div className='mb-4'>
        <h1 className='my-5 font-bold  text-2xl'>Feature Charts</h1>
        <div className='flex overflow-auto'>
{albumsData.map((items,index)=>(<Albumitem key={index} image={items.image} name={items.name}  desc={items.desc} id={items.id}/>))}
        </div>
       </div>
       <div className='mb-4'>
        <h1 className='my-5 font-bold  text-2xl'>Today biggest hits</h1>
        <div className='flex overflow-auto'>
{
    songsData.map((item,index)=>(<Songitems key={index} image={item.image} desc={item.desc} id={item.id} name={item.name} />))
}
        </div>
       </div>
    </>
  )
}

export default Displayhome