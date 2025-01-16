import Link from 'next/link'
import React from 'react'

const LogoText = () => {
  return (
    <Link href="/" className='flex items-end'>
        <span className='2xl:text-6xl text-5xl text-red-700 font-bold'>M</span>
        <span className='2xl:text-3xl text-2xl text-purple-800 font-extrabold -translate-x-[5px] 2xl:-translate-y-[2px] -translate-y-0'>O</span>
    </Link>
  )
}

export default LogoText
