import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ExternalLink, GraduationCap, Sparkles, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolio';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Personal positioning & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* University Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                color: 'var(--accent-indigo)',
                fontSize: '0.82rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.1)',
              }}
            >
              <GraduationCap size={15} color="#818CF8" />
              <span>{personalInfo.badge}</span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#06B6D4',
                  boxShadow: '0 0 8px #06B6D4',
                }}
              />
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Turning Data Into{' '}
              <span className="text-gradient">Intelligent Solutions.</span>
            </h1>

            {/* Alternative Supporting Headline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontWeight: '600',
                color: '#06B6D4',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              <Sparkles size={16} />
              <span>{personalInfo.heroHeadline}</span>
            </div>

            {/* Narrative Bio */}
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
                id="hero-cta-projects"
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
                id="hero-cta-contact"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links & Verified Contacts */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>

              {/* Email Quick Action */}
              <div style={{ position: 'relative' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                  }}
                  onMouseEnter={() => setTooltip('email')}
                  onMouseLeave={() => setTooltip(null)}
                  title="Send Email"
                  aria-label="Send email to Harsh Sanchaniya"
                >
                  <Mail size={15} color="#06B6D4" />
                  <span className="font-mono" style={{ fontSize: '0.78rem' }}>
                    {personalInfo.email}
                  </span>
                </a>
              </div>

              {/* GitHub Link (Direct to harsh8907-k) */}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                title="GitHub Profile: harsh8907-k"
                aria-label="GitHub Profile (harsh8907-k)"
                id="hero-github-link"
              >
                <GithubIcon size={17} />
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive AI & Data Card Visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <HeroVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
