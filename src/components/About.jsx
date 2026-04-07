import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="o-meni" ref={ref} style={{ padding: '120px 32px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <style>{`
          .about-grid { display: grid; grid-template-columns: 1fr; gap: 64px; align-items: center; }
          @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1.2fr; } }
        `}</style>

        <div className="about-grid">
          {/* Sandra's portrait */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div className="photo-frame" style={{ maxWidth: 420, margin: '0 auto' }}>
              <img
                src="/photos/sandra-portrait.png"
                alt="Sandra Jakovljević — Jakovsa Photography"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
            {/* Decorative corner */}
            <div
              style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                border: '1px solid var(--champagne)',
                opacity: 0.2,
                zIndex: -1,
              }}
            />
          </div>

          {/* Text */}
          <div>
            <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>
              O meni
            </p>

            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.15, marginBottom: 28 }}>
              Sandra Jakovljević
            </h2>

            <div className="section-divider reveal reveal-delay-2" style={{ margin: '0 0 28px 0' }} />

            <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 300, color: 'var(--charcoal-light)', lineHeight: 1.8, marginBottom: 20 }}>
              Fotografija za mene nije samo posao — to je način na koji vidim svet. Svaki osmeh, svaki zagrljaj, svaka suza radosnica ima svoju priču, i moj zadatak je da je sačuvam zauvek.
            </p>

            <p className="reveal reveal-delay-3" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 300, color: 'var(--charcoal-light)', lineHeight: 1.8, marginBottom: 20 }}>
              Sa sedištem u Srbiji, specijalizovana sam za fotografisanje venčanja, krštenja, porodičnih portreta i svih posebnih prilika koje zaslužuju da budu ovековečene. Moj pristup je topao, opušten i diskretan — želim da budete potpuno u trenutku dok ja tiho beležim magiju.
            </p>

            <p className="reveal reveal-delay-3" style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontStyle: 'italic', color: 'var(--champagne)', marginTop: 28, lineHeight: 1.5 }}>
              „Verujem da najlepše fotografije nastaju kada se ljudi osećaju slobodno da budu ono što jesu."
            </p>

            <div className="reveal reveal-delay-4" style={{ marginTop: 36, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[
                { num: '250+', label: 'Venčanja' },
                { num: '5+', label: 'God. iskustva' },
                { num: '100%', label: 'Zadovoljnih klijenata' },
              ].map((s) => (
                <div key={s.label}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 300, color: 'var(--champagne)' }}>{s.num}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--warm-gray)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
