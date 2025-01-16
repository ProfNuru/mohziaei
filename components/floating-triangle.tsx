import { cn } from '@/lib/utils'
import { LuTriangle } from "react-icons/lu";
import React from 'react'

const FloatingTriangle = ({alternate=false}:{alternate?:boolean}) => {
  return (
    <span className={cn(alternate ? "text-gray-500/20" : "text-purple-500/20")}>
        <LuTriangle className='line-animation' size={32}/>
    </span>
  )
}

export default FloatingTriangle
