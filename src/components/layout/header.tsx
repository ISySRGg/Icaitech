import Image from "next/image"
import Link from "next/link"
import "@/styles/header.css"

import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

const logos = [
  "/assets/dikbud.png",
  "/assets/wcu-putih-01.png",
  "/assets/berdampak.png",
  "/assets/rmh.png",
  "/assets/action.png",
  "/assets/logo fasilkom.png",
  "/assets/ieee_white.png",
]

export default function Header() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">
          {/* BRAND */}
          <Link href="/" className="brand">
            ICAITech
          </Link>

          {/* DESKTOP NAV */}
          <DesktopNavigation />

          {/* MOBILE TOGGLE */}
          <MobileNavigationToggle />
        </div>

        {/* MOBILE NAV (di luar inner biar full width) */}
        <MobileNavigation />
      </header>

      {/* ================= LOGO MARQUEE ================= */}
      <div className="logo-bar">
        <div className="marquee">
          <div className="marquee-track">
            {[...logos, ...logos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="logo"
                width={140}
                height={60}
                className="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
