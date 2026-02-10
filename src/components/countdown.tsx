"use client"

import useCountdown from "@/lib/hooks/use-countdown"

export default function Countdown() {
  const { countdown } = useCountdown(new Date(2026, 10, 17))

  return (
    <div className="grid w-full max-w-3xl grid-cols-4 gap-6 text-white">
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-8 py-4 backdrop-blur-md">
        <p className="text-2xl font-bold">{countdown.days}</p>
        <p className="text-xs tracking-wide">DAYS</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-8 py-4 backdrop-blur-md">
        <p className="text-2xl font-bold">{countdown.hours}</p>
        <p className="text-xs tracking-wide">HOURS</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-8 py-4 backdrop-blur-md">
        <p className="text-2xl font-bold">{countdown.minutes}</p>
        <p className="text-xs tracking-wide">MINUTES</p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/20 px-8 py-4 backdrop-blur-md">
        <p className="text-2xl font-bold">{countdown.seconds}</p>
        <p className="text-xs tracking-wide">SECONDS</p>
      </div>
    </div>
  )
}
