"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import PageHeader from "@/components/page-header"

const images = [
  "DSC02885.webp",
  "DSC02900.webp",
  "DSC02913.webp",
  "DSC02949.webp",
  "DSC02967.webp",
  "DSC02976.webp",
  "DSC03001.webp",
  "DSC03047.webp",
  "DSC03065.webp",
  "DSC03066.webp",
  "DSC03076.webp",
  "DSC03080.webp",
  "DSC03089.webp",
  "DSC03094.webp",
  "DSC03110.webp",
  "DSC03115.webp",
  "DSC08680.webp",
  "DSC08707.webp",
  "DSC08719.webp",
  "DSC08781.webp",
  "DSC08819.webp",
  "DSC08832.webp",
  "DSC08834.webp",
  "DSC08841.webp",
  "IMG_4583.webp",
  "IMG_4592.webp",
  "IMG_4599.webp",
  "IMG_4601.webp",
  "IMG_4603.webp",
  "IMG_4604.webp",
  "IMG_4608.webp",
  "IMG_4612.webp",
  "IMG_4664.webp",
  "IMG_4690.webp",
  "IMG_4863.webp",
  "IMG_4866.webp",
  "IMG_4879.webp",
  "IMG_4881.webp",
  "IMG_4882.webp",
  "IMG_4886.webp",
  "IMG_4894.webp",
  "IMG_4912.webp",
  "IMG_4913.webp",
  "IMG_4916.webp",
  "IMG_4918.webp",
  "IMG_4919a.webp",
  "IMG_4923.webp",
  "IMG_4928.webp",
  "IMG_4933.webp",
  "IMG_4936.webp",
  "IMG_4942.webp",
  "IMG_4956.webp",
  "IMG_4973.webp",
  "IMG_4974.webp",
  "IMG_4983.webp",
  "IMG_5103.webp",
  "IMG_5160.webp",
  "IMG_5163.webp",
  "IMG_5169.webp",
  "IMG_5182.webp",
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
