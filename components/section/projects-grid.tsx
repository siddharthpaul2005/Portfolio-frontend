"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "AI Trading System",
    description: "Quantitative trading platform with ML-driven strategies",
    category: "AI",
    tech: ["Python", "TensorFlow", "PostgreSQL", "Redis"],
    metrics: { performance: "+23.4%", stars: 156, downloads: "2.1k" },
    image: "/trading-dashboard.png",
  },
  {
    id: 2,
    title: "Distributed Analytics Engine",
    description: "Real-time data processing system handling 1M+ events/sec",
    category: "Web",
    tech: ["Go", "Kafka", "ClickHouse", "Kubernetes"],
    metrics: { performance: "1.2M ops/sec", stars: 89, downloads: "5.3k" },
    image: "/analytics-dashboard.png",
  },
  {
    id: 3,
    title: "Research Paper: Neural Architecture Search",
    description: "Novel approach to automated neural network design",
    category: "Research",
    tech: ["PyTorch", "CUDA", "Docker", "Weights & Biases"],
    metrics: { performance: "15% accuracy gain", stars: 234, downloads: "890" },
    image: "/neural-network-visualization.png",
  },
]

const categories = ["All", "AI", "Web", "Research", "Startup Builds"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Projects & Case Studies
          </h2>
          <p className="text-xl text-gray-400">Building solutions that scale</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-cyan-500 text-black"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Performance</p>
                    <p className="text-cyan-400 font-semibold">{project.metrics.performance}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Stars</p>
                    <p className="text-cyan-400 font-semibold">{project.metrics.stars}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Downloads</p>
                    <p className="text-cyan-400 font-semibold">{project.metrics.downloads}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
