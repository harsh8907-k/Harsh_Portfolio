import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

export default function Stats() {
  return (
    <section style={{ padding: '2rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', background: 'rgba(11, 11, 15, 0.5)' }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
          className="stats-grid"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.25s ease',
              }}
              className="stat-card"
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.35rem',
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                }}
              >
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(99, 102, 241, 0.25) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
