"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

const stats = [
  { label: "Years Coding", value: "8+" },
  { label: "Lines of Code", value: "500K+" },
  { label: "Projects Shipped", value: "25+" },
  { label: "Hackathons", value: "12" },
]

export function AboutSection() {
  const [imgError, setImgError] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white font-serif">
            Philosophy & <span className="text-cyan-400">Approach</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait with Dynamic Lighting */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8">
              <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                {!imgError ? (
                  <Image
                    src="/Siddharth2.jpeg"
                    alt="Your Name"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-xl"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full flex items-center justify-center text-cyan-400 text-4xl font-bold">
                    YN
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl -z-10" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
              <p>
                I believe in building systems that don&apos;t just work today, but evolve and scale with tomorrow&apos;s
                challenges. Every line of code is an investment in the future.
              </p>
              <p>
                My approach combines rigorous engineering principles with creative problem-solving, whether I&apos;m
                designing ML architectures or optimizing distributed systems.
              </p>
              <p>
                From hackathon prototypes to production systems serving millions, I&apos;ve learned that the best solutions
                emerge from deep technical understanding paired with relentless iteration.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="bg-gray-900/50 border-gray-700 text-center hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1 font-mono">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-sans">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
