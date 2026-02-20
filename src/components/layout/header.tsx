import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import MobileNavigationToggle from "./mobile-navigation-toggle"

export default function Header() {
  return (
    <>
      <header className="flex w-full flex-col items-center">
        <div className="flex h-12 w-full items-center justify-between border-b border-slate-500/50 bg-slate-950/30 px-2 backdrop-blur-md md:px-6">
          <Link href="/" className="font-medium text-white">
            <span>ICAITech</span> <span className="text-xs">2026</span>
          </Link>

          <div className="flex gap-2">
            <Button size="lg" variant="secondary" asChild>
              <Link href={siteConfig.callForReviewerLink}>
                Call for Reviewers
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={siteConfig.submitlink}>Submit</Link>
            </Button>
          </div>
        </div>

        <div className="flex h-12 w-full items-center justify-end border-b border-white/50 bg-slate-500/10 px-4 md:justify-center">
          <DesktopNavigation />

          <MobileNavigationToggle />
        </div>

        <MobileNavigation />
      </header>
    </>
  )
}
