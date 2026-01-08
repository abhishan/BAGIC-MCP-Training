# 📘 INSTRUCTIONS PROMPT  
## Build a Fully Client-Side, Gamified Copilot Studio Training Website

You are tasked with building a **static, client-side-only training website** for delivering **Copilot Studio self-paced training** to customers.

This document is the **authoritative functional and UX specification**.  
⚠️ **Do NOT add server-side code. Do NOT add authentication. Do NOT introduce databases.**

Reference sites:
https://microsoft.github.io/mcs-labs/
https://microsoft.github.io/mcs-labs/labs/agent-builder-web/

---

## 1. CORE CONSTRAINTS (NON-NEGOTIABLE)

- Use **HTML, CSS, JavaScript only**
- All logic runs **in the browser**
- No backend, no APIs, no server-side processing
- Persist user state using:
  - `localStorage` (required)
  - `sessionStorage` (optional)
- Must be deployable as **static files**
  - Azure Static Web Apps
  - Azure Blob Static Hosting
  - GitHub Pages

---

## 2. DESIGN GOALS

- Microsoft-style **documentation and lab experience**
- Clean, minimal, readable UI
- Self-paced learning
- Gamified but professional
- Easy to add new trainings without refactoring
- Scales from 3 to 20+ trainings

---

## 3. REQUIRED PAGES

You MUST implement the following pages:

1. **Landing Page (Training Catalog)**
2. **Training Detail Page (Lab Experience)**
3. **My Progress Page**
4. *(Optional)* Badge Gallery Page

---

## 4. LANDING PAGE — TRAINING CATALOG

### Purpose
- Show all available trainings
- Allow users to browse and select a training

### Layout Requirements
- Header with:
  - Site title (e.g. *Copilot Studio Training Hub*)
  - Navigation:
    - Home
    - My Progress
    - Badges (optional)
- Main content:
  - Responsive grid or stacked list of training cards

### Training Card MUST Include
- Training title
- Estimated duration (e.g. 45 mins, 1.5 hrs)
- Difficulty level:
  - Beginner
  - Intermediate
  - Advanced
- Short description (1–2 sentences)
- Status indicator:
  - Not Started
  - In Progress
  - Completed
- Primary CTA:
  - Start
  - Resume

### Optional Enhancements
- Client-side filtering by level or status
- Client-side sorting by duration or difficulty

---

## 5. TRAINING DETAIL PAGE — LAB EXPERIENCE

### Purpose
- Deliver step-by-step training content
- Track time spent
- Track completion
- Mirror Microsoft lab-style documentation

---

### Page Layout (MANDATORY)

| Header (Training Title + Timer Controls) |
| Left Sidebar | Main Content | Right Sidebar |


---

### Header (Sticky)
- Training title
- Timer display (HH:MM:SS)
- Buttons:
  - Start
  - Pause (optional)
  - End Training

### Timer Behavior
- Timer starts only when user clicks **Start**
- Timer persists on refresh (localStorage)
- Timer stops permanently on **End Training**

---

### Left Sidebar (Context Panel)
- Training name
- Difficulty
- Estimated duration
- Progress indicator (steps completed)
- Badge preview (locked/unlocked)
- Sticky while scrolling

---

### Right Sidebar (Table of Contents)
- List of all training steps
- Clickable navigation
- Visual step status:
  - Not started
  - In progress
  - Completed
- Highlights current section while scrolling

---

### Main Content Area
- Structured instructional content
- Supports:
  - Headings
  - Ordered steps
  - Paragraphs
  - Screenshots/images
  - Hyperlinks
  - Callouts (Tip / Note / Warning)
- High readability:
  - Generous line height
  - Clear spacing
  - Responsive images

---

## 6. TRAINING COMPLETION FLOW

### When User Clicks **End Training**
You MUST perform the following actions:

1. Stop the timer
2. Mark training as **Completed**
3. Save completion timestamp
4. Unlock associated badge
5. Trigger celebration animation

---

### Celebration Experience
- Confetti animation overlay
- Modal or toast message:
  - “Training Completed!”
  - Badge earned
  - Time spent
- CTA buttons:
  - View My Progress
  - Back to Home

---

## 7. GAMIFICATION SYSTEM

### Badge Rules
- Each training awards **one badge**
- Badge tier depends on difficulty

### Example Badge Tiers
- Beginner → Explorer
- Intermediate → Ninja
- Advanced → Black Belt
- Mastery Path → Platinum Architect

### Badge Metadata
- Badge name
- Icon or visual
- Description
- Associated training
- Earned date

---

## 8. MY PROGRESS PAGE

### Purpose
- Show learner progress
- Reinforce motivation
- Display achievements

---

### Page Sections

#### Overview
- Total trainings completed
- Total time spent
- Current learner rank/title

#### Training Progress Table
- Training name
- Status
- Time spent
- Completion date

#### Badges Section
- Grid of earned badges
- Locked badges visually distinct

---

## 9. DATA MODEL (CONCEPTUAL)

### Training Object
- id
- title
- description
- duration
- difficulty
- steps
- badgeId

### User Progress Object
- trainingId
- status
- timeSpent
- completionDate
- badgeEarned

> ⚠️ Persist ALL data in `localStorage`

---

## 10. ACCESSIBILITY & UX REQUIREMENTS

- Keyboard navigation
- Clear focus indicators
- Semantic HTML headings
- ARIA roles where appropriate
- Color is NOT the sole indicator of state

---

## 11. DEPLOYMENT REQUIREMENTS

- Must run by opening `index.html`
- No environment variables
- No runtime configuration
- No build step required (optional bundling allowed)

---

## 12. OTHER FEATURES

- Dark mode toggle
- Reset progress button

---

## 13. SUCCESS CRITERIA

The solution is successful if:
- It runs entirely in the browser
- User progress persists across sessions
- Trainings feel like professional Microsoft labs
- Gamification enhances motivation without distraction
- New trainings can be added easily

---

##14. CSS DESIGN Reference
Key Design Choices
1. Layout Architecture
Three-Column Responsive Layout

Left Sidebar: Persistent navigation with collapsible sections
Center Content: Primary reading area with generous whitespace
Right Sidebar: "On This Page" table of contents for in-page navigation
Design Rationale: This layout pattern maximizes content discoverability while maintaining focus on the primary content. The sticky sidebars ensure constant access to navigation without scrolling.

Responsive Breakpoints

The design collapses gracefully on smaller screens
Mobile-first approach with progressive enhancement
Navigation transforms into hamburger menu on mobile devices

2. Typography System
Hierarchical Type Scale

Clear heading hierarchy (H1 → H6) with distinct sizing and weights
Primary headings use bold, substantial font sizes for scanability
Body text appears to use a comfortable 16-18px size for optimal readability
Monospace fonts for code blocks and technical content

Line Height & Spacing

Generous line-height (approximately 1.6-1.8) for improved readability
Adequate paragraph spacing prevents visual clutter
Consistent vertical rhythm throughout the document

3. Color Palette & Theming
Theme Toggle System
The site features three distinct modes:

🎨 Rich Mode: Full-color, visually engaging experience
📄 Minimal Mode: Reduced visual complexity, focus on content
🌙 Dark Mode: Eye-comfort for low-light environments

Color Strategy

Primary Blues: Microsoft brand colors for links and accents
Neutral Grays: Background and text hierarchy
Semantic Colors: Green for success, yellow/orange for warnings, blue for information
High Contrast: Ensures WCAG accessibility compliance

4. Visual Elements & Components
Emoji & Icon System

Strategic use of emojis (⏱️, 📊, 🎯) for visual anchoring
Icons serve as visual shortcuts for quick scanning
Consistent iconography throughout navigation

Card-Based Design

Journey cards on homepage use distinct borders and shadows
Hover states provide interactive feedback
Cards organize complex information into digestible chunks

Tables & Structured Data

Clean, bordered tables with alternating row colors
Responsive table design for mobile compatibility
Headers clearly distinguished from body content

5. Content Formatting
Alert Boxes & Callouts
Multiple alert types for different message priorities:

💡 TIP: Helpful suggestions (blue/cyan background)
⚠️ IMPORTANT: Critical information (red/orange background)
ℹ️ NOTE: Additional context (neutral background)

Code Blocks

Syntax highlighting for readability
Copy button for convenience
Bordered containers with subtle background colors

Blockquotes

Left border accent for visual distinction
Italic text for emphasis
Used sparingly for impactful statements

6. Navigation & Wayfinding
Breadcrumb Navigation

Clear hierarchical path display
Clickable ancestors for easy backtracking

Journey Navigation

Sidebar shows related labs in sequence
Progress indication through visual markers
Next/Previous navigation at bottom of content

Sticky Elements

Fixed top navigation bar
Sticky table of contents
Persistent search functionality

7. Interactive Elements
Button Design

Primary action buttons: High contrast, filled backgrounds
Secondary buttons: Outlined or ghost style
Hover states: Subtle color shifts and shadows
Clear call-to-action hierarchy

Link Styling

Underlined on hover for accessibility
Color differentiation from body text
Visited link states preserved

8. Spacing & Rhythm
Whitespace Strategy

Generous margins around major sections
Consistent padding within components
Clear separation between content blocks
Breathing room prevents cognitive overload

Vertical Rhythm

Consistent spacing units (likely 8px or 16px base)
Harmonious relationship between elements
Predictable visual flow

9. Accessibility Features
WCAG Compliance

Sufficient color contrast ratios
Focus indicators on interactive elements
Semantic HTML structure
Skip-to-content links
Screen reader-friendly markup

Keyboard Navigation

Tab order follows logical flow
Focus visible on all interactive elements
Keyboard shortcuts for common actions


Technical Implementation Observations
CSS Framework
The site likely uses a combination of:

Custom CSS for brand-specific styling
CSS Grid and Flexbox for layout
CSS Custom Properties (variables) for theming
Media Queries for responsive behavior

Performance Considerations

Optimized Assets: Compressed images and fonts
Critical CSS: Above-the-fold content prioritized
Lazy Loading: Images load as needed
Minimal Dependencies: Lightweight design reduces load time


Design Philosophy Summary
The Microsoft Copilot Studio Labs website embodies several key design principles:

Content-First Approach: All design decisions serve content readability and comprehension
Progressive Disclosure: Information revealed gradually to prevent overwhelming users
Consistency: Predictable patterns across all pages reduce cognitive load
Flexibility: Multiple themes and responsive design accommodate diverse user preferences
Accessibility: Inclusive design ensures usability for all visitors
Professional Aesthetic: Clean, modern look reinforces Microsoft brand trust


### END OF INSTRUCTIONS
