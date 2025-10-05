"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const sisterName = "Kristina" 

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    const nameTimer = setTimeout(() => setNameVisible(true), 800)
    return () => {
      clearTimeout(timer)
      clearTimeout(nameTimer)
    }
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

          <div className="mb-8">
            <h1 className="font-sans text-5xl font-extrabold md:text-7xl lg:text-8xl">
              {sisterName.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block animate-letter-pop bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-125 hover:rotate-12 ${
                    nameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.05}s`,
                    textShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
