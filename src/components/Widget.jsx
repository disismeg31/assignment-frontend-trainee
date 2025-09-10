import React from 'react';
import { BsGraphUp } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Widget({widget}) {
  return (
    <div className='flex flex-col bg-[#fff] p-3 w-95 h-45 m-2 rounded-xl'>
      <div className='flex justify-between'>
      <p className='flex text-start font-semibold text-black text-sm '>{widget.name}</p>
      <span className='flex text-end hover:cursor-pointer'><RxCross2 className='text-gray-400' size={19} /></span>
      </div>
      <div className='flex flex-1 flex-col justify-center items-center'>
      <span><BsGraphUp className='text-gray-300' size={28} /></span>
      <p className='!text-black !text-sm font-normal'>No Graph Data Available</p>
      </div>
    </div>
  )
}

export default Widget