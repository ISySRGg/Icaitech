import { useState } from "react"
import { Countdown } from "@/types"

function useCountdown(date: Date) {
  const defaultCountdown: Countdown = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  }

  const [countdown, setCountdown] = useState<Countdown>(defaultCountdown)

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the count down date
    const distance = date.getTime() - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result in the element with id="demo"
    setCountdown({ seconds, minutes, hours, days })

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      setCountdown(defaultCountdown)
    }
  }, 1000)

  return { countdown }
}

export default useCountdown
