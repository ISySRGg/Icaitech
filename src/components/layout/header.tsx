import Image from "next/image"
import Link from "next/link"

import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center border-b-2 border-teal-100/20">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/unsri.svg"
              alt="icaitech"
              height={80}
              width={80}
              className="h-10 md:h-12 w-fit"
            />
             <Image
              src="/assets/rmh kita logo.png"
              alt="icaitech"
              height={50}
              width={50}
              className="h-10 md:h-12 w-fit"
            />
            <Image
              src="/assets/logo fasilkom.png"
              alt="icaitech"
              height={80}
              width={80}
              className="h-9 md:h-11 w-fit"
            />
            <Image
              src="/assets/ieee_white.png"
              alt="icaitech"
              height={300}
              width={300}
              className="h-8 md:h-10 w-fit"
            />
            <div className="text-white">
              {/* <p className="text-lg font-semibold md:text-xl">ICAITech 2025</p> */}
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
