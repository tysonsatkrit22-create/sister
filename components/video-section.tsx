"use client"

import { useEffect, useRef, useState } from "react"

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
          }`}
        >
          <h2 className="mb-12 text-center font-sans text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-5xl text-balance animate-pulse-glow">
            Your Happy Face
          </h2>

          <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-primary/50 hover:scale-105">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary opacity-75 blur-xl animate-pulse-glow" />

            <div className="relative aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-bounce-in">🎬</div>
                  <p className="font-sans text-xl text-foreground/70">Video montage coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
