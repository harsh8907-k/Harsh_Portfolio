import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationHistory } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Formal degrees in Computer Applications and Data Science building the rigorous theoretical and practical groundwork.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Timeline Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '23px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-indigo), var(--accent-cyan), var(--border-subtle))',
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationHistory.map((item, index) => {
              const isCurrent = item.status.includes('Currently');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem',
                    position: 'relative',
                  }}
                  className="timeline-row"
                >
                  {/* Timeline Node Indicator */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--accent-gradient)' : 'var(--bg-card)',
                      border: isCurrent ? '3px solid var(--bg-primary)' : '2px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: isCurrent ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'var(--shadow-sm)',
                    }}
                  >
                    <GraduationCap size={22} color={isCurrent ? '#FFFFFF' : 'var(--text-secondary)'} />
                  </div>

                  {/* Card Content */}
                  <div
                    className="card-base"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      background: isCurrent ? 'var(--bg-card-featured)' : 'var(--bg-card)',
                      border: isCurrent ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                      boxShadow: isCurrent ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    }}
                  >
                    {/* Header Row */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        {item.degree}
                      </h3>

                      {/* Status / Score pill */}
                      {item.score ? (
                        <span
                          style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            background: 'rgba(16, 185, 129, 0.12)',
                            color: '#10B981',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            fontSize: '0.78rem',
                            fontWeight: '700',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          Score: {item.score}
                        </span>
                      ) : (
                        <span className="badge-learning">
                          <span className="badge-learning-dot" />
                          {item.status}
                        </span>
                      )}
                    </div>

                    {/* University & Location */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1.25rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <span style={{ fontWeight: '600', color: 'var(--accent-indigo)' }}>
                        {item.institution}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} color="var(--accent-cyan)" />
                        {item.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={13} />
                        {item.period}
                      </span>
                    </div>

                    {/* Academic Focus Highlights */}
                    <div
                      style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                      }}
                    >
                      {item.focus.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <CheckCircle2 size={14} color="var(--accent-indigo)" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
