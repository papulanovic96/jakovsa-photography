import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="pocetna"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--ivory)',
        overflow: 'hidden',
      }}
    >
      {/* Background radials */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(196,169,125,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(196,169,125,0.04) 0%, transparent 50%)`,
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '0 32px',
          maxWidth: 900,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Logo mark */}
        <div style={{ animation: 'fadeIn 1s ease 0.2s both', marginBottom: 32 }}>
          <img
            src="/logos/jakovsa-frame-mark.svg"
            alt=""
            style={{ width: 56, height: 56, margin: '0 auto', opacity: 0.7 }}
          />
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            color: 'var(--charcoal)',
            letterSpacing: '0.08em',
            lineHeight: 1.05,
            animation: 'heroTextReveal 1.2s var(--ease-out) 0.3s both',
          }}
        >
          JAKOVSA
        </h1>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, var(--champagne), transparent)',
            margin: '20px auto',
            animation: 'lineGrow 1s var(--ease-out) 0.8s both',
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.4vw, 14px)',
            fontWeight: 300,
            color: 'var(--warm-gray)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            animation: 'fadeInUp 0.8s var(--ease-out) 1s both',
          }}
        >
          Photography
        </p>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(20px, 3vw, 30px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--charcoal-light)',
            marginTop: 36,
            lineHeight: 1.4,
            animation: 'fadeInUp 0.8s var(--ease-out) 1.2s both',
          }}
        >
          Zabeleži najlepše trenutke svog života
        </p>

        {/* CTAs */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s var(--ease-out) 1.5s both',
          }}
        >
          <a href="#portfolio" className="btn-primary">Pogledaj portfolio</a>
          <a href="#kontakt" className="btn-outline">Zakaži termin</a>
        </div>

        {/* Bottom tagline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 300,
            color: 'var(--warm-gray-light)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginTop: 60,
            animation: 'fadeIn 1s ease 2s both',
          }}
        >
          Autentično &nbsp;·&nbsp; Elegantno &nbsp;·&nbsp; Bezvremenski
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: 'fadeIn 1s ease 2.5s both',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'var(--warm-gray-light)',
            textTransform: 'uppercase',
          }}
        >
          Skroluj
        </span>
        <ChevronDown size={16} style={{ color: 'var(--warm-gray-light)', animation: 'float 2s ease infinite' }} />
      </div>
    </section>
  );
}
