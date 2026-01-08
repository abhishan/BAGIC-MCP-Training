# Lab Page Generation Instructions

When provided with a new lab markdown file (e.g., `labs/lab02.md`), follow these instructions to generate a matching HTML training page and catalog entry.

## 1. HTML Reference Template
Use `_labs/lab01.html` as the master template for all new lab pages. Maintain the exact same:
- CSS Variables and Global Styles (including the **90% Width Adjustment**).
- Sticky Header and Lab Hero layout.
- Three-column layout (Progress Sidebar, Main Content, ToC Sidebar).
- Timer, Progress Tracking, and Confetti functionality.
- **Lightbox Functionality** for images.
- Theme switching logic.

## 2. Content Mapping

| Markdown Section | HTML Target |
| :--- | :--- |
| `# [Title]` | Hero `<h1>`, Page `<title>`, and Sidebar Title |
| `## Lab Details` Table | Left sidebar `.progress-box` (Level, Persona, Duration, Purpose) |
| `## Introduction` | `#introduction` section |
| `## Core Concepts` Table | `#concepts` section (expand table rows as needed) |
| `## Prerequisites` | `#prerequisites` section |
| `## Summary of Targets` | `#targets` section |
| `## Use Cases Covered` | `#use-cases` section |
| `## Instructions` Steps | `#instructions` section (Step A, B, C, etc.) |
| `## Test Your Understanding` | `#understanding` section (takeaways and reflection questions) |
| `## Summary of Learnings` | `#summary` section |
| `## Conclusions` | `#conclusions` section |
| `Badge Earned` Text | Sidebar `.summary-box` badge title and UI |

## 3. Image Handling
- Scan the markdown for image references like `![alt](path)`.
- Wrap each image in a responsive container:
  ```html
  <div class="lab-image">
      <img src="../labs/images/[subpath]/[filename].png" alt="Description">
  </div>
  ```
- **CRITICAL**: Only insert images explicitly mentioned in the markdown file.
- Ensure the JavaScript at the bottom of the template automatically initializes the Lightbox for these images.

## 4. Catalog Integration
After generating the lab HTML file (e.g., `_labs/lab02.html`), update `index.html` by adding a new card to the `<div class="grid">`:
- **Title**: Lab Title from MD.
- **Level**: Beginner/Intermediate/Advanced (determines the `.tag` class).
- **Time**: Duration from Lab Details.
- **Description**: Summary from the MD Introduction.
- **CTA**: Update the link to the newly created HTML file.

## 5. Output Location
Save the generated HTML file in the `_labs/` directory, naming it identically to the source markdown file (e.g., `lab02.md` -> `lab02.html`).
