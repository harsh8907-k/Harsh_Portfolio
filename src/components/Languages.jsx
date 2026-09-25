import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LangIcon, Globe2 } from 'lucide-react';
import { languages } from '../data/portfolio';

export default function Languages() {
  return (
    <section style={{ padding: '2rem 0 4rem 0', position: 'relative' }}>
      <div className="section-container">
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            <LangIcon size={14} color="var(--accent-cyan)" />
            <span>Spoken & Written Communication</span>
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            Languages
          </h3>
        </div>

        {/* Language Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-base"
              style={{
                padding: '1.25rem',
                textAlign: 'center',
                background: 'var(--bg-card)',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '6px',
                  background: 'var(--bg-badge)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--accent-indigo)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                }}
              >
                {lang.flag}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {lang.name}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {lang.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
