"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    role: "Senior ML Engineer",
    company: "TechCorp",
    period: "2026 - 2026",
    achievements: [
      "Hopefully oone day",
      "Built ML pipeline processing 10M+ daily transactions",
      "Reduced model inference time by 60%",
      "Led team of 5 engineers on core platform",
    ],
    logo: "/abstract-tech-logo.png",
  },
  {
    id: 2,
    role: "Backend Engineer",
    company: "Nothing@company",
    period: "2026 - 2026",
    achievements: [
      "Dont take these seriously",
      "Architected microservices handling 1M+ users",
      "Implemented real-time analytics system",
    ],
    logo: "/abstract-startup-logo.png",
  },
  {
    id: 3,
    role: "Research Intern",
    company: "Trying to Get Somewhere",
    period: "202 - 2020",
    achievements: [
      "I am looking forward towards publishing a paper",
      "I want to develop a novel neural architecture",
      "Loking forward towards collaboration with PhD researchers",
    ],
    logo: "/research-lab-logo.png",
  },
]

export function ExperienceTimeline() {
  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* 
        BACKGROUND IMAGE SYSTEM
        - Professional workspace/office background
        - Dark overlay ensures text readability
        - Parallax-ready structure for future enhancement
      */}
      <div className="absolute inset-0">
        <img
          src="/background3.jpg"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        {/* OVERLAY: Ensures content visibility over background */}
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50" />
      </div>

      {/* CONTENT LAYER: Timeline content positioned above background */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* SECTION HEADER: Title and description */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent font-serif">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400 font-sans">Journey through impactful roles</p>
        </div>

        {/* TIMELINE CONTAINER: Vertical timeline with connecting line */}
        <div className="relative">
          {/* TIMELINE LINE: Vertical connector with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent" />

          {/* EXPERIENCE ITEMS: Individual timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start gap-8">
                {/* TIMELINE DOT: Company logo with gradient border */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                </div>

                {/* EXPERIENCE CARD: Role details and achievements */}
                <Card className="flex-1 bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-xl font-serif">{exp.role}</CardTitle>
                        <CardDescription className="text-cyan-400 text-lg font-sans">{exp.company}</CardDescription>
                      </div>
                      <span className="text-gray-400 text-sm font-mono">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* ACHIEVEMENTS LIST: Bullet points with custom styling */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2 font-sans">
                          <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
