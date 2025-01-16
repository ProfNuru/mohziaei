import { cn } from '@/lib/utils'
import React from 'react'

const FloatingStar = ({color, size="lg"}:{color:"red"|"green"; size?:"lg"|"sm"}) => {
  return (
    <div
    className={cn(
        `line-animation ${
            size==="lg" ? "w-16 h-16" :
            size==="sm" ? "w-8 h-8" : ""
        }`,
        color==="red" ? "bg-red-500/20" :
        color==="green" ? "bg-green-400/20" : ""
    )}
    style={{
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    }}></div>
  )
}

export default FloatingStar
