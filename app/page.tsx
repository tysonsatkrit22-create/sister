"use client"

import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { HeartGallery } from "@/components/heart-gallery"
import { QuotesSection } from "@/components/quotes-section"
import { MessageSection } from "@/components/message-section"
import { TimelineSection } from "@/components/timeline-section"
import { Footer } from "@/components/footer"
import { FloatingHearts } from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100">
      <FloatingHearts />
      <HeroSection />
      <VideoSection />
      <HeartGallery />
      <QuotesSection />
      <TimelineSection />
      <MessageSection />
      <Footer />
    </main>
  )
}
