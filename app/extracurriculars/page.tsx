"use client"

import { ArrowLeft, BookOpen, Camera, Music, Trophy, Users, Heart, Gamepad2, Plane, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const extracurricularCategories = [
  {
    id: "reading",
    title: "Reading & Learning",
    icon: BookOpen,
    description: "Books, research papers, and continuous learning beyond the technical realm",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    items: ["Philosophy", "Biographies", "Science Fiction", "Technical Papers", "History"],
    status: "Active",
  },
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    description: "Capturing moments and perspectives through the lens of creativity",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    items: ["Street Photography", "Landscapes", "Portraits", "Architecture", "Abstract"],
    status: "Active",
  },
  {
    id: "music",
    title: "Music & Arts",
    icon: Music,
    description: "Musical instruments, compositions, and artistic expressions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    items: ["Piano", "Guitar", "Music Production", "Composition", "Sound Design"],
    status: "Learning",
  },
  {
    id: "competitions",
    title: "Competitions",
    icon: Trophy,
    description: "Hackathons, coding competitions, and academic achievements",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    items: ["Hackathons", "Coding Contests", "ML Competitions", "Research Competitions", "Case Studies"],
    status: "Ongoing",
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    description: "Volunteering, mentoring, and giving back to the community",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    items: ["Mentoring", "Open Source", "Teaching", "Volunteering", "Speaking"],
    status: "Active",
  },
  {
    id: "wellness",
    title: "Health & Wellness",
    icon: Heart,
    description: "Physical fitness, mental health, and overall well-being practices",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    items: ["Gym", "Running", "Meditation", "Yoga", "Nutrition"],
    status: "Daily",
  },
  {
    id: "gaming",
    title: "Gaming & Strategy",
    icon: Gamepad2,
    description: "Strategic games, esports, and competitive gaming experiences",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    items: ["Chess", "Strategy Games", "Competitive Gaming", "Game Development", "Esports"],
    status: "Casual",
  },
  {
    id: "travel",
    title: "Travel & Culture",
    icon: Plane,
    description: "Exploring new places, cultures, and broadening perspectives",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    items: ["Cultural Exploration", "Adventure Travel", "Food Culture", "Languages", "History"],
    status: "Planned",
  },
  {
    id: "lifestyle",
    title: "Lifestyle & Hobbies",
    icon: Coffee,
    description: "Personal interests, hobbies, and lifestyle choices that define who I am",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    items: ["Coffee Culture", "Cooking", "Minimalism", "Productivity", "Personal Growth"],
    status: "Ongoing",
  },
]

export default function Extracurriculars() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Learning":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Ongoing":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Daily":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Casual":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      case "Planned":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      default:
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    }
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
          <h1 className="text-xl font-bold text-cyan-400">Extracurriculars & Life</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src="/images/profile-photo.jpg"
                alt="Your Name"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  target.parentElement!.innerHTML =
                    '<div class="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 flex items-center justify-center text-cyan-400 text-2xl font-bold">YN</div>'
                }}
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Beyond the Code
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A glimpse into my life outside of engineering - the experiences, hobbies, and moments that shape who I am as
            a person, not just as a developer.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {extracurricularCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`${category.bgColor} ${category.borderColor} hover:border-opacity-60 transition-all duration-500 group cursor-pointer transform hover:scale-105`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <Badge variant="outline" className={`${getStatusColor(category.status)} text-xs font-medium`}>
                      {category.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 text-xs hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Personal Philosophy Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Personal Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Balance</h4>
              <p className="text-gray-300 text-sm">
                Maintaining harmony between technical excellence and personal growth
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Community</h4>
              <p className="text-gray-300 text-sm">Contributing to others growth while continuously learning myself</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
              <p className="text-gray-300 text-sm">Pursuing mastery in all endeavors, both professional and personal</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="text-center">
          <div className="bg-gray-900/30 border border-cyan-500/20 rounded-xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">Digital Life Journal</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              This space will soon be filled with personal stories, achievements, photo galleries, travel experiences,
              and the moments that make me who I am beyond the world of code and algorithms. Think of it as a digital
              diary showcasing the human side of the journey of a Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                Photo Galleries
              </Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                Travel Stories
              </Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                Achievement Timeline
              </Badge>
              <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                Personal Reflections
              </Badge>
            </div>
            <p className="text-sm text-gray-400">
              &quot;The best way to understand someone is to see what they do when they are not working.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
