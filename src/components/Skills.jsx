import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Palette, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  Code2: Code2,
  Database: Database,
  Cpu: Cpu,
  Globe: Globe,
  Palette: Palette,
  Megaphone: Megaphone,
};

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Programming', 'Data Science', 'AI / Computer Vision', 'Web', 'Creative', 'Marketing'];

  const filteredCategories = filter === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Core technical foundation focused on Data Science, AI and Computer Vision, augmented by web development and creative capabilities.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? '600' : '500',
                    border: isSelected ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                    background: isSelected ? 'var(--bg-badge)' : 'var(--bg-card)',
                    color: isSelected ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textTransform: 'capitalize',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {cat === 'all' ? 'All Skills' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
          className="skills-grid"
        >
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isDataOrAI = cat.category.includes('Data') || cat.category.includes('AI');

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="card-base"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: isDataOrAI ? '1px solid var(--border-featured)' : '1px solid var(--border-subtle)',
                  background: isDataOrAI ? 'var(--bg-card-featured)' : 'var(--bg-card)',
                  boxShadow: isDataOrAI ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: isDataOrAI ? 'var(--bg-badge)' : 'var(--bg-subtle)',
                        border: isDataOrAI ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isDataOrAI ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        {cat.category}
                      </h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {cat.description}
                      </span>
                    </div>
                  </div>

                  {isDataOrAI && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-badge)',
                        color: 'var(--accent-indigo)',
                        border: '1px solid var(--border-accent)',
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Core Focus
                    </span>
                  )}
                </div>

                {/* Skills list inside category */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                  }}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-subtle)',
                        transition: 'background 0.2s',
                      }}
                      className="skill-item-row"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            width: '4px',
                            height: '14px',
                            borderRadius: '2px',
                            background: skill.status === 'Currently Learning' ? 'var(--accent-cyan)' : 'var(--accent-indigo)',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>

                      {/* Status / Level pill */}
                      {skill.status === 'Currently Learning' ? (
                        <span className="badge-learning">
                          <span className="badge-learning-dot" />
                          Currently Learning
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                            background: 'var(--bg-card)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          {skill.level || skill.status || 'Active'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-item-row:hover {
          background: var(--bg-subtle-hover) !important;
          border-color: var(--border-hover) !important;
        }
      `}</style>
    </section>
  );
}
