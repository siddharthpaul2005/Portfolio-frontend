"use client"

import { useState, useEffect } from "react"
import { Menu, X, ExternalLink, Home, User, Briefcase, BookOpen, MessageCircle } from "lucide-react"

/**
 * Smart Navigation Component
 *
 * Features:
 * - Hides on scroll down, shows on scroll up (like modern websites)
 * - Active section highlighting based on scroll position
 * - Smooth scroll navigation to sections
 * - Mobile-responsive hamburger menu
 * - Glass morphism background effect
 * - User identity integration with profile photo
 * - External link to extracurriculars page
 *
 * Behavior:
 * - Transparent when at top, blurred background when scrolled
 * - Navigation dots on desktop for quick section jumping
 * - Mobile menu with full-screen overlay
 */
export function Navigation() {
  // Navigation visibility state (controlled by scroll direction)
  const [isVisible, setIsVisible] = useState(true)

  // Track last scroll position for direction detection
  const [lastScrollY, setLastScrollY] = useState(0)

  // Mobile menu toggle state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Currently active section (highlighted in navigation)
  const [activeSection, setActiveSection] = useState("hero")

  // Background blur state (activated when scrolled past hero)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll event handler for smart navigation behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Hide when scrolling down past threshold
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true) // Show when scrolling up or near top
      }

      // Background blur effect when scrolled
      setIsScrolled(currentScrollY > 50)

      // Active section detection using intersection logic
      const sections = ["hero", "skills", "projects", "experience", "blog", "about", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is active if it's in the viewport center area
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }

      setLastScrollY(currentScrollY)
    }

    // Passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset to account for fixed navigation height
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  // Open extracurriculars page in new tab
  const openExtracurriculars = () => {
    window.open("/extracurriculars", "_blank")
  }

  // Navigation items configuration with icons
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "skills", label: "Skills", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: BookOpen },
    { id: "blog", label: "Thoughts", icon: BookOpen },
    { id: "about", label: "About", icon: User },
  ]

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Navigation background with conditional styling */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand Section with Name Acronym and Phoenix */}
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
                {/* NAME ACRONYM: Short acronym display */}
                <div className="text-xl font-bold font-serif text-white group-hover:text-cyan-400 transition-colors duration-300">
                  YN
                </div>

                {/* PHOENIX LOGO: Black and red colored phoenix with hover animations */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  >
                    {/* Phoenix body in black */}
                    <path
                      d="M50 20 C45 25, 40 35, 45 45 C50 50, 55 45, 60 35 C65 25, 60 20, 50 20 Z"
                      fill="#000000"
                      className="group-hover:fill-gray-800 transition-colors duration-300"
                    />
                    {/* Phoenix wings in red */}
                    <path
                      d="M30 40 C25 35, 20 45, 25 55 C35 50, 45 45, 45 45 C40 40, 35 35, 30 40 Z"
                      fill="#DC2626"
                      className="group-hover:fill-red-500 transition-colors duration-300"
                    />
                    <path
                      d="M70 40 C75 35, 80 45, 75 55 C65 50, 55 45, 55 45 C60 40, 65 35, 70 40 Z"
                      fill="#DC2626"
                      className="group-hover:fill-red-500 transition-colors duration-300"
                    />
                    {/* Phoenix tail feathers in red */}
                    <path
                      d="M50 60 C45 70, 40 80, 45 85 C50 80, 55 70, 60 60 C55 65, 50 60, 50 60 Z"
                      fill="#DC2626"
                      className="group-hover:fill-red-500 transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium font-sans ${
                      activeSection === item.id
                        ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}

                {/* Extracurriculars external link */}
                <button
                  onClick={openExtracurriculars}
                  className="px-4 py-2 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 text-sm font-medium font-sans"
                >
                  <ExternalLink className="w-4 h-4" />
                  Extracurriculars
                </button>

                {/* Primary CTA Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transform font-sans"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Contact
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 rounded-full hover:bg-cyan-500/20 transition-colors duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        {/* Mobile menu content */}
        <div
          className={`absolute inset-x-0 top-0 bg-gradient-to-b from-gray-900 to-black border-b border-cyan-500/20 transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-20 pb-8 px-6">
            <div className="flex flex-col space-y-4">
              {/* Mobile navigation items */}
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left font-sans ${
                    activeSection === item.id
                      ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              ))}
              {/* Mobile extracurriculars link */}
              <button
                onClick={openExtracurriculars}
                className="flex items-center gap-4 px-6 py-4 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 text-left font-sans"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-lg font-medium">Extracurriculars</span>
              </button>
              {/* Mobile contact button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black px-6 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 font-sans"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Dots (Right Side Indicator) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              title={item.label} // Tooltip on hover
            />
          ))}
        </div>
      </div>
    </>
  )
}
