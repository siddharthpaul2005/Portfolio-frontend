"use client"

import { useEffect, useRef } from "react"
import { HeroSection } from "@/components/section/hero-sections"
import { SkillsUniverse } from "@/components/section/skills-universe"
import { ProjectsGrid } from "@/components/section/projects-grid"
import { ExperienceTimeline } from "@/components/section/experience-timeline"
import { BlogSection } from "@/components/section/blog-section"
import { AboutSection } from "@/components/section/about-section"
import { ContactSection } from "@/components/section/contact-section"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Navigation } from "@/components/ui/navigation"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize smooth scrolling and section observers
    const sections = document.querySelectorAll("section[data-section]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section")
            // Update cursor style based on section
            document.body.setAttribute("data-section", sectionName || "")
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" data-section="hero" className="min-h-screen">
        <HeroSection />
      </section>

      {/* Skills Universe */}
      <section id="skills" data-section="skills" className="min-h-screen">
        <SkillsUniverse />
      </section>

      {/* Projects Grid */}
      <section id="projects" data-section="projects" className="min-h-screen">
        <ProjectsGrid />
      </section>

      {/* Experience Timeline */}
      <section id="experience" data-section="experience" className="min-h-screen">
        <ExperienceTimeline />
      </section>

      {/* Blog Section */}
      <section id="blog" data-section="blog" className="min-h-screen">
        <BlogSection />
      </section>

      {/* About Section */}
      <section id="about" data-section="about" className="min-h-screen">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact" data-section="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </div>
  )
}
