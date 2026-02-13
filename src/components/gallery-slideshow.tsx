"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export default function GallerySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [isFadingIn, setIsFadingIn] = useState(true)

  // Generate all 83 image filenames
  const allImages = Array.from({ length: 62 }, (_, i) => `IMG (${i + 1}).webp`)

  // Split images into chunks of 8
  const imagesPerSlide = 8
  const slides = []
  for (let i = 0; i < allImages.length; i += imagesPerSlide) {
    slides.push(allImages.slice(i, i + imagesPerSlide))
  }

  const handleSlideChange = (newSlide: number) => {
    if (newSlide === currentSlide) return
    setIsFading(true)

    setTimeout(() => {
      setCurrentSlide(newSlide)
      setIsFading(false)
      setIsFadingIn(false)
      // Trigger fade-in
      requestAnimationFrame(() => {
        setIsFadingIn(true)
      })
    }, 500)
  }

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [currentSlide, slides.length])

  return (
    <div className="mt-12">
      {/* Image Grid */}
      <div
        className={cn(
          "grid grid-cols-2 gap-4 transition-opacity duration-500 md:grid-cols-4",
          isFading ? "opacity-0" : isFadingIn ? "opacity-100" : "opacity-0"
        )}
      >
        {slides[currentSlide]?.map((image, index) => (
          <div
            key={index}
            className="bg-muted relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={`/assets/gallery/${image}`}
              alt={`Gallery image ${currentSlide * imagesPerSlide + index + 1}`}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 35vw, 18vw"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide
                ? "w-8 bg-sky-500"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
