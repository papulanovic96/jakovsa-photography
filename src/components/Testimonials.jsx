import { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 400);
  }, [active]);

  const next = useCallback(() => {
    goTo((active + 1) % TESTIMONIALS.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section id="utisci" ref={ref} style={{ padding: '120px 32px', background: 'var(--ivory)', position: 'relative', overflow: 'hidden' }}>
      {/* Background quote */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 400, color: 'var(--champagne)', opacity: 0.04, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
        „
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div className="reveal">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>Utisci</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)', marginBottom: 48 }}>Reči klijenata</h2>
        </div>

        {/* Testimonial content with crossfade */}
        <div
          className="reveal reveal-delay-1"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Quote size={32} strokeWidth={1} style={{ color: 'var(--champagne)', marginBottom: 24 }} />

          <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--charcoal-light)', lineHeight: 1.7, marginBottom: 32 }}>
            {t.text}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} fill="var(--champagne)" strokeWidth={0} />
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--charcoal)' }}>{t.name}</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'var(--warm-gray)', letterSpacing: '0.1em', marginTop: 4 }}>{t.event}</p>
        </div>

        {/* Navigation arrows + dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginTop: 32 }}>
          <button
            onClick={prev}
            style={{ background: 'none', border: '1px solid rgba(196,169,125,0.3)', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--champagne)'; e.currentTarget.style.background = 'var(--champagne)'; e.currentTarget.querySelector('svg').style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(196,169,125,0.3)'; e.currentTarget.style.background = 'none'; e.currentTarget.querySelector('svg').style.color = 'var(--warm-gray)'; }}
            aria-label="Prethodni utisak"
          >
            <ChevronLeft size={18} style={{ color: 'var(--warm-gray)', transition: 'color 0.3s ease' }} />
          </button>

          <div style={{ display: 'flex', gap: 10 }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: active === i ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: active === i ? 'var(--champagne)' : 'rgba(196,169,125,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s var(--ease-out)',
                }}
                aria-label={`Utisak ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{ background: 'none', border: '1px solid rgba(196,169,125,0.3)', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--champagne)'; e.currentTarget.style.background = 'var(--champagne)'; e.currentTarget.querySelector('svg').style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(196,169,125,0.3)'; e.currentTarget.style.background = 'none'; e.currentTarget.querySelector('svg').style.color = 'var(--warm-gray)'; }}
            aria-label="Sledeći utisak"
          >
            <ChevronRight size={18} style={{ color: 'var(--warm-gray)', transition: 'color 0.3s ease' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
