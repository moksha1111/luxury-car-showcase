# Aurum — Luxury Car Showcase

A fully responsive luxury car showcase website built with React 18, Vite, and Tailwind CSS v3. Dark theme with gold accents, scroll-triggered animations, and curated content across 7 sections.

<p align="center">
  <img src="./preview.png" alt="Aurum Luxury Car Showcase Preview" width="900" />
</p>

---

## Features

- **Fixed Navbar** — transparent on load, transitions to dark blur on scroll with mobile hamburger menu
- **Hero Section** — full-screen background image with animated headline and dual CTAs
- **What Defines Luxury** — 2-column layout with 4 feature items and an interior image
- **Types of Cars** — 3×2 image card grid with hover zoom and gold border reveal
- **Global Brands** — 5 brand groups organized by country (DE, UK, IT, JP, USA)
- **Iconic Models** — 5 alternating image/text rows with specs for each car
- **Beyond Luxury** — dark statement section with 3 animated stats
- **Testimonials** — 2 quote cards with client details
- **Footer** — 4-column layout with navigation links

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| PostCSS + Autoprefixer | — | CSS processing |
| Unsplash CDN | — | Image delivery |
| Google Fonts | — | Playfair Display + Inter |

---

## Project Structure

```
luxury-car-showcase/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useInView.js          # IntersectionObserver scroll animation hook
    ├── utils/
    │   └── images.js             # Unsplash URL helper
    ├── data/
    │   ├── features.js
    │   ├── carTypes.js
    │   ├── brands.js
    │   ├── models.js
    │   └── testimonials.js
    └── components/
        ├── layout/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        ├── ui/
        │   ├── GoldDivider.jsx
        │   ├── SectionHeading.jsx
        │   ├── FeatureItem.jsx
        │   ├── CarTypeCard.jsx
        │   ├── BrandGroup.jsx
        │   ├── ModelRow.jsx
        │   ├── StatItem.jsx
        │   └── TestimonialCard.jsx
        └── sections/
            ├── Hero.jsx
            ├── WhatDefines.jsx
            ├── TypesOfCars.jsx
            ├── GlobalBrands.jsx
            ├── IconicModels.jsx
            ├── BeyondLuxury.jsx
            └── Testimonials.jsx
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/luxury-car-showcase.git

# Navigate into the project
cd luxury-car-showcase

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `gold` | `#C9A84C` | Accents, borders, headings |
| `gold-light` | `#E2C97E` | Hover states |
| `gold-dark` | `#9A7A2E` | Pressed states |
| `dark` | `#0a0a0a` | Page background |
| `dark-card` | `#111111` | Card backgrounds |
| `dark-surface` | `#1a1a1a` | Section alternates |

### Typography

- **Headings** — Playfair Display (serif)
- **Body** — Inter (sans-serif)

### Animations

- `fade-up` — elements animate in on scroll via `useInView` hook (IntersectionObserver)
- `shimmer` — background shimmer effect
- Hover transitions on all interactive cards

---

## Sections Overview

| # | Section | Description |
|---|---|---|
| 1 | Hero | Full-screen car background, serif headline, gold CTA buttons |
| 2 | What Defines Luxury | Philosophy statement + 4 feature items + interior image |
| 3 | Types of Cars | 6 car category cards with image overlays |
| 4 | Global Brands | 25+ brands grouped by country with flag icons |
| 5 | Iconic Models | 5 detailed car profiles with alternating layout |
| 6 | Beyond Luxury | Stats — 127+ models, 38 countries, 25 years |
| 7 | Testimonials | 2 client quotes with attribution |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | 375px | Single column, stacked sections |
| Tablet | 768px | 2-column grids |
| Desktop | 1440px | Full multi-column layouts |

---

## Images

All images are served from the **Unsplash CDN** — no local image assets required.

```js
// src/utils/images.js
export function unsplashUrl(id, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
```

Images are lazy-loaded and automatically served in WebP/AVIF format via the `auto=format` parameter.

---

## License

This project is open source and available under the [MIT License](LICENSE).
