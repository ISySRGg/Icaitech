"use client"

import { useRecoilState } from "recoil"

import { mobileNavigationState } from "@/lib/recoil/mobileNavigationAtom"

import MenuButton from "../menu-button"

export default function MobileNavigationToggle() {
  const [mobileNavigation, setMobileNavigation] = useRecoilState(
    mobileNavigationState
  )

  function handleToggleMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: !mobileNavigation.opened,
      }
    })
  }

  return (
    <MenuButton
      onClick={handleToggleMobileNavigation}
      opened={mobileNavigation.opened}
      className="md:hidden"
    />
  )
}
