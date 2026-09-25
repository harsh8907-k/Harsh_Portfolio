import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '3.5rem 0 2.5rem 0',
        position: 'relative',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #111116, #1A1A24)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  color: '#38BDF8',
                }}
              >
                HS
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {personalInfo.heroHeadline}
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="Email Harsh Sanchaniya"
              title="Email"
            >
              <Mail size={17} />
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="GitHub Profile: harsh8907-k"
              title="GitHub Profile (harsh8907-k)"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: 'var(--accent-indigo)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 Harsh Sanchaniya. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Designed for Data Science & AI</span>
            <span>•</span>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
