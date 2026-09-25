import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, BookOpen, Layers, CheckCircle2, Award } from 'lucide-react';
import { personalInfo, currentlyLearning } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            A grounded look into my academic journey, data science pursuits, and digital skill set.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Authentic Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              margin: '0 auto',
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <div
              className="card-glass"
              style={{
                padding: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {/* Profile Image with gentle border glow */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1.25rem',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src="/harsh.jpeg"
                  alt="Harsh Sanchaniya - MSc Data Science Student"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="display:flex;height:100%;align-items:center;justify-content:center;background:var(--bg-card);flex-direction:column;gap:0.75rem;">
                        <div style="width:70px;height:70px;border-radius:50%;background:var(--bg-badge);display:flex;align-items:center;justify-content:center;color:var(--accent-indigo);font-size:1.8rem;font-weight:700;">HS</div>
                        <span style="font-size:0.85rem;color:var(--text-secondary);">Harsh Sanchaniya</span>
                      </div>
                    `;
                  }}
                />

                {/* Status Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '8px',
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                  <span style={{ fontWeight: '600' }}>Enrolled: MSc Data Science</span>
                </div>
              </div>

              {/* Identity & Location */}
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-indigo)', fontWeight: '600', marginBottom: '0.75rem' }}>
                REVA University • Bengaluru
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <MapPin size={13} color="var(--accent-cyan)" />
                <span>Bengaluru, Karnataka (Hometown: Rajkot)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio strictly matching resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Primary Bio Paragraph */}
            <div
              className="card-base"
              style={{
                marginBottom: '1.5rem',
                borderLeft: '4px solid var(--accent-indigo)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <GraduationCap size={18} color="var(--accent-indigo)" />
                Academic & Technical Foundation
              </h3>
              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.75',
                  marginBottom: '1rem',
                }}
              >
                {personalInfo.aboutIntro}
              </p>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                }}
              >
                {personalInfo.aboutCreative}
              </p>
            </div>

            {/* "Currently Learning" Area */}
            <div
              className="card-base"
              style={{
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                <BookOpen size={16} color="var(--accent-cyan)" />
                <span>Currently Developing Skills In:</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                }}
              >
                {currentlyLearning.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.95rem',
                      borderRadius: '8px',
                      background: 'var(--bg-badge)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--accent-cyan)',
                        boxShadow: '0 0 6px var(--accent-cyan)',
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
