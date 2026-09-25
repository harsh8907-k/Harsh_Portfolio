import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Film, Share2, Layers, Sparkles, Wand2 } from 'lucide-react';
import { creativeSkills } from '../data/portfolio';

const creativeIconMap = {
  'Graphic Design': Palette,
  'Video Editing': Film,
  'Content Creation': Wand2,
  'Digital Branding': Layers,
  'Social Media Marketing': Share2,
};

export default function Creative() {
  return (
    <section id="creative" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Multidisciplinary Palette</span>
          </div>
          <h2 className="section-title">
            Beyond <span className="text-gradient">Data</span>
          </h2>
          <p className="section-subtitle">
            Creative and visual storytelling capabilities that bridge technical algorithms with compelling digital presentation.
          </p>
        </div>

        {/* Creative Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
          className="creative-grid"
        >
          {creativeSkills.map((item, index) => {
            const Icon = creativeIconMap[item.title] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-base"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--bg-card)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--bg-badge)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-indigo)',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={19} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>

                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    display: 'block',
                  }}
                >
                  {item.tool}
                </span>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
