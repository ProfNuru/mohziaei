import React from 'react'

const FloatingDotsGrid = () => {
  return (
    <div className='move-animation w-14 h-20 grid grid-cols-4 gap-2'>
        {Array(20).fill(0).map((_,idx)=><span key={idx}
        className='block w-2 h-2 rounded-full bg-purple-500/20 dark:bg-purple-200/20'>
        </span>)}
    </div>
  )
}

export default FloatingDotsGrid
