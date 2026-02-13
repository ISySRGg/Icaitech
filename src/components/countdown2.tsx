"use client"

import useCountdown from "@/lib/hooks/use-countdown"

export default function Countdown2() {
  const { countdown } = useCountdown(new Date(2026, 10, 17))

  return (
    <div className="grid grid-cols-4 gap-2 font-mono text-white">
      <div className="flex items-baseline gap-1">
        <p className="text-xl font-bold md:text-4xl">
          {String(countdown.days).padStart(2, "0")}
        </p>
        <p className="text-xs tracking-wide md:text-base">DAYS</p>
      </div>

      <div className="flex items-baseline gap-1">
        <p className="text-xl font-bold md:text-4xl">
          {String(countdown.hours).padStart(2, "0")}
        </p>
        <p className="text-xs tracking-wide md:text-base">HOURS</p>
      </div>

      <div className="flex items-baseline gap-1">
        <p className="text-xl font-bold md:text-4xl">
          {String(countdown.minutes).padStart(2, "0")}
        </p>
        <p className="text-xs tracking-wide md:text-base">MINUTES</p>
      </div>

      <div className="flex items-baseline gap-1">
        <p className="text-xl font-bold md:text-4xl">
          {String(countdown.seconds).padStart(2, "0")}
        </p>
        <p className="text-xs tracking-wide md:text-base">SECONDS</p>
      </div>
    </div>
  )
}
