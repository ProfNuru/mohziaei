import FloatingBackgroundElements from "./floating-background-elements"
import HeadSection from "./head-section"
import LandingImageText from "./landing-image-text"
import MaxWidthWrapper from "./max-width-wrapper"

const Jumbotron = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center pt-4 overflow-x-hidden">
        <div
        className="absolute left-0 top-0 bottom-0 w-[75%] bg-[#F1FAFF] dark:bg-[#34353A]"
        style={{
            clipPath:'polygon(0 1%, 100% 0, 76% 89%, 0% 100%)',
        }}>
        </div>

        <FloatingBackgroundElements />

        <MaxWidthWrapper>
            <div className="w-full h-full flex flex-col md:justify-between">
                <HeadSection />
                <LandingImageText />
                {/* <SectionLinks /> */}
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Jumbotron
