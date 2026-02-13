"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, X } from "lucide-react"
import { useRecoilState } from "recoil"

import { siteConfig } from "@/config/site"
import { mobileNavigationState } from "@/lib/recoil/mobileNavigationAtom"
import { cn } from "@/lib/utils"

import { Button } from "../ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"

export default function MobileNavigation() {
  const [mobileNavigation, setMobileNavigation] = useRecoilState(
    mobileNavigationState
  )

  const pathname = usePathname()

  function handleCloseMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: false,
      }
    })
  }

  useEffect(() => {
    handleCloseMobileNavigation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!mobileNavigation.opened) {
    return undefined
  }

  return (
    <div
      className={cn(
        "no-doc-scroll fixed inset-0 z-50 flex h-dvh w-full flex-col bg-sky-950/80 backdrop-blur-sm md:hidden"
      )}
    >
      <div className="container flex flex-col gap-y-8 pt-6 text-xl text-white">
        <button
          onClick={handleCloseMobileNavigation}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none"
          aria-label="Close navigation"
        >
          <X size={24} />
        </button>
        {siteConfig.mainNav.map((navigation, key) => (
          <div key={key} className="w-full">
            {navigation.children ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button className="flex w-full flex-row items-center justify-between text-slate-100 [&[data-state=open]>svg]:-rotate-180">
                    <span>{navigation.label}</span>
                    <ChevronDown
                      size="1em"
                      className="transition-transform duration-200"
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-6 ml-1 flex flex-col gap-y-6 border-l-2 border-slate-100/40 pl-4">
                    {navigation.children.map(
                      (subnavigation, subkey: number) => (
                        <div key={subkey}>
                          <Link
                            onClick={handleCloseMobileNavigation}
                            href={subnavigation.href}
                            className="block focus:underline"
                          >
                            {subnavigation.label}
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                onClick={handleCloseMobileNavigation}
                href={navigation.href}
                className="block focus:underline"
              >
                {navigation.label}
              </Link>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          {/* <Button size="lg" variant="secondary" asChild>
            <Link href={siteConfig.callForReviewerLink}>Call for Reviewers</Link>
          </Button> */}
          <Button size="lg" variant="secondary" asChild>
            <Link href={siteConfig.submitlink}>Submit</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
