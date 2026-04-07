import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { BLOG_POSTS } from '../data/content';

export default function Blog() {
  const ref = useReveal();

  return (
    <section id="blog" ref={ref} style={{ padding: '120px 32px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--champagne)', marginBottom: 12 }}>Blog</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--charcoal)' }}>Priče i saveti</h2>
          <div className="section-divider" style={{ marginTop: 20 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.12}s`,
                cursor: 'pointer',
                background: 'var(--ivory)',
                overflow: 'hidden',
                transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  style={{ width: '100%', height: 220, objectFit: 'cover', transition: 'transform 0.6s var(--ease-out)' }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--champagne)', padding: '4px 12px', border: '1px solid var(--champagne)' }}>
                    {post.tag}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--warm-gray-light)' }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300, color: 'var(--warm-gray)', lineHeight: 1.7 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20, fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--champagne)' }}>
                  Pročitaj više <ArrowRight size={13} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
