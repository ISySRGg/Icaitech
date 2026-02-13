"use client"

import useCountdown from "@/lib/hooks/use-countdown"

export default function Countdown() {
  const { countdown } = useCountdown(new Date(2026, 10, 17))

  return (
    <div className="grid w-full max-w-3xl grid-cols-4 gap-6 text-white">
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-md 2xl:px-8 2xl:py-4">
        <p className="text-xl font-bold 2xl:text-2xl">{countdown.days}</p>
        <p className="text-xs tracking-wide">DAYS</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-md 2xl:px-8 2xl:py-4">
        <p className="text-xl font-bold 2xl:text-2xl">{countdown.hours}</p>
        <p className="text-xs tracking-wide">HOURS</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-md 2xl:px-8 2xl:py-4">
        <p className="text-xl font-bold 2xl:text-2xl">{countdown.minutes}</p>
        <p className="text-xs tracking-wide">MINUTES</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-6 py-3 backdrop-blur-md 2xl:px-8 2xl:py-4">
        <p className="text-xl font-bold 2xl:text-2xl">{countdown.seconds}</p>
        <p className="text-xs tracking-wide">SECONDS</p>
      </div>
    </div>
  )
}
