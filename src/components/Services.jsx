import { useState } from 'react';
import { Heart, Sparkles, Users, PartyPopper, Check, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SERVICES } from '../data/content';

const ICONS = { Heart, Sparkles, Users, PartyPopper };

export default function Services() {
  const ref = useReveal();
  const [activeKey, setActiveKey] = useState('vencanja');
  const activeService = SERVICES.find((s) => s.key === activeKey);

  return (
    <section id="usluge" ref={ref} style={{ padding: '120px 32px', background: 'var(--white)' }}>
      <style>{`
        .pkg-card {
          background: var(--ivory);
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
          display: flex;
          flex-direction: column;
        }
        .pkg-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .pkg-card.featured {
          background: var(--charcoal);
        }
        .pkg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 900px) {
          .pkg-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .pkg-animate {
          animation: pkgFadeIn 0.5s var(--ease-out) both;
        }
        @keyframes pkgFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .svc-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          cursor: pointer;
          border: none;
          background: none;
          transition: all 0.3s var(--ease-out);
          position: relative;
        }
        .svc-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--champagne);
          transition: width 0.3s var(--ease-out);
        }
        .svc-tab.active::after { width: 60%; }
        .svc-tab:hover::after { width: 40%; }
        .svc-tabs-wrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>Usluge</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)' }}>Šta nudim</h2>
          <div className="section-divider" style={{ marginTop: 20 }} />
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-delay-1 svc-tabs-wrap">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            const isActive = s.key === activeKey;
            return (
              <button
                key={s.key}
                className={`svc-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveKey(s.key)}
              >
                <Icon
                  size={22}
                  strokeWidth={1.2}
                  style={{ color: isActive ? 'var(--champagne)' : 'var(--warm-gray-light)', transition: 'color 0.3s ease' }}
                />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--charcoal)' : 'var(--warm-gray)',
                  transition: 'color 0.3s ease',
                }}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active category description */}
        {activeService && (
          <div key={activeKey} style={{ textAlign: 'center', marginBottom: 40, animation: 'pkgFadeIn 0.4s var(--ease-out)' }}>
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 18,
              fontStyle: 'italic',
              color: 'var(--warm-gray)',
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              {activeService.desc}
            </p>
          </div>
        )}

        {/* Package cards */}
        {activeService && (
          <div className="pkg-grid" key={activeKey + '-pkgs'}>
            {activeService.packages.map((pkg, i) => {
              const isFeatured = pkg.tag === 'Najpopularniji';

              return (
                <div
                  key={pkg.name}
                  className={`pkg-card pkg-animate ${isFeatured ? 'featured' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isFeatured ? 3 : 2,
                    background: isFeatured
                      ? 'var(--champagne)'
                      : 'linear-gradient(90deg, var(--champagne), var(--champagne-light), var(--champagne))',
                  }} />

                  {/* Tag badge */}
                  {pkg.tag && (
                    <div style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      background: isFeatured ? 'var(--champagne)' : 'transparent',
                      color: isFeatured ? 'var(--white)' : 'var(--champagne)',
                      border: isFeatured ? 'none' : '1px solid var(--champagne)',
                    }}>
                      {pkg.tag}
                    </div>
                  )}

                  {/* Package name */}
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    fontWeight: 400,
                    color: isFeatured ? 'var(--ivory)' : 'var(--charcoal)',
                    marginBottom: 8,
                    marginTop: pkg.tag ? 20 : 0,
                  }}>
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: 'var(--champagne)',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}>
                    {pkg.price}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 300,
                    color: isFeatured ? 'var(--warm-gray-light)' : 'var(--warm-gray)',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}>
                    {pkg.desc}
                  </p>

                  {/* Features */}
                  <div style={{ borderTop: `1px solid ${isFeatured ? 'rgba(196,169,125,0.2)' : 'rgba(196,169,125,0.15)'}`, paddingTop: 20, marginBottom: 28, flex: 1 }}>
                    {pkg.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                        <Check
                          size={14}
                          strokeWidth={2}
                          style={{
                            color: 'var(--champagne)',
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 13,
                          fontWeight: 300,
                          color: isFeatured ? 'rgba(248,244,239,0.8)' : 'var(--charcoal-light)',
                          lineHeight: 1.4,
                        }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#kontakt"
                    className={isFeatured ? 'btn-primary' : 'btn-outline'}
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      ...(isFeatured ? {
                        background: 'var(--champagne)',
                        color: 'var(--white)',
                      } : {}),
                    }}
                  >
                    Pošalji upit <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom note */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 16,
            fontStyle: 'italic',
            color: 'var(--warm-gray)',
            lineHeight: 1.6,
          }}>
            Svaki paket može da se prilagodi vašim željama — javite mi se i napravićemo savršenu ponudu za vas.
          </p>
        </div>
      </div>
    </section>
  );
}
