# Design Guidelines: Antronic A - Developer Portfolio Website

## Design Approach
**Selected Approach:** Reference-Based (Inspired by Framer, DevFolio, Vercel portfolios)

**Justification:** Developer portfolio requiring high visual impact, modern tech aesthetics, and strong personal branding. The project demands a balance of visual storytelling and professional credibility.

**Core Design Principles:**
- Modern minimalism with purposeful animations
- Dark-first design with strategic neon accents
- Glassmorphism for depth and sophistication
- Scroll-driven narrative revealing value progressively

## Color Palette

### Dark Mode (Primary)
- **Background Layers:** 
  - Primary: 222 47% 11% (Deep Slate)
  - Secondary: 222 47% 18% (Elevated Slate)
- **Primary Accent:** 199 89% 61% (Neon Cyan) - CTAs, links, highlights
- **Secondary Accent:** 258 90% 66% (Electric Purple) - Gradients, hover states
- **Text Hierarchy:**
  - Primary: 0 0% 100% (Pure White) - Headlines
  - Secondary: 214 32% 91% (Light Gray) - Body text
  - Tertiary: 215 20% 65% (Muted Gray) - Supporting text

### Gradient Applications
- **Hero Background:** Linear gradient from 222 47% 11% to 258 90% 66% (15% opacity)
- **Card Overlays:** Glassmorphic blur with 199 89% 61% to 258 90% 66% border glow
- **Accent Highlights:** 199 89% 61% → 258 90% 66% for buttons, skill progress bars

## Typography

### Font System
- **Primary:** Space Grotesk / Inter - Headlines, navigation
- **Secondary:** Inter / Poppola - Body text, descriptions
- **Monospace:** JetBrains Mono - Code snippets, tech stack labels

### Type Scale
- **Hero Headline:** text-6xl (60px) md:text-7xl (72px) lg:text-8xl (96px), font-bold
- **Section Headers:** text-4xl (36px) md:text-5xl (48px), font-bold, tracking-tight
- **Subheadings:** text-2xl (24px) md:text-3xl (30px), font-semibold
- **Body:** text-base (16px) md:text-lg (18px), leading-relaxed
- **Captions:** text-sm (14px), text-muted

## Layout System

### Spacing Primitives
**Core Units:** 4, 8, 12, 16, 20, 24 (Tailwind spacing)
- **Section Padding:** py-16 md:py-24 lg:py-32
- **Container Max-Width:** max-w-7xl mx-auto px-4 md:px-8
- **Card Spacing:** p-6 md:p-8, gap-6 md:gap-8
- **Element Margins:** mb-4, mb-6, mb-8, mb-12 for vertical rhythm

### Grid Strategy
- **Hero:** Single column, centered content
- **About Stats:** grid-cols-2 md:grid-cols-4 gap-4
- **Skills Grid:** grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- **Projects:** Single featured card (full-width), future grid-cols-1 md:grid-cols-2
- **Certifications:** grid-cols-1 md:grid-cols-3 gap-6

## Component Library

### Hero Section (100vh)
- Animated gradient background with subtle geometric patterns
- Centered content with greeting "Hi, I'm Antronic 👋"
- Main headline with gradient text effect
- Rotating tagline with typewriter animation (5 phrases)
- Dual CTAs: Primary (filled) "View My Work", Secondary (outline + blur) "Download Resume"
- Floating social icons (GitHub, LinkedIn, Email) with hover glow

### Glassmorphic Cards
- Background: backdrop-blur-md bg-slate-800/30
- Border: 1px solid with gradient from cyan to purple (20% opacity)
- Hover: Lift effect (translate-y-[-4px]), glow shadow in accent color
- Padding: p-6 md:p-8
- Border radius: rounded-2xl

### Skill Badges
- Badge container: Glassmorphic card with icon + label
- Icon: Lucide React icon, size-6, accent color
- Label: text-sm font-medium
- Hover: Scale(1.05), rotate(2deg), accent glow

### Stats Cards (About Section)
- Glassmorphic design with large number (text-4xl font-bold, accent color)
- Label below (text-sm text-muted)
- Icon top-right corner
- Entrance animation: Count-up effect

### Project Card (Featured)
- Large glassmorphic card with left image placeholder (40% width)
- Right content area: Title, description, key features grid (2 cols)
- Feature items with checkmark icons and metrics
- Tech stack as pill badges (bg-slate-700/50, accent border)
- CTA buttons at bottom: "View on GitHub" + "Live Demo"

### Timeline (Experience)
- Vertical line with dot markers (accent color)
- Company card attached to timeline with glassmorphic style
- Achievement bullets with checkmark icons
- Duration badge (pill shape, accent background)

### Contact Form
- Input fields: Dark bg (slate-800), accent border on focus
- Labels: text-sm text-muted, mb-2
- Textarea: min-h-32
- Submit button: Full-width, primary accent, hover glow effect
- Success message: Fade-in with checkmark icon

### Navigation
- Sticky header: backdrop-blur-lg bg-slate-900/80
- Logo/Name left, nav links center, CTA right
- Active section: Accent underline (2px, gradient)
- Mobile: Hamburger menu with slide-in panel

## Animation Strategy

### Scroll-Triggered Animations (Framer Motion)
- Fade-in + slide-up on section entrance (stagger children by 100ms)
- Skill badges: Stagger reveal with scale + rotate
- Stats: Count-up numbers on viewport intersection
- Project card: Slide-in from left (image) and right (content)

### Micro-Interactions
- Button hover: Scale(1.05) + shadow glow
- Card hover: Lift + border glow pulse
- Skill badge hover: Rotate + scale + glow
- Social icons: Bounce on hover
- Cursor trail: Subtle gradient following cursor (optional)

### Hero Animations
- Typewriter effect for rotating tagline (3s per phrase)
- Gradient background subtle shift (10s loop)
- Floating social icons gentle bob animation

### Performance
- Use `will-change` sparingly
- Debounce scroll listeners
- Lazy load images below fold
- Minimize animation complexity for mobile

## Images

### Hero Section
**Large Hero Image:** NO - Use animated gradient background with geometric patterns instead. The focus is on typography and the rotating tagline animation.

### Project Section
**Screenshot Placeholder:** YES - Place a mockup/screenshot of the Exam Seating Arrangement project in the featured project card (40% width on desktop, full-width stacked on mobile). Use a subtle border glow effect.

### About Section
**Avatar/Photo:** YES - Professional photo placeholder or animated avatar illustration, circular with accent border glow, size-32 md:size-40, positioned top-left or centered above content.

### Experience Section
**Company Logo:** Small placeholder for VaultofCodes logo in timeline card, size-12, rounded.

### Image Treatment
- Border radius: rounded-xl for all images
- Hover: Subtle scale(1.02) with glow
- Loading: Skeleton with shimmer effect
- Responsive: object-cover, aspect ratios maintained

## Accessibility & Responsive Behavior

- **Mobile (< 768px):** Single column, reduced spacing (py-12), larger touch targets (min-h-12)
- **Tablet (768-1024px):** 2-column grids, medium spacing
- **Desktop (> 1024px):** Full layouts, max spacing, hover states active

- **Focus states:** 2px accent ring with offset
- **Color contrast:** WCAG AA compliant (4.5:1 minimum)
- **Keyboard navigation:** Tab order logical, skip links present
- **Screen readers:** Semantic HTML, ARIA labels on icons

## Technical Implementation Notes
- Framework: React with Hooks
- Styling: Tailwind CSS (utility-first)
- Icons: Lucide React
- Animations: Framer Motion for scroll triggers
- Form: Client-side validation, success toast
- Single-page app with smooth scroll to sections
- "Back to Top" floating button (bottom-right, accent color, appears after 300px scroll)