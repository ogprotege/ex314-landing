"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, BookOpen, Heart, Calendar } from "lucide-react"
import { useEffect, useRef } from "react"
import { SiteHeader } from "./components/layout/site-header"
import { SiteFooter } from "./components/layout/site-footer"

export default function Home() {
  const box1Ref = useRef<HTMLDivElement>(null)
  const box2Ref = useRef<HTMLDivElement>(null)
  const sectionCardsRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const boxes = [box1Ref.current, box2Ref.current, sectionCardsRef.current, ...cardRefs.current]

      boxes.forEach((box) => {
        if (!box) return

        const rect = box.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

        if (isVisible) {
          box.classList.add("box-visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStarted = () => {
    // This will be replaced with actual functionality later
    alert("Welcome to ex314.ai! This feature will be available soon.")
  }

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault()
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 mb-12 max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-1 bg-purple-900/30 blur-md rounded-full"></div>
            <div className="relative bg-purple-900/20 p-4 rounded-full inline-block">
              <Image src="/chi-ro.png" alt="Chi-Rho Symbol" width={80} height={80} className="h-20 w-20" priority />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 font-cinzel tracking-wider">EX314</h2>

          <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Guided by Exodus 3:14, "I AM WHO I AM," we seek to explore faith through modern technology.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleGetStarted}
              className="bg-accent-purple hover:bg-purple-hover text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <Link
              href="#about"
              onClick={handleLearnMore}
              className="bg-card-bg border border-border-color-light text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-input-bg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <section id="about" className="max-w-4xl mx-auto w-full px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              ref={box1Ref}
              className="bg-card-bg border border-border-color rounded-lg p-6 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-purple text-center">Theological Exploration</h3>
              <p className="text-gray-300 text-sm">
                Engage with an extensive corpus of Catholic theological documents, including Church Fathers, Vatican II,
                Papal Encyclicals, and Biblical commentaries through advanced natural language processing capabilities.
              </p>
            </div>
            <div
              ref={box2Ref}
              className="bg-card-bg border border-border-color rounded-lg p-6 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-purple text-center">Guided by Faith</h3>
              <p className="text-gray-300 text-sm">
                Built to explain the most advanced and challenging theological and philosophical concepts with ease and
                clarity. Guided by Exodus 3:14, "I AM WHO I AM," we seek to explore faith through modern technology.
              </p>
            </div>
          </div>
        </section>

        <section id="explore" className="max-w-4xl mx-auto w-full px-4 py-12">
          <div ref={sectionCardsRef} className="text-center mb-10 box-animation">
            <h2 className="text-2xl md:text-3xl font-cinzel text-accent-purple mb-4">Explore Our Resources</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the wealth of Catholic wisdom through our curated resources, prayers, and liturgical calendar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-6 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-purple text-center">Theological Resources</h3>
              <p className="text-gray-300 text-sm mb-6">
                Explore the rich tradition of Catholic theology through authoritative sources that form the foundation
                of our AI's knowledge.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/resources"
                  className="bg-card-bg border border-border-color-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-input-bg transition-colors flex items-center gap-2"
                >
                  <span>View Resources</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-6 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-purple text-center">Traditional Prayers</h3>
              <p className="text-gray-300 text-sm mb-6">
                The timeless prayers of the Catholic tradition, passed down through generations of faithful, forming the
                foundation of our spiritual communion.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/prayers"
                  className="bg-card-bg border border-border-color-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-input-bg transition-colors flex items-center gap-2"
                >
                  <span>View Prayers</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="bg-card-bg border border-border-color rounded-lg p-6 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-500 transform hover:-translate-y-1 box-animation"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-900/20 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-accent-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-accent-purple text-center">Liturgical Calendar</h3>
              <p className="text-gray-300 text-sm mb-6">
                Follow the rhythm of the Church's liturgical year, celebrating the mysteries of Christ and honoring the
                saints who have gone before us.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/calendar"
                  className="bg-card-bg border border-border-color-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-input-bg transition-colors flex items-center gap-2"
                >
                  <span>View Calendar</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
