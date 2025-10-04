"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <div className="text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <h1 className="mb-6 font-sans text-6xl font-bold md:text-8xl lg:text-9xl">
            <span className="inline-block animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              ❤️
            </span>
          </h1>
          <h2 className="mb-4 font-sans text-4xl font-bold text-primary md:text-6xl lg:text-7xl text-balance">
            For My Amazing Sister
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-xl text-foreground/70 md:text-2xl text-pretty leading-relaxed">
            Just be Happy as always
          </p>
        </div>

        <div
          className={`mt-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block animate-bounce">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 animate-pulse-glow rounded-full bg-secondary/20 blur-3xl" />
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse-glow rounded-full bg-accent/15 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  )
}
