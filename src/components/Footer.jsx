import { Phone, Instagram, MapPin } from 'lucide-react';

const footerLinks = ['Početna', 'O meni', 'Portfolio', 'Usluge', 'Blog', 'Kontakt'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <style>{`
          .footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
          @media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
          .footer-link { display: block; font-family: var(--font-body); font-size: 14px; font-weight: 300; color: var(--warm-gray-light); padding: 6px 0; transition: color 0.3s ease; }
          .footer-link:hover { color: var(--champagne); }
        `}</style>

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src="/logos/jakovsa-dark.svg" alt="Jakovsa Photography" style={{ height: 48, marginBottom: 20 }} />
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: 17, fontStyle: 'italic', color: 'var(--warm-gray-light)', lineHeight: 1.6, maxWidth: 340 }}>
              Autentično. Elegantno. Bezvremenski.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 20 }}>Navigacija</p>
            {footerLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="footer-link">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 20 }}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Phone, text: '069/2219979', href: 'tel:+381692219979' },
                { icon: Instagram, text: '@jakovsa', href: 'https://www.instagram.com/jakovsa/' },
                { icon: MapPin, text: 'Novi Sad, Srbija', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href || '#'}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
                >
                  <Icon size={14} style={{ color: 'var(--champagne)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300, color: 'var(--warm-gray-light)' }}>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(196,169,125,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300, color: 'var(--warm-gray)' }}>
            © {new Date().getFullYear()} Jakovsa Photography. Sva prava zadržana.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 300, color: 'var(--warm-gray)', letterSpacing: '0.1em' }}>
            Sandra Jakovljević
          </p>
        </div>
      </div>
    </footer>
  );
}
