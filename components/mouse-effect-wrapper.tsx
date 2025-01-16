import { useMousePosition } from '@/hooks/useMousePosition';

const MouseEffectWrapper = ({children}:{children:React.ReactNode}) => {
    const {setLinkHovered} = useMousePosition((state)=>state);

  return (
    <div
    onMouseEnter={()=>setLinkHovered(true)}
    onMouseLeave={()=>setLinkHovered(false)}
    className='flex flex-col items-center justify-center'>
        {children}
    </div>
  )
}

export default MouseEffectWrapper
