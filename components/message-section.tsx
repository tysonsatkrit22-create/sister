"use client"

import { useState } from "react"

export function MessageSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {!isOpen ? (
          <div className="text-center">
            <button
              onClick={() => setIsOpen(true)}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-primary/50"
            >
              <div className="rounded-full bg-white px-12 py-6 transition-colors duration-300 group-hover:bg-white/90">
                <div className="flex items-center gap-3">
                  <span className="text-4xl animate-bounce-in">💌</span>
                  <span className="font-sans text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Click to Read My Message
                  </span>
                  <span className="text-4xl animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                    💌
                  </span>
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div className="animate-bounce-in">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-pink-50 to-purple-50 p-8 shadow-2xl backdrop-blur-sm md:p-12 border-4 border-transparent bg-clip-padding">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary opacity-75 blur-xl animate-pulse-glow" />

              <div className="relative">
                <div className="mb-8 text-center">
                  <span className="inline-block animate-bounce-in text-6xl">💝</span>
                </div>

                <h2 className="mb-6 text-center font-sans text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-4xl text-balance">
                  You Mean The World To Me
                </h2>

                <div className="space-y-6 font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
                  <p className="text-pretty">
                    
                    It’s funny how life brings people together in the most unexpected ways. 
                    We may have started out as strangers, but somewhere along the way, you became like a sister to me. 
                    I’m really grateful for the bond we’ve built the trust, the laughter, the support all of it means a lot.
                  </p>

                  <p className="text-pretty">
                    Just wanted you to know that no matter where life takes us, you’ve got someone in your corner now.
                   
                  </p>

                  <p className="text-pretty">
                    You’ve shown up with kindness, stayed real when it mattered, and made space for me in your life without ever being asked. 
                    That’s rare.
                     And I don’t take it lightly.
                  </p>

                  <p className="text-center font-bold text-2xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-pretty">
                    I love you more than words can express! ❤️ . 
                    So, just in case I haven’t said it: I’m really grateful for you. 
                    For your energy, your honesty, your light. Life definitely had a plan when it brought us together.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 shadow-lg">
                    <div className="rounded-full bg-white px-8 py-3">
                      <p className="font-sans text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Forever Your's Dumbass
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
