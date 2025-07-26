import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets'


const Display = () => {
  const displayRef=useRef();
  const location =useLocation();
  // console.log(location);
  // console.log(displayRef);
  const isAlbum=location.pathname.includes("album");
  // console.log(isAlbum);
  
  const albumId=isAlbum ? location.pathname.slice(-1):"";
  // console.log(albumId);
  const bgColor= albumsData[Number(albumId)].bgColor;
   useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`;
    }
    else{
      displayRef.current.style.background=`#121212`;
    }
   })
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] lg:ml-0'>
<Routes>
    <Route path='/' element={<Displayhome/>} />
    <Route path='/album/:id' element={<Displayalbum/>} />
</Routes>
    </div>
  )
}

export default Display