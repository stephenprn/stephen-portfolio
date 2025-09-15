# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 3002)
- **Build**: `npm run build`
- **Type checking**: `npm run check-types` (runs TypeScript compiler without emitting files)
- **Linting**: `npm run check-lint` (ESLint for .ts, .tsx, .js files)
- **Format checking**: `npm run check-format` (Prettier)
- **Format code**: `npm run format` (Prettier write)
- **Full validation**: `npm run test-all` (runs format check, lint, type check, and build)

## Architecture Overview

This is a Next.js 15 portfolio website using the Pages Router architecture with French localization (fr locale).

### Key Architectural Patterns

**Component Structure**:

- Each component follows the pattern: `components/ComponentName/index.tsx` + `index.module.scss`
- Components use TypeScript with React.FC typing
- SCSS modules for styling with BEM-like class naming

**Import Aliases**:

- Uses `@/*` alias mapping to repository root (configured in tsconfig.json)
- All imports should use the alias: `@/components/...`, `@/constants`, etc.

**Page Structure**:

- Uses Next.js Pages Router with pages in `/pages` directory
- All pages wrap content in `<BasePage>` component which provides:
  - Header with navigation
  - Navigation bar
  - Footer
  - Interactive spotlight effect (desktop only, disabled on tablets/mobile)

**Icon System**:

- Centralized icon management in `components/Icon/index.tsx`
- Icons organized in `/social` and `/symbol` subdirectories
- Usage: `<Icon name="github" />` where name is from the ICONS object keys

**Styling**:

- Global styles in `/styles/global.scss` and `/styles/constants.scss`
- Component-specific styles as `.module.scss` files
- SCSS variables and constants defined in `/styles/constants.scss`
- Responsive design with `TABLET_BREAKPOINT` constant (768px)

### Key Files and Directories

- `/constants.ts` - Application constants (breakpoints, CSS class names)
- `/components/BasePage` - Main layout wrapper with spotlight effect
- `/components/Icon` - Centralized icon system
- `/pages/_app.tsx` - Next.js app wrapper with global styles and SEO meta tags
- `/styles/` - Global SCSS files and constants

### Development Notes

- Project configured for French content (title: "Stephen Perrin | développeur full-stack")
- Responsive design with tablet breakpoint at 768px
- Uses Husky for git hooks
- Spotlight mouse-following effect only enabled on desktop (screen width > 768px)
