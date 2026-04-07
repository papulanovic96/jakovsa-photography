# Jakovsa Photography — Dev Roadmap

## ✅ Done (v1.0)

- [x] Full single-page React + Vite site in Serbian
- [x] Hero, O meni, Portfolio, Usluge, Utisci, Blog, Kontakt sections
- [x] SVG logo suite (10 variations)
- [x] Sandra's portfolio photos integrated
- [x] Filterable gallery with lightbox
- [x] Testimonial carousel with crossfade
- [x] Responsive design (mobile + desktop)
- [x] Scroll-reveal animations
- [x] Vercel deployment config
- [x] SEO meta tags + Open Graph
- [x] Contact form (frontend)
- [x] Booking section placeholder (Coming Soon)


## 🔧 Phase 1 — Content & Polish (Next)

### Portfolio content
- [ ] Add more photos per category (aim for 6-8 per category minimum)
- [ ] **Punoletstva** — Sandra needs to provide photos for this category
- [ ] **Moje izložbe** — Curate Sandra's exhibition/personal work photos
- [ ] Consider adding photo captions/descriptions for SEO

### Service packages (waiting on Sandra)
Structure per category — each with 3 tiers:

```
Venčanja:
  ├── Paket "Uspomena"    — (basic: X hours, Y photos, online gallery)
  ├── Paket "Elegancija"  — (standard: full day, album, prints)
  └── Paket "Bezvremenski" — (premium: 2 photographers, video highlights, luxury album)

Krštenja:
  ├── Paket "Blagoslov"
  ├── Paket "Porodica"
  └── Paket "Kompletno"

Porodica:
  ├── Mini sesija (30 min)
  ├── Klasična sesija (1h)
  └── Premium sesija (2h + lokacije)

Punoletstva:
  ├── Paket "18"
  ├── Paket "Glamur"
  └── Paket "Spektakl"
```

- [ ] Create pricing page/section with toggle per category
- [ ] Each package card: name, description, what's included, price, CTA
- [ ] "Kontaktiraj me za custom paket" option

### Contact form backend
- [ ] Set up Supabase project
- [ ] Create `inquiries` table (name, email, phone, event_type, message, created_at)
- [ ] Wire form submission to Supabase
- [ ] Email notification to sandrajakovljevic@yahoo.com (Supabase Edge Function or webhook)

### About section
- [ ] Get a professional headshot of Sandra (current selfie is temporary)
- [ ] Sandra to write/approve her bio text


## 🌍 Phase 2 — English Language (i18n)

### Implementation plan
- [ ] Create `src/i18n/` with `sr.js` and `en.js` translation files
- [ ] Build `LanguageContext` provider
- [ ] Add SR/EN toggle in Navigation (flag icons or text)
- [ ] Translate all content:
  - Navigation labels
  - Hero taglines
  - About text
  - Service descriptions
  - Testimonials (keep original names, translate quotes)
  - Blog titles and excerpts
  - Contact form placeholders
  - Footer text
- [ ] Update `<html lang="">` dynamically
- [ ] SEO: add `hreflang` meta tags for both languages
- [ ] Store preference in localStorage


## 📅 Phase 3 — Skedily Integration

- [ ] Set up Skedily account for Sandra
- [ ] Configure services in Skedily (matching website categories)
- [ ] Embed Skedily booking widget or link to booking page
- [ ] Replace "Coming Soon" badge with live booking
- [ ] Add availability calendar preview on website
- [ ] Booking confirmation → email notification flow


## 📝 Phase 4 — Blog (CMS)

### Options (pick one)
1. **MDX on Next.js** — migrate from Vite to Next.js, markdown blog posts
2. **Supabase CMS** — store posts in DB, simple admin panel
3. **External CMS** — Contentful, Sanity, or Strapi headless CMS

### Blog features
- [ ] Post list page with pagination
- [ ] Individual post pages with rich text + images
- [ ] Category tags (Saveti, Inspiracija, Fotografija, Iza kulisa)
- [ ] Social sharing buttons
- [ ] SEO-friendly URLs (/blog/kako-odabrati-lokaciju-za-vencanje)


## 🎨 Phase 5 — Advanced Features

### Client gallery / Proofing
- [ ] Password-protected galleries per client
- [ ] Photo selection/favoriting
- [ ] Download high-res after approval
- [ ] Integration with cloud storage (Supabase Storage or S3)

### Instagram feed
- [ ] Embed latest Instagram posts in footer or dedicated section
- [ ] Use Instagram Basic Display API or embed widget

### Analytics
- [ ] Google Analytics 4 setup
- [ ] Track: page views, portfolio category clicks, form submissions, booking clicks
- [ ] Meta Pixel for potential FB/IG ad campaigns

### Performance
- [ ] Image optimization (WebP conversion, srcset for responsive images)
- [ ] Lazy loading with blur placeholder (like Next.js Image)
- [ ] Lighthouse audit → aim for 95+ scores
- [ ] Consider migrating to Next.js for SSR/SSG benefits

### SEO
- [ ] Structured data (JSON-LD) for LocalBusiness + Photographer
- [ ] Sitemap.xml generation
- [ ] robots.txt
- [ ] Google My Business integration
- [ ] Schema markup for reviews/testimonials

### Legal
- [ ] Privacy policy page (GDPR compliance)
- [ ] Cookie consent banner
- [ ] Terms of service


## 🚀 Phase 6 — Marketing & Growth

- [ ] Google Ads landing page variants
- [ ] Social proof: add Google Reviews widget
- [ ] Referral program section ("Preporuči prijatelju — 10% popust")
- [ ] Newsletter signup (Mailchimp or similar)
- [ ] Custom domain: jakovsa.com or jakovsaphotography.com


## Tech Stack Summary

| Layer | Current | Planned |
|-------|---------|---------|
| Frontend | React + Vite | Consider Next.js (Phase 4+) |
| Styling | Vanilla CSS + custom props | Same |
| Backend | None | Supabase (Phase 1) |
| Booking | Coming Soon | Skedily (Phase 3) |
| CMS | Static data | Supabase or MDX (Phase 4) |
| Hosting | Vercel | Vercel |
| Domain | TBD | jakovsa.com |
| Analytics | None | GA4 + Meta Pixel (Phase 5) |
| i18n | Serbian only | SR + EN (Phase 2) |
