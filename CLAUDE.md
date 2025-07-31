# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js blog built with the Tailwind NextJS Starter Blog template. It uses:
- Next.js 15.2.4 with App Router and TypeScript
- Tailwind CSS v4 for styling
- Contentlayer2 for MDX-based content management
- Yarn as the package manager

## Essential Commands

### Development
```bash
yarn dev          # Start development server on http://localhost:3000
yarn build        # Build for production (includes RSS generation)
yarn serve        # Serve production build locally
```

### Code Quality
```bash
yarn lint         # Run ESLint with auto-fix
```

### Deployment
The site is configured for GitHub Pages deployment via GitHub Actions. Pushing to the main branch triggers automatic deployment.

## Architecture Overview

### Content Management
- Blog posts are stored as MDX files in `/data/blog/`
- Author profiles are in `/data/authors/`
- Site configuration is in `/data/siteMetadata.js`
- Contentlayer processes MDX files and generates type-safe content objects

### Routing Structure
- `/app/page.tsx` - Homepage showing blog posts
- `/app/blog/[...slug]/page.tsx` - Individual blog post pages
- `/app/tags/[tag]/page.tsx` - Tag filtering pages
- `/app/projects/page.tsx` - Projects showcase
- `/app/about/page.tsx` - About page

### Key Configuration Files
- `/contentlayer.config.ts` - Defines content schemas and MDX processing
- `/next.config.js` - Next.js configuration with Contentlayer integration
- `/data/siteMetadata.js` - Site-wide configuration (title, description, social links, analytics)

### Styling System
- Tailwind CSS v4 with custom configuration in `/css/tailwind.css`
- Theme colors defined using CSS variables for light/dark mode support
- Typography plugin for content formatting

### Build Process
1. Next.js builds the app with static export enabled
2. Post-build script (`/scripts/postbuild.mjs`) generates RSS feeds
3. GitHub Actions deploys to GitHub Pages on push to main

## Development Notes

### Adding New Blog Posts
1. Create MDX file in `/data/blog/` with frontmatter (title, date, tags, summary)
2. Use existing posts as templates for frontmatter structure
3. Draft posts can be marked with `draft: true` in frontmatter

### Customization Points
- Site metadata: `/data/siteMetadata.js`
- Navigation links: `/data/headerNavLinks.ts`
- Color scheme: CSS variables in `/css/tailwind.css`
- Page layouts: `/layouts/` directory

### Environment Variables
- Not using NODE_ENV in Next.js, use APP_ENV instead
- Analytics and comment system keys configured in siteMetadata.js