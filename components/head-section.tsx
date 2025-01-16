import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import MouseEffectWrapper from "./mouse-effect-wrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import LogoText from "./logo-text";

const HeadSection = () => {
  return (
    <nav className='relative z-[9000] w-full flex items-center justify-between pl-3 pr-4 md:pb-0 pb-6'>
        <MouseEffectWrapper>
            <LogoText />
        </MouseEffectWrapper>

        <div className='flex items-center gap-3'>
            <MouseEffectWrapper>
                <Link href="https://facebook.com" target="_blank" className="md:block hidden 2xl:text-base text-sm text-blue-900 dark:text-white">
                    <FaFacebookF />
                </Link>
            </MouseEffectWrapper>

            <MouseEffectWrapper>
                <Link href="https://x.com" target="_blank" className="md:block hidden 2xl:text-base text-sm text-black dark:text-white">
                    <BsTwitterX size={16} />
                </Link>
            </MouseEffectWrapper>

            <MouseEffectWrapper>
                <Link href="https://instagram.com" target="_blank" className="md:block hidden 2xl:text-base text-sm text-blue-900 dark:text-white">
                    <BsInstagram size={16} />
                </Link>
            </MouseEffectWrapper>

            <MouseEffectWrapper>
                <Button
                className="2xl:text-base text-sm 2xl:py-6 2xl:px-6"
                variant="destructive" asChild>
                    <Link href="/assets/images/mycv.pdf" target="_blank">Download CV</Link>
                </Button>
            </MouseEffectWrapper>
        </div>
    </nav>
  )
}

export default HeadSection
