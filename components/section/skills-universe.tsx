"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Database, TrendingUp, Wrench, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Comprehensive skill categories with all subskills
const skillCategories = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: Brain,
    description: "Classical ML algorithms and frameworks",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "LightGBM"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    hoverColor: "hover:border-purple-400",
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    icon: Zap,
    description: "Neural networks and advanced architectures",
    skills: ["TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Transformers", "GANs", "Autoencoders"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    hoverColor: "hover:border-blue-400",
  },
  {
    id: "dsa-cp",
    name: "DSA & CP",
    icon: Code,
    description: "Data structures, algorithms & competitive programming",
    skills: ["C++", "Java", "Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "Segment Trees"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    hoverColor: "hover:border-green-400",
  },
  {
    id: "quantitative",
    name: "Quant",
    icon: TrendingUp,
    description: "Quantitative finance and mathematical modeling",
    skills: [
      "Probability Theory",
      "Statistics",
      "Linear Algebra",
      "Calculus",
      "Portfolio Theory",
      "Risk Management",
      "QuantLib",
      "OCaml",
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    hoverColor: "hover:border-yellow-400",
  },
  {
    id: "development",
    name: "Development",
    icon: Database,
    description: "Full-stack web development technologies",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    hoverColor: "hover:border-cyan-400",
  },
  {
    id: "extra-skills",
    name: "Extra Skills",
    icon: Wrench,
    description: "DevOps, tools and additional technologies",
    skills: ["Git", "Docker", "Linux", "Shell Scripting", "AWS", "CI/CD", "REST APIs", "GraphQL"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    hoverColor: "hover:border-red-400",
  },
]

export function SkillsUniverse() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleSkillDetailClick = (categoryId: string) => {
    // Navigate to skill detail page
    window.open(`/skills/${categoryId}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Skills Universe
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive exploration of technical expertise across machine learning, development, and quantitative
            finance
          </p>
          <div className="mt-8 flex justify-center">
            <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
              Click cards to explore • Arrow to view projects & notes
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            const isExpanded = expandedCategory === category.id
            const isHovered = hoveredCategory === category.id

            return (
              <Card
                key={category.id}
                className={`${category.bgColor} ${category.borderColor} ${category.hoverColor} 
                  transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl
                  ${isExpanded ? "ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/20" : ""}
                  ${isHovered ? "shadow-xl" : ""}`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSkillDetailClick(category.id)
                      }}
                      className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 p-2 rounded-full transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  <CardTitle className="text-white text-xl font-bold mt-4">{category.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <div className="text-xs text-cyan-400 font-mono mt-2">{category.skills.length} technologies</div>
                </CardHeader>

                {/* Expanded Skills Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <CardContent className="pt-0">
                    <div className="border-t border-gray-700/50 pt-4">
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill, index) => (
                          <div
                            key={skill}
                            className={`px-3 py-2 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-gray-700/50 
                              hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300
                              transform hover:scale-105 cursor-pointer`}
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animation: isExpanded ? "fadeInUp 0.5s ease-out forwards" : "none",
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700/30">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSkillDetailClick(category.id)
                          }}
                          className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                        >
                          View Projects & Notes
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Interactive Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">{skillCategories.length}</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Learning</div>
          </div>
        </div>

        {/* Call to Action */}
        {expandedCategory && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400">
              <span>Exploring {skillCategories.find((cat) => cat.id === expandedCategory)?.name}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
