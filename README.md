# Lumen Collective

> Fine Art & Commercial Photography

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Brooklyn-based photography studio specializing in commercial campaigns, editorial work, fine art prints, and portrait sessions. Crafting visual stories since 2018.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Image gallery showcase
- Customer testimonials
- Contact information & location

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, gallery, about, services, featured, testimonials, logos, cta
- **Work** (`/work`) — hero, gallery
- **About** (`/about`) — hero, content, team, gallery
- **Contact** (`/contact`) — hero, contact, map

## Project Structure

```
├── .env.example
├── _no_backend.txt
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── work/
│       └── page.tsx
├── components.json
├── components/
│   ├── CTABanner.tsx
│   ├── CategoryFilter.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── FooterMultiColumn.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroLamp.tsx
│   ├── HorizontalScroll.tsx
│   ├── ImageCard.tsx
│   ├── Lightbox.tsx
│   ├── LogoCloud.tsx
│   ├── LogoMarquee.tsx
│   ├── MasonryGallery.tsx
│   ├── Navbar.tsx
│   ├── NavbarSticky.tsx
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   ├── StatCounter.tsx
│   ├── TeamGrid.tsx
│   ├── TeamMember.tsx
│   ├── TestimonialCarousel.tsx
│   ├── TestimonialsGrid.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── effects/
│       │   └── lamp-effect.tsx
│       └── text/
│           └── flip-words.tsx
├── error.txt
├── lib/
│   ├── types.ts
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | `#FFFFFF` |
| Secondary | ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/000000?text=+) | `#1A1A1A` |
| Accent | ![#D4AF37](https://via.placeholder.com/15/D4AF37/000000?text=+) | `#D4AF37` |
| Background | ![#0A0A0A](https://via.placeholder.com/15/0A0A0A/000000?text=+) | `#0A0A0A` |

## Typography

- **Headings:** Space Grotesk
- **Body:** Inter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mlz5a4ms.git

# Navigate to the project
cd proj_mlz5a4ms

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mlz5a4ms)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
