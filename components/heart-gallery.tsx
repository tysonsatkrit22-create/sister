"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const heartPositions = [
  { row: 0, col: 1 },
  { row: 0, col: 3 },
  { row: 1, col: 0 },
  { row: 1, col: 2 },
  { row: 1, col: 4 },
  { row: 2, col: 0 },
  { row: 2, col: 1 },
  { row: 2, col: 2 },
  { row: 2, col: 3 },
  { row: 2, col: 4 },
  { row: 3, col: 1 },
  { row: 3, col: 2 },
  { row: 3, col: 3 },
  { row: 4, col: 2 },
  { row: 5, col: 2 },
]

export function HeartGallery() {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          heartPositions.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePhotos((prev) => [...prev, index])
            }, index * 80)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-sans text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-5xl text-balance">
          CUITEEEEEEEEEEEEEEEEEEE❤️
        </h2>

        <div className="relative mx-auto" style={{ maxWidth: "800px" }}>
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, rowIndex) =>
              Array.from({ length: 5 }).map((_, colIndex) => {
                const photoIndex = heartPositions.findIndex((pos) => pos.row === rowIndex && pos.col === colIndex)
                const isPhotoPosition = photoIndex !== -1
                const isVisible = visiblePhotos.includes(photoIndex)

                if (!isPhotoPosition) {
                  return <div key={`${rowIndex}-${colIndex}`} className="aspect-square" />
                }

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`group relative aspect-square transform transition-all duration-700 ${
                      isVisible
                        ? "translate-y-0 scale-100 opacity-100 rotate-0"
                        : "translate-y-20 scale-50 opacity-0 -rotate-12"
                    }`}
                    style={{ transitionDelay: `${photoIndex * 50}ms` }}
                  >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-3">
                      <Image
                        src={`/kristu/278421673_376122594417503_8536118808644223676_n.jpeg?height=300&width=300&query=happy sister memory ${photoIndex + 1}`}
                        alt={`Memory ${photoIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 animate-shimmer" />
                      </div>
                    </div>
                  </div>
                )
              }),
            )}
          </div>
        </div>

        <p className="mt-12 text-center font-sans text-sm text-muted-foreground">
          Replace placeholder images with your actual photos of your sister
        </p>
      </div>
    </section>
  )
}
