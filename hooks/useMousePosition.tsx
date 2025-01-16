import { create } from 'zustand'

interface MousePositionState {
  x: number;
  y: number;
  linkHovered:boolean;
  setMousePosition: (x: number, y:number) => void;
  setLinkHovered:(value:boolean) => void;
}

export const useMousePosition = create<MousePositionState>()((set) => ({
  x: -100,
  y: 0,
  linkHovered:false,
  setMousePosition: (x:number, y:number) => set(() => ({
        x,
        y,
    })),
  setLinkHovered:(value:boolean) => set(()=>({
    linkHovered:value
  })),
}))
