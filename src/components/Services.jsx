import { Heart, Sparkles, Camera, Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SERVICES } from '../data/content';

const ICONS = { Heart, Sparkles, Camera, Star };

export default function Services() {
  const ref = useReveal();

  return (
    <section id="usluge" ref={ref} style={{ padding: '120px 32px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>Usluge</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)' }}>Šta nudim</h2>
          <div className="section-divider" style={{ marginTop: 20 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.title}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: 'var(--ivory)',
                  padding: '40px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--champagne), var(--champagne-light), var(--champagne))' }} />

                <Icon size={28} strokeWidth={1} style={{ color: 'var(--champagne)', marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 14 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>

                <div style={{ borderTop: '1px solid rgba(196,169,125,0.15)', paddingTop: 20 }}>
                  {s.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--champagne)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'var(--charcoal-light)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
