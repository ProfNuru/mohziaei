const MaxWidthWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="relative z-[9000] flex flex-col items-center w-full h-full 2xl:max-w-6xl max-w-5xl mx-auto">
        {children}
    </div>
  )
}

export default MaxWidthWrapper
