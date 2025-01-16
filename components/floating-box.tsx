import { cn } from '@/lib/utils'
import React from 'react'

const FloatingBox = ({color}:{color:"red"|"green"}) => {
  return (
    <div className={cn(
        "line-animation w-8 h-8 border-4",
        color==="red" ? "border-red-500/20" :
        color==="green" ? "border-green-500/20" : ""
    )}></div>
  )
}

export default FloatingBox
