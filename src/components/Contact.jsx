import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Calendar, Heart, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  background: 'var(--ivory)',
  border: '1px solid rgba(196,169,125,0.2)',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 300,
  color: 'var(--charcoal)',
  transition: 'border-color 0.3s ease',
};

const CONTACT_INFO = [
  { icon: Phone, label: 'Telefon', value: '069/2219979', href: 'tel:+381692219979' },
  { icon: Mail, label: 'Email', value: 'sandrajakovljevic@yahoo.com', href: 'mailto:sandrajakovljevic@yahoo.com' },
  { icon: Instagram, label: 'Instagram', value: '@jakovsa', href: 'https://www.instagram.com/jakovsa/' },
  { icon: MapPin, label: 'Lokacija', value: 'Novi Sad, Srbija', href: null },
];

export default function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', event: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <section id="kontakt" ref={ref} style={{ padding: '120px 32px', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>Kontakt</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)' }}>Započnimo saradnju</h2>
          <div className="section-divider" style={{ marginTop: 20 }} />
        </div>

        {/* ── BOOKING CTA — full width, prominent ── */}
        <div
          className="reveal"
          style={{
            background: 'var(--charcoal)',
            padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)',
            marginBottom: 48,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Champagne accent line top */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--champagne), var(--champagne-light), var(--champagne))' }} />

          <style>{`
            .booking-inner { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
            @media (min-width: 700px) {
              .booking-inner { flex-direction: row; text-align: left; justify-content: space-between; }
            }
          `}</style>

          <div className="booking-inner">
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, justifyContent: 'center' }}>
                <Calendar size={28} strokeWidth={1.2} style={{ color: 'var(--champagne)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: 'var(--ivory)' }}>
                  Zakažite termin online
                </h3>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 9,
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--charcoal)',
                  background: 'var(--champagne)',
                  padding: '4px 10px',
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                }}>Uskoro</span>
              </div>
              <style>{`
                @media (min-width: 700px) {
                  .booking-inner > div:first-child > div:first-child { justify-content: flex-start !important; }
                }
              `}</style>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--warm-gray-light)', lineHeight: 1.6, maxWidth: 480 }}>
                Izaberite termin koji vam odgovara direktno preko našeg sistema za zakazivanje — brzo, jednostavno i bez čekanja.
              </p>
            </div>
            <button
              className="btn-primary"
              style={{
                background: 'var(--champagne)',
                color: 'var(--white)',
                padding: '18px 48px',
                fontSize: 14,
                flexShrink: 0,
                letterSpacing: '0.18em',
                opacity: 0.6,
                cursor: 'default',
              }}
              disabled
            >
              <Calendar size={16} /> Uskoro dostupno
            </button>
          </div>
        </div>

        {/* ── OR divider ── */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(196,169,125,0.2)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: 16, fontStyle: 'italic', color: 'var(--warm-gray-light)' }}>ili mi pišite direktno</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(196,169,125,0.2)' }} />
        </div>

        {/* ── Contact info + Form grid ── */}
        <style>{`
          .contact-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
          @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1.8fr; } }
        `}</style>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="reveal">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href || '#'}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(196,169,125,0.1)',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--white)', border: '1px solid rgba(196,169,125,0.2)', flexShrink: 0 }}>
                  <Icon size={18} strokeWidth={1.2} style={{ color: 'var(--champagne)' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--warm-gray-light)', marginBottom: 2 }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, color: 'var(--charcoal)' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Message form */}
          <div className="reveal reveal-delay-1">
            {submitted ? (
              <div style={{ background: 'var(--white)', padding: 48, textAlign: 'center', border: '1px solid rgba(196,169,125,0.2)', animation: 'scaleIn 0.5s var(--ease-out)' }}>
                <Heart size={36} strokeWidth={1} style={{ color: 'var(--champagne)', marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 12 }}>Hvala vam!</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--warm-gray)', lineHeight: 1.7 }}>
                  Vaša poruka je uspešno poslata. Javim vam se u najkraćem roku!
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <input placeholder="Vaše ime" style={inputStyle} value={formData.name} onChange={handleChange('name')} />
                  <input placeholder="Email" type="email" style={inputStyle} value={formData.email} onChange={handleChange('email')} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <input placeholder="Telefon" type="tel" style={inputStyle} value={formData.phone} onChange={handleChange('phone')} />
                  <select
                    style={{ ...inputStyle, color: formData.event ? 'var(--charcoal)' : 'var(--warm-gray-light)', appearance: 'none' }}
                    value={formData.event}
                    onChange={handleChange('event')}
                  >
                    <option value="">Tip događaja</option>
                    <option value="vencanje">Venčanje</option>
                    <option value="krstenje">Krštenje</option>
                    <option value="rodjendan">Rođendan</option>
                    <option value="portret">Portret sesija</option>
                    <option value="devojacko">Devojačko veče</option>
                    <option value="drugo">Drugo</option>
                  </select>
                </div>
                <textarea
                  placeholder="Ispričajte mi o vašem posebnom danu..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  value={formData.message}
                  onChange={handleChange('message')}
                />
                <button className="btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setSubmitted(true)}>
                  Pošalji poruku <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
