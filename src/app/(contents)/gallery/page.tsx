"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import PageHeader from "@/components/page-header"

const images = [
  "IMG (1).webp",
  "IMG (2).webp",
  "IMG (3).webp",
  "IMG (4).webp",
  "IMG (5).webp",
  "IMG (6).webp",
  "IMG (7).webp",
  "IMG (8).webp",
  "IMG (9).webp",
  "IMG (10).webp",
  "IMG (11).webp",
  "IMG (12).webp",
  "IMG (13).webp",
  "IMG (14).webp",
  "IMG (15).webp",
  "IMG (16).webp",
  "IMG (17).webp",
  "IMG (18).webp",
  "IMG (19).webp",
  "IMG (20).webp",
  "IMG (21).webp",
  "IMG (22).webp",
  "IMG (23).webp",
  "IMG (24).webp",
  "IMG (25).webp",
  "IMG (26).webp",
  "IMG (27).webp",
  "IMG (28).webp",
  "IMG (29).webp",
  "IMG (30).webp",
  "IMG (31).webp",
  "IMG (32).webp",
  "IMG (33).webp",
  "IMG (34).webp",
  "IMG (35).webp",
  "IMG (36).webp",
  "IMG (37).webp",
  "IMG (38).webp",
  "IMG (39).webp",
  "IMG (40).webp",
  "IMG (41).webp",
  "IMG (42).webp",
  "IMG (43).webp",
  "IMG (44).webp",
  "IMG (45).webp",
  "IMG (46).webp",
  "IMG (47).webp",
  "IMG (48).webp",
  "IMG (49).webp",
  "IMG (50).webp",
  "IMG (51).webp",
  "IMG (52).webp",
  "IMG (53).webp",
  "IMG (54).webp",
  "IMG (55).webp",
  "IMG (56).webp",
  "IMG (57).webp",
  "IMG (58).webp",
  "IMG (59).webp",
  "IMG (60).webp",
  "IMG (61).webp",
  "IMG (62).webp",
]

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageLoading, setImageLoading] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setImageLoading(true)
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setImageLoading(true)
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null)
    } else if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    }
  }

  return (
    <>
      <PageHeader title="Gallery" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-muted relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={`/assets/gallery/${image}`}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative h-[90vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
              </div>
            )}
            <Image
              src={`/assets/gallery/${images[selectedImage]}`}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
              onLoadingComplete={() => setImageLoading(false)}
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
