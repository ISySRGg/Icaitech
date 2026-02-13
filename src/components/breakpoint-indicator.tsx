"use client"

export default function DevBreakpointIndicator() {
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed right-4 bottom-4 z-[9999] rounded-lg bg-black px-3 py-1 text-sm font-semibold text-white shadow-lg">
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}
