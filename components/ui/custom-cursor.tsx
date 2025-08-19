"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [cursorType, setCursorType] = useState("default")

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setCursorType("hover")
      } else if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        setCursorType("media")
      } else {
        setCursorType("default")
      }
    }

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mousemove", handleHover)
    document.addEventListener("mouseleave", hideCursor)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mousemove", handleHover)
      document.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
        cursorType === "hover"
          ? "w-12 h-12 border-2 border-neon bg-neon/20"
          : cursorType === "media"
            ? "w-8 h-8 bg-neon neon-glow"
            : "w-4 h-4 bg-neon/60"
      } rounded-full mix-blend-difference`}
      style={{
        left: position.x - (cursorType === "hover" ? 24 : cursorType === "media" ? 16 : 8),
        top: position.y - (cursorType === "hover" ? 24 : cursorType === "media" ? 16 : 8),
      }}
    />
  )
}
