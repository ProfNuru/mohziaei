import { cn } from '@/lib/utils'
import React from 'react'

const FloatingLine = ({color, size="lg"}:{color:"purple"|"green"; size?:"lg"|"sm"}) => {
  return (
    <span
    className={cn(`block line-animation ${
        size==="lg" ? "w-20" :
        size==="sm" ? "w-8" : ""
    } rounded-lg ${
        size==="lg" ? "h-1" :
        size==="sm" ? "h-[2px]" : ""
    }`,
        color==="purple" ? "bg-purple-500/20" :
        color==="green" ? "bg-green-500/20" : ""
    )}
    ></span>
  )
}

export default FloatingLine
