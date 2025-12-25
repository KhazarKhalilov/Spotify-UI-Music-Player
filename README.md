# Welcome to Styling
***

# Spotify Design System (Minimal)

## Description
A minimal Spotify-inspired design system demo built with:
- Tailwind CSS (utility-first)
- Design tokens (CSS variables + tokens file)
- CSS Modules (for complex component styling)
- Light/Dark theme toggle with persistence

## Installation
```bash
npm install
```

## Usage
Usage
npm run dev
Open: http://localhost:3000

Structure

src/tokens/tokens.ts — design tokens

src/styles/PlayerBar.module.css — CSS Modules example

src/components/* — UI + player components

src/app/page.tsx — single page demo



### **File:** `spotify-design-system/SPOTIFY-DESIGN-INSIGHTS.md`

```md
# SPOTIFY-DESIGN-INSIGHTS

## Utility-first vs Component CSS
- Tailwind was used for layout, spacing, typography, and states.
- CSS Modules were used where a component needed custom visual effects (glow + gradient progress bar).

## Design Tokens
- Tokens are represented as CSS variables in `globals.css` for runtime theming.
- A `tokens.ts` file documents core design choices (radius/spacing/typography).

## Theme System
- Theme toggling is implemented by adding/removing the `dark` class on `<html>`.
- User preference is persisted via `localStorage`.

## Performance Notes
- Tailwind keeps styles predictable and reduces custom CSS.
- CSS Modules keep special effects scoped and avoid global CSS conflicts.
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
