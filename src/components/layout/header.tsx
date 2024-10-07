import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import DesktopNavigation from "./desktop-navigation"

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
              className="w-12"
            />
            <div className="text-white">
              <p className="text-xl font-semibold">ICAITech 2025</p>
              {/* <p className="text-xs">
                International Conference on Artificial Intelligence Technology
              </p> */}
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <DesktopNavigation />
          <Button size="lg" variant="secondary" asChild>
            <Link href="/#">Submit</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
