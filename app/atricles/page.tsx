/**
 * ALL ARTICLES PAGE
 *
 * Purpose: Display complete collection of articles
 * - Accessed from "Want to read all of them" card in Thoughtspace
 * - Comprehensive article listing with search and filtering
 * - Links to Medium for full article reading
 *
 * Features:
 * - Search functionality across articles
 * - Category filtering
 * - Responsive grid layout
 * - Direct Medium integration
 */

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

// EXTENDED ARTICLE DATABASE: Complete collection of articles
const allArticles = [
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
    tags: ["AI", "Neural Networks", "Automation", "Deep Learning"],
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
    tags: ["MLOps", "Scalability", "Production", "Data Engineering"],
  },
  {
    id: 3,
    title: "Quantitative Trading in 2024",
    excerpt: "Market analysis and algorithmic strategies that actually work in modern financial markets...",
    category: "Research Notes",
    readTime: "15 min read",
    date: "Nov 10, 2024",
    image: "/trading-algorithms-chart.png",
    mediumUrl: "https://medium.com/@yourusername/quantitative-trading-2024",
    tags: ["Finance", "Trading", "Algorithms", "Market Analysis"],
  },
  // Add more articles as needed...
]

const categories = ["All", "AI Insights", "Research Notes", "Dev Logs"]

export default function ArticlesPage() {
  // STATE MANAGEMENT: Search and filter functionality
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // FILTERING LOGIC: Search and category filtering
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // NAVIGATION: Open Medium article
  const openMediumPost = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* PAGE HEADER: Title and navigation */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-sans"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent font-serif">
            Complete Article Collection
          </h1>
          <p className="text-xl text-gray-400 font-sans">
            Explore all {allArticles.length} articles on AI, development, and quantitative research
          </p>
        </div>

        {/* SEARCH AND FILTER SECTION */}
        <div className="mb-12 space-y-6">
          {/* SEARCH BAR: Article search functionality */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 font-sans"
            />
          </div>

          {/* CATEGORY FILTERS: Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>

        {/* RESULTS SUMMARY */}
        <div className="text-center mb-8">
          <p className="text-gray-400 font-mono">
            Showing {filteredArticles.length} of {allArticles.length} articles
          </p>
        </div>

        {/* ARTICLES GRID: Complete article listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 group backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => openMediumPost(article.mediumUrl)}
            >
              {/* ARTICLE IMAGE: Thumbnail with hover effects */}
              <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden relative">
                <img
                  src={article.image || "/placeholder.svg?height=200&width=400&query=article"}
                  alt={article.title}
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
                    {article.category}
                  </Badge>
                  <span className="text-gray-400 text-sm font-mono">{article.date}</span>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight font-serif">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed font-sans">{article.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* ARTICLE TAGS: Topic tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ARTICLE FOOTER: Read time and Medium link */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm font-mono">{article.readTime}</span>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium font-sans">Read on Medium</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NO RESULTS MESSAGE */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2 font-serif">No articles found</h3>
            <p className="text-gray-500 font-sans">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* BOTTOM CTA: Medium profile link */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            <span className="text-gray-300 font-sans">Follow for more insights</span>
            <Button
              onClick={() => window.open("https://medium.com/@yourusername", "_blank")}
              variant="outline"
              size="sm"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent flex items-center gap-2 font-sans"
            >
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              Follow on Medium
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
