import Image from "next/image"
import Link from "next/link"

import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center border-b-2 border-white/20">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="icaitech"
              height={80}
              width={80}
              className="w-10 md:w-12"
            />
            <div className="text-white">
              <p className="text-lg font-semibold md:text-xl">ICAITech 2025</p>
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
