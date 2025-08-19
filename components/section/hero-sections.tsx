"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

/**
 * Hero Section Component
 *
 * Features:
 * - Dynamic video backgrounds that change on each page load
 * - Elegant typography with Playfair Display font
 * - Interactive buttons with smooth scroll navigation
 * - Responsive design with mobile optimization
 * - Profile photo integration with fallback
 * - Professional spacing and alignment
 */
export function HeroSection() {
  // Video element reference for programmatic control
  const videoRef = useRef<HTMLVideoElement>(null)

  // State for tracking current video (randomly selected on load)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Video playlist - Add your actual video files here
  // Recommended: 1920x1080, 10-30 seconds, optimized for web
  const videoSources = [
    "/videos/hero-1.mp4", // Tech/coding themed video
    "/videos/hero-2.mp4", // Data visualization video
    "/videos/hero-3.mp4", // Abstract tech patterns
    "/videos/hero-4.mp4", // Neural network animations
    "/videos/hero-5.mp4", // Quantitative finance visuals
  ]

  // Randomly select video on component mount (creates dynamic experience)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length)
    setCurrentVideoIndex(randomIndex)
  }, [])

  // Handle video playback when video source changes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Configure video for autoplay (muted required for autoplay policy)
    video.muted = true
    video.loop = true
    video.playsInline = true // Important for mobile devices

    // Attempt to play video (handle autoplay restrictions gracefully)
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log("Video autoplay failed:", error)
        // Fallback: Show poster image if autoplay fails
      }
    }

    playVideo()
  }, [currentVideoIndex])

  // Navigation handlers for smooth scrolling to sections
  const handleExploreWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleReadInsights = () => {
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* VIDEO BACKGROUND SYSTEM */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSources[currentVideoIndex]}
          muted
          loop
          playsInline
          poster="/background7.jpg"
        />
        {/* OVERLAY SYSTEM: Ensures text readability over video */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* CONTENT LAYER: All text and interactive elements */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        {/* PROFILE PHOTO: Circular photo with gradient border and fallback */}
        <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
            <img
              src="/Siddharth.jpg"
              alt="Your Name"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = "none"
                target.parentElement!.innerHTML =
                  '<div class="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 flex items-center justify-center text-cyan-400 text-3xl font-bold">YN</div>'
              }}
            />
          </div>
        </div>

        {/* USER NAME: Replace [YOUR NAME HERE] with actual name */}
        <div className="mb-4">
          <h2
            className="text-5xl md:text-5xl font-light text-cyan-400 mb-2 tracking-wider font-cursive animate-blue-glow"
            style={{ fontFamily: 'Brush Script MT, cursive' }}
          >
            Siddharth Paul
          </h2>
          <style jsx>{`
            @keyframes blue-glow {
              0%, 100% { text-shadow: 0 0 8px #3b82f6, 0 0 16px #06b6d4; }
              50% { text-shadow: 0 0 16px #3b82f6, 0 0 32px #06b6d4; }
            }
            .animate-blue-glow {
              animation: blue-glow 2s infinite;
            }
          `}</style>
        </div>

        {/* MAIN TITLE: Large hero title with gradient text effect */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl leading-tight font-serif">
          Engineering
          <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text drop-shadow-lg">
            Intelligence
          </span>
        </h1>

        {/* SUBTITLE: Professional tagline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light tracking-wide drop-shadow-lg font-sans">
          Building systems that endure, creating intelligence that scales
        </p>

        {/* SKILLS TAGS: Key competencies with glass morphism effect */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-cyan-300 font-mono text-lg">
          <span className="px-1 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            Machine Learning
          </span>
          <span className="text-cyan-400">•</span>
          <span className="px-1 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            Quantitative Finance
          </span>
          <span className="text-cyan-400">•</span>
          <span className="px-1 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            Full-Stack Development
          </span>
          <span className="text-cyan-400">•</span>
          <span className="px-1 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            Systems Architecture
          </span>
        </div>

        {/* CALL-TO-ACTION BUTTONS: Primary navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleExploreWork}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transform"
          >
            Explore Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleReadInsights}
            className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:text-white px-8 py-4 rounded-full transition-all duration-300 bg-black/20 backdrop-blur-sm hover:scale-105 transform"
          >
            Read Insights
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleContact}
            className="border-gray-400 text-gray-200 hover:bg-white/10 hover:text-white px-8 py-4 rounded-full transition-all duration-300 bg-black/20 backdrop-blur-sm hover:scale-105 transform"
          >
            Contact
          </Button>
        </div>

        {/* SCROLL INDICATOR: Animated mouse icon for user guidance */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
