import Image from "next/image"

const LandingImageText = () => {
  return (
    <div className='w-full flex-grow flex md:flex-row flex-col-reverse md:gap-6 sm:gap-8 gap-12 md:items-center justify-between px-4'>
        <div className='flex flex-col md:gap-6 gap-4 py-2'>
            <h6 className="text-red-700 font-bold 2xl:text-3xl text-2xl">I&apos;m</h6>
            <h1 className='flex flex-row md:flex-col md:gap-0 gap-2 2xl:text-7xl md:text-5xl text-4xl font-bold'>
                <span>Mohammed</span>
                <span>Ziaei</span>
            </h1>
            <p className="flex flex-col 2xl:text-lg md:text-base text-sm text-gray-500">
                <span>A passionate tutor and trainer in Information and</span>
                <span>Communication Technology based in the Vancouver, Canada.</span>
            </p>
        </div>

        <div className="relative md:flex-grow-0 flex-grow 2xl:w-96 md:w-72 w-full 2xl:h-[420px] md:h-[320px] h-auto rounded-lg flex flex-col items-center justify-center">
            <div className="rotate-box md:block hidden absolute -z-10 rounded-lg w-full h-full bg-orange-300/50 rotate-45"></div>

            <Image
                className="w-full h-full rounded-lg"
                src="/assets/images/mypic.jpg"
                alt="My picture"
                width={100}
                height={160}
            />
        </div>
    </div>
  )
}

export default LandingImageText
