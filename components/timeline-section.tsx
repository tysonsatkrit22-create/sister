"use client"

import { useEffect, useRef, useState } from "react"

const timelineEvents = [
  {
    year: "Fav Colour & Flower",
    title: "Lavender",
    emoji: "💝",
  },
  {
    year: "Fav food",
    title: "Jhol Momo and Biryani",
    emoji: "💝",
  },
  {
    year: "Fav Destination",
    title: "Switzerland",
    emoji: "💝",
  },
  {
    year: "Fav Singer",
    title: "Weeknd from hollywood & kk from bollywood",
    emoji: "💝",
  },
  {
    year: "Fav Song",
    title: "Weeknd's As You Are",
    emoji: "💝",
  },
  {
    year: "Fav Series",
    title: "Vampire Diaries & Gossip Girls",
    emoji: "💝",
  },
   {
    year: "Fav Fruit",
    title: "Watermelon",
    emoji: "💝",
  },
   {
    year: "Fav movie",
    title: "How to lose a guy in 10 days(not sure)",
    emoji: "💝",
  },
   {
    year: "Fav concert which you want to go",
    title: "Weeknd,cigarette after sex,chase Atlantic,the neighborhood,arctic monkeys",
    emoji: "💝",
  },
]

export function TimelineSection() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          timelineEvents.forEach((_, index) => {
            setTimeout(() => {
              setVisibleEvents((prev) => [...prev, index])
            }, index * 300)
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
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center font-sans text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-5xl text-balance animate-pulse-glow">
          Favourite Things
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isVisible = visibleEvents.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`absolute left-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary via-accent to-secondary shadow-lg transition-all duration-700 md:left-1/2 md:-translate-x-1/2 ${
                      isVisible ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-180"
                    }`}
                  >
                    <span className="text-3xl animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      {event.emoji}
                    </span>
                  </div>

                  <div
                    className={`group ml-24 flex-1 transform transition-all duration-700 md:ml-0 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isLeft
                          ? "-translate-x-20 opacity-0"
                          : "translate-x-20 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-pink-50 to-purple-50 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-75" />

                      <div className="relative">
                        <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1">
                          <span className="font-sans text-sm font-bold text-white">{event.year}</span>
                        </div>
                        <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">{event.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
