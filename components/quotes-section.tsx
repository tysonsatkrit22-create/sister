"use client"

import { useEffect, useRef, useState } from "react"

const quotes = [
  {
    text: "You’re not just my sister, you’re the one person I know I can always count on.",
    emoji: "💕",
  },
  {
    text: "You make every day a little brighter, just by being in it.",
    emoji: "🌟",
  },
  {
    text: "Some people have best friends but I’m lucky mine came as a sister.",
    emoji: "✨",
  },
  {
    text: "I don’t say it enough, but I’m so lucky to have you as my sister.",
    emoji: "🙏",
  },
]

export function QuotesSection() {
  const [visibleQuotes, setVisibleQuotes] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          quotes.forEach((_, index) => {
            setTimeout(() => {
              setVisibleQuotes((prev) => [...prev, index])
            }, index * 200)
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
        <h2 className="mb-16 text-center font-sans text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-5xl text-balance animate-pulse-glow">
          Words From The Heart
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((quote, index) => {
            const isVisible = visibleQuotes.includes(index)
            return (
              <div
                key={index}
                className={`group transform transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100 rotate-0"
                    : index % 2 === 0
                      ? "-translate-x-20 opacity-0 -rotate-6"
                      : "translate-x-20 opacity-0 rotate-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-pink-50 to-purple-50 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-75" />

                  <div className="relative">
                    <div className="mb-4 text-5xl animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      {quote.emoji}
                    </div>
                    <p className="font-sans text-xl font-semibold text-foreground/80 leading-relaxed text-pretty">
                      "{quote.text}"
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    "
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
