import React from 'react'
import { useNavigate } from 'react-router-dom'

const Albumitem = ({image,name,desc,id}) => {
  const navigate=useNavigate();
  // console.log(navigate);
  
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[160px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
<p className='fomt-bold mt-2 mb-1 '>{name}</p>
<p className='text-slate-200 text-sm'>{desc}</p> 
    </div>
  )
}

export default Albumitem