"use client"

import useCountdown from "@/lib/hooks/use-countdown"

export default function Countdown() {
  const { countdown } = useCountdown(new Date(2025, 10, 20))

  return (
    <div className="grid w-full max-w-lg grid-cols-4 justify-items-stretch gap-2 text-white md:gap-10">
      <div className="flex flex-col items-center rounded border border-black/20 bg-black/30 p-4 backdrop-blur-sm">
        <p className="text-2xl font-bold md:text-4xl">{countdown.days}</p>
        <p className="text-xs md:text-sm">Days</p>
      </div>
      <div className="flex flex-col items-center rounded border border-black/20 bg-black/30 p-4 backdrop-blur-sm">
        <p className="text-2xl font-bold md:text-4xl">{countdown.hours}</p>
        <p className="text-xs md:text-sm">Hours</p>
      </div>
      <div className="flex flex-col items-center rounded border border-black/20 bg-black/30 p-4 backdrop-blur-sm">
        <p className="text-2xl font-bold md:text-4xl">{countdown.minutes}</p>
        <p className="text-xs md:text-sm">Minutes</p>
      </div>
      <div className="flex flex-col items-center rounded border border-black/20 bg-black/30 p-4 backdrop-blur-sm">
        <p className="text-2xl font-bold md:text-4xl">{countdown.seconds}</p>
        <p className="text-xs md:text-sm">Seconds</p>
      </div>
    </div>
  )
}
