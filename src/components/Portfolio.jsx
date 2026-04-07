import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { PORTFOLIO, CATEGORIES } from '../data/content';

export default function Portfolio() {
  const ref = useReveal();
  const [activeCat, setActiveCat] = useState('sve');
  const [lightbox, setLightbox] = useState(null);
  const filtered = activeCat === 'sve' ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === activeCat);

  return (
    <section id="portfolio" ref={ref} style={{ padding: '120px 32px', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>
            Portfolio
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)' }}>
            Izabrani radovi
          </h2>
          <div className="section-divider" style={{ marginTop: 20 }} />
        </div>

        {/* Category filters */}
        <div className="reveal reveal-delay-1" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCat(c.key)}
              style={{
                padding: '10px 24px',
                background: activeCat === c.key ? 'var(--charcoal)' : 'transparent',
                color: activeCat === c.key ? 'var(--ivory)' : 'var(--warm-gray)',
                border: `1px solid ${activeCat === c.key ? 'var(--charcoal)' : 'rgba(138,130,120,0.3)'}`,
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s var(--ease-out)',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="reveal photo-frame gallery-img-wrap"
              style={{ transitionDelay: `${Math.min(i * 0.07, 0.4)}s`, cursor: 'pointer' }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: item.cat === 'portreti' ? '3/4' : '4/3',
                  objectFit: 'cover',
                  objectPosition: item.pos || 'center',
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#kontakt" className="btn-outline">
            Kontaktiraj me za ceo portfolio <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            aria-label="Zatvori"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
