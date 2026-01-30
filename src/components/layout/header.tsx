import Image from "next/image"
import Link from "next/link"

import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

const logos = [
  "/assets/dikbud.png",
  "/assets/berdampak.png",
  "/assets/rmh.png",
  "/assets/action.png",
  "/assets/logo fasilkom.png",
  "/assets/ieee_white.png",
]

export default function Header() {
  return (
    <>
      {/* ================= HEADER (MENU SAJA) ================= */}
      <header className="fixed top-0 z-50 w-full h-20 border-b-2 border-teal-100/20 bg-black/30 backdrop-blur">
        <div className="flex h-full items-center justify-between px-4 md:px-10">
          <Link href="/" className="text-white font-bold text-xl">
            ICAITech
          </Link>

          <DesktopNavigation />
          <MobileNavigationToggle />
        </div>

        <MobileNavigation />
      </header>

      {/* ================= LOGO BERJALAN (FIX LOOP) ================= */}
      <div className="mt-20 overflow-hidden bg-black/40">
        <div className="relative flex w-full">
          
          {/* TRACK 1 */}
          <div className="flex min-w-full items-center gap-8 py-3 animate-marquee">
            {logos.map((src, i) => (
              <Image
                key={`t1-${i}`}
                src={src}
                alt="logo"
                width={140}
                height={60}
                className="h-6 md:h-8 w-auto object-contain"
              />
            ))}
          </div>

          {/* TRACK 2 (DUPLIKAT) */}
          <div className="flex min-w-full items-center gap-8 py-3 animate-marquee">
            {logos.map((src, i) => (
              <Image
                key={`t2-${i}`}
                src={src}
                alt="logo"
                width={140}
                height={60}
                className="h-6 md:h-8 w-auto object-contain"
              />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
