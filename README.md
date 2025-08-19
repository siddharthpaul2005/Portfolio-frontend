# Luxury Minimalist Portfolio

A sophisticated, cinematic portfolio website built with Next.js, featuring dynamic video backgrounds, interactive 3D elements, and a luxury dark aesthetic.

## 🎨 Design Philosophy

This portfolio follows a **luxury minimalist** approach with:
- **Matte black/charcoal backgrounds** with **cyan neon accents**
- **Sophisticated typography** using Playfair Display (serif) for headings and Inter (sans-serif) for body text
- **Cinematic video backgrounds** that change on each page load
- **Glass morphism effects** and subtle animations
- **Professional spacing** and alignment throughout

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Main portfolio page with all sections
│   ├── globals.css             # Global styles and design system
│   ├── extracurriculars/       # External page for personal life
│   └── skills/[skillId]/       # Dynamic skill detail pages
├── components/
│   ├── sections/               # Main portfolio sections
│   │   ├── hero-section.tsx    # Video hero with dynamic backgrounds
│   │   ├── skills-universe.tsx # Interactive skills with categories
│   │   ├── projects-grid.tsx   # Project showcase grid
│   │   ├── experience-timeline.tsx # Professional timeline
│   │   ├── blog-section.tsx    # Medium integration & articles
│   │   ├── about-section.tsx   # Personal information
│   │   └── contact-section.tsx # Contact form
│   └── ui/                     # Reusable UI components
│       ├── navigation.tsx      # Smart navigation with scroll behavior
│       ├── user-identity.tsx   # User profile components
│       ├── custom-cursor.tsx   # Custom cursor effects
│       └── scroll-progress.tsx # Page scroll indicator
└── public/
    ├── videos/                 # Hero background videos
    ├── images/                 # Profile photos and assets
    └── ...
\`\`\`

## 🎬 Key Features

### 1. Dynamic Video Backgrounds
- **Location**: `components/sections/hero-section.tsx`
- **Functionality**: Randomly selects from 5 videos on each page load
- **Implementation**: Uses HTML5 video with autoplay and loop
- **Fallback**: Poster image for loading states

### 2. Smart Navigation
- **Location**: `components/ui/navigation.tsx`
- **Features**:
  - Hides on scroll down, shows on scroll up
  - Active section highlighting
  - Smooth scroll to sections
  - Mobile-responsive hamburger menu
  - Profile photo integration

### 3. Interactive Skills Universe
- **Location**: `components/sections/skills-universe.tsx`
- **Categories**: ML, Deep Learning, DSA & CP, Quant, Development, Extra Skills
- **Interactions**: 
  - Click to expand skill details
  - Arrow button leads to dedicated skill pages
  - Hover effects and animations

### 4. Skill Detail Pages
- **Location**: `app/skills/[skillId]/page.tsx`
- **Content Tabs**: Projects, Notes, Research, Resources
- **Dynamic Routing**: Each skill category has its own page
- **Features**: Project showcases, note organization, research papers

### 5. Medium Integration
- **Location**: `components/sections/blog-section.tsx`
- **Features**:
  - Medium profile link with branded button
  - Article previews with Medium links
  - Category filtering
  - Professional blog layout

## 🎨 Typography System

### Font Pairing
- **Headings**: Playfair Display (serif) - Elegant, sophisticated
- **Body Text**: Inter (sans-serif) - Clean, readable
- **Code/Tech**: System monospace - Technical content

### Typography Classes
\`\`\`css
.text-hero          # Large hero titles (Playfair, 800 weight)
.text-section-title # Section headings (Playfair, 700 weight)
.text-body          # Body content (Inter, 400 weight)
.text-tech          # Technical content (Monospace, 500 weight)
.text-nav           # Navigation text (Inter, 500 weight)
\`\`\`

## 🎯 Color System

### Primary Colors
- **Background**: Deep black/charcoal gradients
- **Primary Accent**: Cyan (#00ffff)
- **Text**: White/light gray hierarchy
- **Cards**: Semi-transparent with glass morphism

### Color Usage
\`\`\`css
/* Backgrounds */
bg-gradient-to-br from-gray-900 via-black to-gray-900

/* Accents */
text-cyan-400       # Primary accent text
border-cyan-500/30  # Subtle accent borders
bg-cyan-500/10      # Subtle accent backgrounds

/* Text Hierarchy */
text-white          # Primary text
text-gray-300       # Secondary text
text-gray-400       # Tertiary text
text-gray-500       # Muted text
\`\`\`

## 🎭 Animation System

### Hover Effects
\`\`\`css
.hover-lift         # Elegant lift and scale on hover
.hover-glow         # Subtle glow effects
.fade-in-up         # Entrance animations
.stagger-animation  # Delayed animations for lists
\`\`\`

### Glass Morphism
\`\`\`css
.glass-morphism     # Frosted glass effect
.luxury-card        # Premium card styling
.neon-glow          # Cyan neon text effects
.neon-border        # Cyan neon border effects
\`\`\`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features
- Mobile-first approach
- Collapsible navigation
- Responsive typography scaling
- Adaptive grid layouts
- Touch-friendly interactions

## 🔧 Component Documentation

### Hero Section (`hero-section.tsx`)
\`\`\`tsx
// Video background system
const videoSources = [...]  // Array of video file paths
const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

// Random video selection on load
useEffect(() => {
  const randomIndex = Math.floor(Math.random() * videoSources.length)
  setCurrentVideoIndex(randomIndex)
}, [])

// Video autoplay handling
const playVideo = async () => {
  try {
    await video.play()
  } catch (error) {
    console.log("Video autoplay failed:", error)
  }
}
\`\`\`

### Navigation (`navigation.tsx`)
\`\`\`tsx
// Scroll direction detection
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Show/hide based on scroll direction
  if (currentScrollY < lastScrollY || currentScrollY < 100) {
    setIsVisible(true)  // Show navigation
  } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
    setIsVisible(false) // Hide navigation
  }
}

// Active section detection
const sections = ["hero", "skills", "projects", ...]
for (const section of sections) {
  const element = document.getElementById(section)
  if (element) {
    const rect = element.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      setActiveSection(section)  // Update active section
      break
    }
  }
}
\`\`\`

### Skills Universe (`skills-universe.tsx`)
\`\`\`tsx
// Skill categories with metadata
const skillCategories = [
  {
    id: "machine-learning",           // URL slug for detail pages
    name: "Machine Learning",         // Display name
    icon: Brain,                      // Lucide icon component
    description: "...",               // Category description
    skills: ["Python", "NumPy", ...], // Array of technologies
    color: "from-purple-500 to-pink-500", // Gradient colors
    bgColor: "bg-purple-500/10",      // Background color
    borderColor: "border-purple-500/30", // Border color
  },
  // ... more categories
]

// Expansion state management
const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

// Category click handler
const handleCategoryClick = (categoryId: string) => {
  setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
}

// Navigation to skill detail pages
const handleSkillDetailClick = (categoryId: string) => {
  window.open(`/skills/${categoryId}`, "_blank")
}
\`\`\`

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Required Assets
1. **Videos**: Add 5 hero videos to `/public/videos/`
   - `hero-1.mp4` through `hero-5.mp4`
   - Recommended: 1920x1080, 10-30 seconds, optimized for web

2. **Images**: Add profile photo to `/public/images/`
   - `profile-photo.jpg` - Square aspect ratio recommended

3. **Content**: Update placeholder content
   - Replace `[YOUR NAME]` with actual name
   - Update Medium profile URLs
   - Add real project data and descriptions

### Environment Variables
\`\`\`env
# Add to Vercel project settings
NEXT_PUBLIC_MEDIUM_USERNAME=yourusername
\`\`\`

## 🎨 Customization Guide

### Changing Colors
1. Update color variables in `globals.css`
2. Modify gradient classes throughout components
3. Update accent colors in skill categories

### Adding New Sections
1. Create component in `components/sections/`
2. Add to main page in `app/page.tsx`
3. Update navigation in `components/ui/navigation.tsx`

### Modifying Typography
1. Change fonts in `app/layout.tsx`
2. Update font variables in `globals.css`
3. Apply new classes throughout components

## 📋 Content Management

### Skills Categories
- Edit `skillCategories` array in `skills-universe.tsx`
- Add new categories with proper metadata
- Create corresponding detail pages

### Projects
- Update project data in respective components
- Add project images to `/public/images/`
- Link to live demos and repositories

### Blog Posts
- Update `blogPosts` array in `blog-section.tsx`
- Link to actual Medium articles
- Add proper preview images

## 🔍 Performance Optimizations

- **Images**: Next.js Image component with optimization
- **Videos**: Compressed and optimized for web
- **Fonts**: Preloaded with `display: swap`
- **Animations**: Hardware-accelerated CSS transforms
- **Code Splitting**: Dynamic imports for heavy components

## 🎯 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text
- **ARIA Labels**: Interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Compatible with screen readers
- **Meta Tags**: Comprehensive meta information

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, CSS Variables, ES6+

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
# Deploy to Vercel
vercel --prod
\`\`\`

### Manual Deployment
\`\`\`bash
# Build for production
npm run build

# Export static files (if needed)
npm run export
\`\`\`

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
