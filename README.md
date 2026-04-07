# Jakovsa Photography

Profesionalni sajt za fotografkinju Sandru Jakovljević.

## Tech Stack

- React 18 + Vite
- Lucide React (icons)
- Vanilla CSS with custom properties
- Vercel deployment

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
git init
git add .
git commit -m "initial commit"
# Push to GitHub, then import into Vercel
```

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
├── public/
│   ├── logos/          # SVG logo variations
│   └── photos/         # Sandra's portfolio photos
├── src/
│   ├── components/     # React components (Navigation, Hero, About, etc.)
│   ├── data/           # Site content (portfolio items, services, testimonials)
│   ├── hooks/          # Custom hooks (useReveal for scroll animations)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & animations
├── index.html          # HTML with SEO meta tags
├── vite.config.js
└── vercel.json         # SPA routing config
```

## TODO

- [ ] Replace About section placeholder with Sandra's actual portrait
- [ ] Connect Skedily for online booking
- [ ] Add more portfolio photos
- [ ] Set up contact form backend (Supabase / email service)
- [ ] Custom domain (jakovsa.com)
