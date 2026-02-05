import Image from "next/image"
import Link from "next/link"

import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center border-b-2 border-teal-100/20">
      <div className="flex items-center w-full justify-between px-4 md:px-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/dikbud.png"
              alt="icaitech"
              height={100}
              width={100}
              className="h-4 md:h-7 w-fit"
            />
            <Image
              src="/assets/"
              alt="icaitech"
              height={200}
              width={200}
              className="h-4 md:h-8 w-fit"
            />
            <Image
              src="/assets/berdampak.png"
              alt="icaitech"
              height={200}
              width={200}
              className="h-4 md:h-6 w-fit"
            />
             <Image
              src="/assets/rmh.png"
              alt="icaitech"
              height={150}
              width={150}
              className="h-4 md:h-6 w-fit"
            />
             <Image
              src="/assets/action.png"
              alt="icaitech"
              height={150}
              width={150}
              className="h-4 md:h-6 w-fit"
            />
            <Image
              src="/assets/logo fasilkom.png"
              alt="icaitech"
              height={80}
              width={80}
              className="h-4 md:h-6 w-fit"
            />
            <Image
              src="/assets/ieee_white.png"
              alt="icaitech"
              height={150}
              width={150}
              className="h-4 md:h-6 w-fit"
            />
            <div className="text-white">
              {/* <p className="text-lg font-semibold md:text-xl"></p> */}
              {/* <p className="text-xs">
                International Conference on Artificial Intelligence Technology
              </p> */}
            </div>
          </Link>
        </div>
        <DesktopNavigation />
        <MobileNavigationToggle />
      </div>
      <MobileNavigation />
    </header>
  )
}
