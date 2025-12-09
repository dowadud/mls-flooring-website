# MLS Flooring - Enterprise Commercial Flooring Website

A high-end, professional website for MLS Flooring - delivering enterprise-grade commercial concrete polishing and epoxy coating solutions.

## 🏗️ Overview

This is a complete enterprise-level website redesign built for a Fortune 500-caliber commercial flooring contractor. The site showcases MLS Flooring's expertise in large-scale projects for airports, warehouses, distribution centers, and big-box retail facilities.

## ✨ Features

### Design & User Experience
- **Enterprise B2B Aesthetic** - Professional, clean design matching Fortune 500 contractor standards
- **Smooth Animations** - Framer Motion powered transitions, scroll effects, and hover interactions
- **Premium Mobile Experience** - Fully responsive design optimized for all devices
- **Strategic Whitespace** - Spacious, breathable layout conveying professionalism
- **Strong Branding** - Consistent color palette (deep blue, slate, emerald accents)

### Key Sections

#### 1. **Sticky Header**
- Shrink animation on scroll
- Logo + navigation (Services, Industries, Projects, About, Contact)
- Click-to-call: **704-981-0555**
- Primary CTA: "Request a Bid"

#### 2. **Hero Section**
- Full-width animated background with parallax effect
- Enterprise messaging: "Enterprise Concrete & Epoxy Flooring"
- Authoritative copy focused on airports, warehouses, and big-box retail
- Dual CTAs: Request a Bid + View Recent Projects

#### 3. **Why MLS**
- 4 animated cards highlighting:
  - National Account Experience (Amazon, CLT Airport)
  - Night & Shutdown Work Expertise
  - Certified Crews & Advanced Equipment
  - Dedicated Project Managers
- Staggered scroll animations

#### 4. **Services Section**
- 6 comprehensive service offerings:
  - Concrete Polishing
  - Epoxy Coatings
  - Surface Prep & Removal
  - Joint Filling & Repairs
  - Moisture Mitigation Systems
  - Large-Scale Commercial Packages
- Professional imagery with hover effects

#### 5. **Industries Served**
- 6 targeted industry segments with detailed descriptions:
  - Distribution & Fulfillment Centers
  - Airports & Transportation Hubs
  - Big-Box & Retail Chains
  - Manufacturing & Pharmaceutical
  - Education & Municipal Facilities
  - Corporate & Office Spaces
- Gradient icon cards with hover animations

#### 6. **Featured Projects**
- 3 case study cards:
  - **Amazon Fulfillment Center** - 700,000 sq ft, Charlotte, NC
  - **Charlotte International Airport** - 450,000 sq ft
  - **National Retail Distribution** - 525,000 sq ft
- Parallax section with dark background
- "View Full Projects" CTA

#### 7. **Contact / Bid Request**
- Comprehensive bid request form with fields:
  - Name, Company, Email, Phone
  - Project Location, Square Footage
  - Floor Type (dropdown), Timeline
  - Project Details (textarea)
- Split layout with large industrial image
- Fade-in animations (form from left, image from right)

#### 8. **Professional Footer**
- Company info, quick links, service regions
- Contact information
- Dark slate background
- Copyright and licensing info

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563EB)
- **Dark**: Slate (#0F172A, #1E293B)
- **Accent**: Emerald, Cyan, Purple gradients
- **Text**: Gray scale hierarchy

### Typography
- **Font**: Inter (system font)
- **Hierarchy**: 
  - Hero: 5xl - 8xl
  - Headings: 4xl - 5xl
  - Body: base - xl
  - Labels: sm

### Animations
- Page load fade-ins
- Scroll-triggered reveals
- Card hover lifts and scales
- Image zoom on hover
- Parallax effects
- Button interactions

## 💻 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dowadud/mls-flooring-website.git
cd mls-flooring-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the `mls-flooring-website` repository
4. Click "Deploy"
5. Done! ✅

Or use Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

## 📂 Project Structure

```
mls-flooring-website/
├── app/
│   ├── blog/
│   │   └── page.tsx         # Blog page
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage (main site)
│   └── globals.css          # Global styles & animations
├── public/
│   ├── logo.png
│   ├── hero-bg.png
│   ├── epoxy-flooring.jpeg
│   ├── concrete-polishing.jpeg
│   ├── surface-prep.jpeg
│   ├── amazon.jpg
│   ├── airport.jpg
│   └── schools.jpg
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 SEO Optimization

### Metadata
- **Title**: "MLS Flooring | Commercial Concrete Polishing & Epoxy Floors"
- **Description**: Enterprise-grade solutions for airports, warehouses, and commercial facilities
- **Keywords**: Commercial concrete polishing, epoxy flooring, warehouse flooring, airport flooring, etc.

### Technical SEO
- Semantic HTML5
- Proper heading hierarchy
- Alt text on all images
- Fast page load (Next.js optimization)
- Mobile-first responsive
- Smooth scroll behavior
- Accessible focus states

## ♿ Accessibility

- WCAG 2.1 compliant color contrast
- Keyboard navigation support
- Focus visible styles
- Semantic HTML structure
- Descriptive labels and aria attributes
- Responsive font sizes

## 📱 Mobile Responsive

- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and forms
- Optimized images for mobile
- Responsive navigation
- Mobile-first approach

## 🎨 Customization

### Update Colors
Edit `app/page.tsx` and replace Tailwind color classes:
- `bg-blue-600` → your primary color
- `from-slate-900` → your dark color
- `text-emerald-600` → your accent color

### Update Content
All content is in `app/page.tsx` - simply edit the text in each section.

### Replace Images
Add new images to `public/` folder and update the `src` attributes.

## 📞 Contact Information

- **Phone**: 704-981-0555
- **Location**: Charlotte, NC
- **Service Area**: Southeast United States

## 🔗 Links

- **Website**: [Coming Soon]
- **GitHub**: [https://github.com/dowadud/mls-flooring-website](https://github.com/dowadud/mls-flooring-website)

## 📄 License

© 2024 MLS Flooring. All rights reserved. Licensed & Insured.

---

**Built with precision for enterprise-level commercial flooring.**
