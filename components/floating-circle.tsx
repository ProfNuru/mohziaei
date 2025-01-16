import { cn } from '@/lib/utils'

const FloatingCircle = ({color}:{color:"purple"|"green"}) => {
  return (
    <span className={cn('block w-4 h-4 rounded-full border-[3px]',
        color==="purple" ? "border-purple-500/20 dark:border-purple-200/20" :
        color==="green" ? "border-green-500/20 dark:border-green-200/20" : ""
    )}></span>
  )
}

export default FloatingCircle
