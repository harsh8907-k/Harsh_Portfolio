import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ScanFace, UserCheck, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Sparkles, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProject } from '../data/portfolio';

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      id: 'camera',
      icon: Camera,
      title: '01. Optical Capture',
      desc: 'High-frame-rate webcam capture streams video buffer into OpenCV processing loop.',
      detail: 'Frames are pre-processed, downscaled, and converted into grayscale/RGB matrices for feature extraction.',
      badge: 'OpenCV cv2.VideoCapture',
      accent: '#6366F1'
    },
    {
      id: 'detection',
      icon: ScanFace,
      title: '02. Face Detection & Landmarking',
      desc: 'Detects facial bounding boxes and calculates 68-point spatial facial landmarks.',
      detail: 'Haar Cascade & deep neural embeddings normalize lighting, pose yaw, and facial pitch variations.',
      badge: 'Spatial Bounding Matrix',
      accent: '#38BDF8'
    },
    {
      id: 'identification',
      icon: UserCheck,
      title: '03. Identity Vector Matching',
      desc: '128-dimensional embedding vectors are matched against verified student database encodings.',
      detail: 'Computes Euclidean distance metric; matches beneath threshold are classified as positive identification.',
      badge: 'Cosine / Euclidean Metric',
      accent: '#818CF8'
    },
    {
      id: 'recording',
      icon: CheckCircle2,
      title: '04. Automated Attendance Log',
      desc: 'Attendance is recorded automatically with timestamps and duplicate prevention logic.',
      detail: 'Updates the relational database in real-time, eliminating manual roll-call error completely.',
      badge: 'Automated DB Commit',
      accent: '#10B981'
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Capstone Implementation</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end computer vision attendance monitoring system replacing manual attendance with real-time biometric identification.
          </p>
        </div>

        {/* Large Premium Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-glass"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--border-accent)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Top Metadata Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.35rem',
                }}
              >
                <Sparkles size={14} />
                {featuredProject.type}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {featuredProject.title}
              </h3>
            </div>

            {/* Project Tech Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
              }}
            >
              {featuredProject.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description Points */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
            className="points-grid"
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {featuredProject.description}
                </p>
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {featuredProject.highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Abstract Architecture Pipeline Visual */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Terminal size={14} color="var(--accent-indigo)" />
                Pipeline Architecture Flow (Click nodes to inspect)
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                Step {activeStep + 1} of 4 Active
              </span>
            </div>

            {/* Architecture Node Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
              className="pipeline-grid"
            >
              {steps.map((st, index) => {
                const Icon = st.icon;
                const isSelected = activeStep === index;
                return (
                  <div
                    key={st.id}
                    onClick={() => setActiveStep(index)}
                    style={{
                      padding: '1.25rem 1rem',
                      borderRadius: '12px',
                      background: isSelected ? 'var(--bg-badge)' : 'var(--bg-subtle)',
                      border: isSelected ? `1px solid ${st.accent}` : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                    }}
                    className="pipeline-card"
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: isSelected ? st.accent : 'var(--bg-card)',
                        color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.85rem',
                        transition: 'all 0.2s ease',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <h4
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {st.title}
                    </h4>

                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.45',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {st.desc}
                    </p>

                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: isSelected ? st.accent : 'var(--text-muted)',
                        display: 'inline-block',
                        fontWeight: isSelected ? '700' : '500',
                      }}
                    >
                      {st.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Active Step Deep Dive Box */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.15rem 1.5rem',
                borderRadius: '10px',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={20} color={steps[activeStep].accent} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                    Component Focus: {steps[activeStep].title}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                    {steps[activeStep].detail}
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: steps[activeStep].accent,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  fontWeight: '600',
                }}
              >
                Pipeline Verified
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={featuredProject.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.86rem' }}
                id="view-github-repo-btn"
              >
                <GithubIcon size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="btn-secondary"
                style={{ cursor: 'pointer', padding: '0.65rem 1.4rem', fontSize: '0.86rem' }}
                id="view-project-details-btn"
              >
                <span>Project Architecture Info</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Completed under Atmiya University BCA Curriculum (2023 - 2026)
            </span>
          </div>
        </motion.div>
      </div>

      {/* Academic Project Info Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="card-base"
            style={{
              maxWidth: '560px',
              width: '100%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-accent)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                Attendance Monitoring System
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              This capstone project was engineered using <strong>Python, Java, HTML, CSS, JavaScript</strong>, and <strong>Computer Vision</strong> algorithms to create an automated, contactless biometric attendance pipeline.
            </p>

            <div
              style={{
                padding: '1rem',
                borderRadius: '8px',
                background: 'var(--bg-badge)',
                border: '1px solid var(--border-accent)',
                marginBottom: '1.5rem',
              }}
            >
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-indigo)', marginBottom: '0.35rem', fontWeight: '600' }}>
                GitHub Repository:
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontFamily: 'var(--font-mono)' }}>
                github.com/harsh8907-k/attendance-monitoring-system
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a
                href={featuredProject.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={14} />
                <span>Open GitHub Repository</span>
                <ExternalLink size={13} />
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="btn-secondary"
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pipeline-card:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.4) !important;
        }
        @media (max-width: 900px) {
          .pipeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .points-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .pipeline-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
