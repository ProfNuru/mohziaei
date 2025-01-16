"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

const MouseTracker = () => {
    const {x, y, linkHovered} = useMousePosition((state)=>state);

  return (
    <>
        {!linkHovered && <div
        className={cn("border border-red-600 flex flex-col items-center justify-center fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full transition-all duration-200 ease-linear pointer-events-none")}
        style={{
            left:`${x}px`,
            top:`${y}px`
        }}></div>}

        <div className={cn("fixed rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-linear pointer-events-none",
            linkHovered ? "w-16 h-16 bg-red-600/50" : "w-2 h-2 bg-red-600"
        )}
        style={{
            left:`${x}px`,
            top:`${y}px`
        }}
        ></div>
    </>
  )
}

export default MouseTracker
