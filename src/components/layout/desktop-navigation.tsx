/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn, tw } from "@/lib/utils"

const navigationItemClassName = tw`flex h-10 flex-row text-xs 2xl:text-sm items-center font-medium text-white`

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      <ul className="flex flex-row gap-x-6">
        {siteConfig.mainNav.map((navigation, key) => (
          <li key={key}>
            {navigation.children ? (
              <NavigationDropdown navigation={navigation} />
            ) : (
              <Link
                href={navigation.href}
                className={cn(navigationItemClassName)}
              >
                {navigation.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function NavigationDropdown({ navigation }: { navigation: any }) {
  return (
    <div className="group relative">
      <div>
        <button className={cn(navigationItemClassName, "gap-x-1")}>
          <span>{navigation.label}</span>
          <ChevronDown className="text-[1em] text-white transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {/* <DropdownMenu /> */}
        <div className="invisible absolute top-10 -left-4 z-50 overflow-hidden rounded-xl bg-slate-950/70 shadow-sm backdrop-blur-sm group-hover:visible">
          <ul className="flex w-[18rem] flex-col p-5">
            {navigation.children.map((subnavigation: any, key: number) => (
              <li key={key}>
                <Link
                  href={subnavigation.href}
                  className={cn(
                    "group flex flex-row items-center space-y-1 gap-x-4 rounded border border-transparent px-3 py-4 leading-none no-underline outline-hidden transition-colors select-none hover:border-white/15 hover:bg-white/10 focus:bg-white/10"
                  )}
                >
                  <div className="text-sm leading-none font-medium text-slate-100 group-hover:text-white">
                    {subnavigation.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
