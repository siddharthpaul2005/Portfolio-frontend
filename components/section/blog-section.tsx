"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Neural Architecture Search",
    excerpt:
      "Exploring automated approaches to designing optimal neural networks and their impact on AI development...",
    category: "AI Insights",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "/neural-network-diagram.png",
    mediumUrl: "https://medium.com/@yourusername/neural-architecture-search",
  },
  {
    id: 2,
    title: "Building Scalable ML Pipelines",
    excerpt: "Lessons learned from processing millions of transactions daily in production environments...",
    category: "Dev Logs",
    readTime: "12 min read",
    date: "Nov 28, 2024",
    image: "/data-pipeline-architecture.png",
    mediumUrl: "https://medium.com/@yourusername/scalable-ml-pipelines",
  },
  {
    id: 3,
    title: "How Eigen Faces Got me Hooked into Machine Learning",
    excerpt: "It is amazing how a in just a moment we put out face infront of the screen it instantly recognises who we are...",
    category: "Experimentation",
    readTime: "15 min read",
    date: "Nov 10, 2024",
    image: "/placeholder-alwph.png",
    mediumUrl: "https://medium.com/@paulsiddharth/how-eigenfaces-got-me-hooked-on-machine-learning-8283864324f1",
  },
]

const categories = ["All", "AI Insights", "Research Notes", "Dev Logs"]

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const openMediumProfile = () => {
    window.open("https://medium.com/@paulsiddharth", "_blank")
  }

  const openMediumPost = (url: string) => {
    window.open(url, "_blank")
  }

  const openAllArticles = () => {
    window.open("/articles", "_blank")
  }

  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* 
        BACKGROUND IMAGE SYSTEM
        - Abstract tech/writing background
        - Subtle overlay for content readability
      */}
      <div className="absolute inset-0">
        <img
          src="/abstract-writing-background.png"
          alt="Abstract writing background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      </div>

      {/* CONTENT LAYER: All blog content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER SECTION: Title with Medium integration */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* PROFILE PHOTO: Author photo with gradient border */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/Siddharth.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<div class="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 flex items-center justify-center text-cyan-400 text-lg font-bold">YN</div>'
                  }}
                />
              </div>
            </div>
            {/* SECTION TITLE: Fixed text visibility issue */}
            <div>
              <h2 className="text-5xl font-bold text-white font-serif mb-2">
                Thought<span className="text-cyan-400">space</span>
              </h2>
              <p className="text-xl text-gray-400 mt-2 font-sans">Insights from the intersection of AI and systems</p>
            </div>
          </div>

          {/* MEDIUM INTEGRATION: Follow button with stats */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={openMediumProfile}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transform flex items-center gap-3 font-sans"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">M</span>
              </div>
              Follow on Medium
              <ExternalLink className="w-4 h-4" />
            </Button>
            <div className="text-gray-400 text-sm font-mono">
              <span className="text-cyan-400 font-mono">{blogPosts.length}</span> articles published
            </div>
          </div>
        </div>

        {/* CATEGORY TABS: Filter buttons for blog posts */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/25 font-sans"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300 font-sans"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* BLOG GRID: Article cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 group backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => openMediumPost(post.mediumUrl)}
            >
              {/* ARTICLE IMAGE: Thumbnail with hover effects */}
              <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden relative">
                <img
                  src={post.image || "/placeholder.svg?height=200&width=400&query=blog post"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                </div>
              </div>
              {/* ARTICLE CONTENT: Title, excerpt, and metadata */}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-sans"
                  >
                    {post.category}
                  </Badge>
                  <span className="text-gray-400 text-sm font-mono">{post.date}</span>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight font-serif">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed font-sans">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm font-mono">{post.readTime}</span>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium font-sans">Read on Medium</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* 
            UPDATED CARD: Changed from "Write New Article" to "Want to read all of them"
            - Now leads to articles page instead of Medium directly
            - Arrow functionality updated accordingly
          */}
          <Card className="bg-gray-900/30 border-gray-700/30 border-dashed hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <div className="w-8 h-8 bg-cyan-600/20 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">→</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2 font-serif">Want to read all of them?</h3>
              <p className="text-gray-500 text-sm mb-4 font-sans">Explore the complete article collection</p>
              <Button
                variant="outline"
                size="sm"
                onClick={openAllArticles}
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent font-sans"
              >
                View All Articles →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* BOTTOM CTA: Additional Medium profile link */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            <span className="text-gray-300 font-sans">Want to read more?</span>
            <Button
              onClick={openMediumProfile}
              variant="outline"
              size="sm"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent flex items-center gap-2 font-sans"
            >
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              Visit Medium Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
