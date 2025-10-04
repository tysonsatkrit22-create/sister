"use client"

import { HeroSection } from "@/components/hero-section"
import { HeartGallery } from "@/components/heart-gallery"
import { MessageSection } from "@/components/message-section"
import { FloatingHearts } from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100">
      <FloatingHearts />
      <HeroSection />
      <HeartGallery />
      <MessageSection />
    </main>
  )
}
