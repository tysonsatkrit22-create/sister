"use client"

import { useState } from "react"

export function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative px-4 py-12 bg-gradient-to-t from-pink-100 via-purple-100 to-transparent">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative mx-auto overflow-hidden rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-primary/50 hover:rotate-12"
        >
          <div className="rounded-full bg-white px-8 py-4 transition-all duration-300 group-hover:bg-white/90">
            <div className="flex items-center gap-3">
              <svg
                className={`h-6 w-6 text-primary transition-transform duration-500 ${
                  isHovered ? "-translate-y-2" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span className="font-sans text-lg font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Back to Top
              </span>
            </div>
          </div>
        </button>

        <div className="flex justify-center gap-4">
          {["💕", "💝", "💖", "💗", "💓"].map((heart, index) => (
            <span
              key={index}
              className="inline-block text-3xl animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <p className="font-sans text-lg font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Made with Love
          </p>
          <p className="font-sans text-sm text-foreground/60">For the most amazing sister in the world</p>
          <p className="font-sans text-xs text-foreground/40">{new Date().getFullYear()} • Forever & Always</p>
        </div>

        <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-glow" />
      </div>
    </footer>
  )
}
