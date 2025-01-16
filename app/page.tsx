"use client";

import Jumbotron from "@/components/jumbotron";
import { ModeToggle } from "@/components/mode-toggle";
import MouseTracker from "@/components/mouse-tracker";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Home() {
    const {setMousePosition, setLinkHovered} = useMousePosition((state)=>state);

    const handleMouseMove = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMousePosition(event.clientX, event.clientY);
    }

  return (
    <div
    onMouseMove={handleMouseMove}
    className="flex flex-col min-h-screen w-full">
        <MouseTracker />
        <Jumbotron />
        <div
        onMouseEnter={()=>setLinkHovered(true)}
        onMouseLeave={()=>setLinkHovered(false)}
        className="fixed right-1 top-1/2 -translate-y-1/2 z-[9990]">
            <ModeToggle />
        </div>
    </div>
  );
}
