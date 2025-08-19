"use client"

import { useState } from "react"
import { ArrowLeft, BookOpen, Code, FileText, ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Skill categories data (matching the skills universe)
const skillsData = {
  "machine-learning": {
    name: "Machine Learning",
    description: "Classical ML algorithms and frameworks",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "LightGBM"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  "deep-learning": {
    name: "Deep Learning",
    description: "Neural networks and advanced architectures",
    skills: ["TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Transformers", "GANs", "Autoencoders"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  "dsa-cp": {
    name: "DSA & CP",
    description: "Data structures, algorithms & competitive programming",
    skills: ["C++", "Java", "Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "Segment Trees"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  quantitative: {
    name: "Quant",
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
  },
  development: {
    name: "Development",
    description: "Full-stack web development technologies",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
  },
  "extra-skills": {
    name: "Extra Skills",
    description: "DevOps, tools and additional technologies",
    skills: ["Git", "Docker", "Linux", "Shell Scripting", "AWS", "CI/CD", "REST APIs", "GraphQL"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
}

// Sample content structure (you'll replace with your actual content)
const sampleProjects = [
  {
    id: 1,
    title: "Advanced Portfolio Optimization",
    description:
      "Implementation of modern portfolio theory with risk-adjusted returns using machine learning techniques.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    status: "Completed",
    date: "2024-01",
    github: "https://github.com/yourusername/portfolio-optimization",
    demo: "https://portfolio-demo.vercel.app",
    image: "/images/project-placeholder.jpg",
  },
  {
    id: 2,
    title: "Real-time Trading Algorithm",
    description: "High-frequency trading system with backtesting framework and risk management protocols.",
    technologies: ["C++", "Python", "PostgreSQL", "Docker"],
    status: "In Progress",
    date: "2024-02",
    github: "https://github.com/yourusername/trading-algo",
    image: "/images/project-placeholder-2.jpg",
  },
]

const sampleNotes = [
  {
    id: 1,
    title: "Understanding Transformer Architecture",
    type: "Research Notes",
    date: "2024-01-15",
    content: "Deep dive into attention mechanisms and their applications in NLP...",
    tags: ["Deep Learning", "NLP", "Transformers"],
    image: "/images/notes-placeholder.jpg",
  },
  {
    id: 2,
    title: "Quantitative Risk Models",
    type: "Handwritten Notes",
    date: "2024-01-10",
    content: "Mathematical derivations of VaR and CVaR calculations...",
    tags: ["Risk Management", "Mathematics", "Finance"],
    image: "/images/handwritten-notes.jpg",
  },
]

interface SkillDetailPageProps {
  params: {
    skillId: string
  }
}

export default function SkillDetailPage({ params }: SkillDetailPageProps) {
  const [activeTab, setActiveTab] = useState("projects")
  const skillData = skillsData[params.skillId as keyof typeof skillsData]

  if (!skillData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Skill Not Found</h1>
          <p className="text-gray-400 mb-8">The requested skill category does not exist.</p>
          <Button onClick={() => window.close()} className="bg-cyan-500 hover:bg-cyan-400 text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => window.close()}
            className="text-gray-300 hover:text-cyan-400 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skillData.color}`} />
            <h1 className="text-xl font-bold text-cyan-400">{skillData.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skillData.color} p-6 shadow-2xl`}>
            <div className="w-full h-full bg-white/20 rounded-lg" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{skillData.name}</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">{skillData.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillData.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border border-gray-700/50">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Research
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {sampleProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="ml-4">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add Project Placeholder */}
              <Card className="bg-gray-900/30 border-gray-700/30 border-dashed hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                    <Code className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">Add New Project</h3>
                  <p className="text-gray-500 text-sm">Showcase your work in {skillData.name}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleNotes.map((note) => (
                <Card
                  key={note.id}
                  className="bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg mb-1">{note.title}</CardTitle>
                        <CardDescription className="text-cyan-400 text-sm">{note.type}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {note.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{note.content}</p>
                    <div className="flex flex-wrap gap-1">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add Note Placeholder */}
              <Card className="bg-gray-900/30 border-gray-700/30 border-dashed hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-300 mb-1">Add Notes</h3>
                  <p className="text-gray-500 text-xs">Research, handwritten notes, essays</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="mt-8">
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Research Papers & Studies</h3>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                This section will contain your research papers, academic studies, and in-depth analysis related to{" "}
                {skillData.name}.
              </p>
              <Button
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                Coming Soon
              </Button>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="mt-8">
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Learning Resources</h3>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                Curated list of books, courses, tutorials, and other resources that helped you master {skillData.name}.
              </p>
              <Button
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                Coming Soon
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
