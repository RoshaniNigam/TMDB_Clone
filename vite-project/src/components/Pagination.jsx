import React from 'react'

function Pagination({nextPageFn , previosuPageFn , pageNumber}) {
  return (
      <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center cursor-pointer'>
        <div onClick={previosuPageFn} className='px-8'><i class="fa-solid fa-angle-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={nextPageFn} className='px-8'><i class="fa-solid fa-angle-right"></i></div>
      </div>
  )
}

export default Pagination