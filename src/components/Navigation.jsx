import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navigation({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(248,244,239,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,169,125,0.15)' : 'none',
        transition: 'all 0.5s var(--ease-smooth)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#pocetna" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logos/jakovsa-horizontal.svg"
            alt="Jakovsa Photography"
            style={{ height: 36 }}
          />
        </a>

        {/* Desktop links */}
        <div className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--charcoal)',
          }}
          aria-label="Meni"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <style>{`
          .nav-desktop {
            display: none;
            align-items: center;
            gap: 36;
          }
          .nav-hamburger { display: block; }

          @media (min-width: 901px) {
            .nav-desktop { display: flex !important; gap: 36px; }
            .nav-hamburger { display: none !important; }
          }
        `}</style>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(248,244,239,0.98)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            padding: '24px 32px 32px',
            borderBottom: '1px solid rgba(196,169,125,0.2)',
            animation: 'slideDown 0.3s var(--ease-out)',
          }}
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                color: 'var(--charcoal)',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(196,169,125,0.12)' : 'none',
                animation: `fadeInUp 0.4s var(--ease-out) ${i * 0.05}s both`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
