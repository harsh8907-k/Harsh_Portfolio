import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Activity, CheckCircle2, Database, Eye, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 'input', label: 'Input Stream', sub: 'Optical 30 FPS', x: 45, y: 70 },
    { id: 'detect', label: 'Face Landmark', sub: '128-D Vector', x: 175, y: 35 },
    { id: 'match', label: 'DB Query', sub: 'Cosine Similarity', x: 175, y: 110 },
    { id: 'output', label: 'Attendance Log', sub: 'ID #2026-HS', x: 305, y: 70 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="card-glass"
      style={{
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--border-subtle)',
        position: 'relative',
      }}
    >
      {/* Decorative top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '0.85rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Activity size={12} color="#06B6D4" />
            vision_core.py • Live Pipeline
          </span>
        </div>

        {/* Tab switchers */}
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button
            onClick={() => setActiveTab('pipeline')}
            style={{
              background: activeTab === 'pipeline' ? 'var(--bg-badge)' : 'transparent',
              border: activeTab === 'pipeline' ? '1px solid var(--border-accent)' : '1px solid transparent',
              color: activeTab === 'pipeline' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: '600',
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Pipeline
          </button>
          <button
            onClick={() => setActiveTab('code')}
            style={{
              background: activeTab === 'code' ? 'var(--bg-badge)' : 'transparent',
              border: activeTab === 'code' ? '1px solid var(--border-accent)' : '1px solid transparent',
              color: activeTab === 'code' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: '600',
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Python
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      {activeTab === 'pipeline' ? (
        <div style={{ position: 'relative' }}>
          {/* Animated SVG Neural / Pipeline Canvas */}
          <div
            style={{
              background: 'var(--bg-code)',
              borderRadius: '12px',
              padding: '1rem 0.5rem',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg viewBox="0 0 350 140" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Connecting lines between nodes */}
              <line x1="45" y1="70" x2="175" y2="35" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="45" y1="70" x2="175" y2="110" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="175" y1="35" x2="305" y2="70" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="175" y1="110" x2="305" y2="70" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Active animated pulses */}
              <line x1="45" y1="70" x2="175" y2="35" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 12">
                <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.8s" repeatCount="indefinite" />
              </line>
              <line x1="175" y1="35" x2="305" y2="70" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 12">
                <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.8s" repeatCount="indefinite" />
              </line>

              {/* Nodes */}
              {nodes.map((node, i) => {
                const isCurrent = pulseIndex === i;
                return (
                  <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                    {isCurrent && (
                      <circle r="22" fill="none" stroke="#06B6D4" strokeWidth="1.5" opacity="0.6">
                        <animate attributeName="r" from="14" to="26" dur="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.8" to="0" dur="1.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      r="14"
                      fill={isCurrent ? '#0B0B14' : '#181824'}
                      stroke={isCurrent ? '#06B6D4' : 'rgba(255, 255, 255, 0.25)'}
                      strokeWidth="2"
                    />
                    <circle r="4" fill={isCurrent ? '#38BDF8' : '#818CF8'} />
                    <text
                      y="-18"
                      textAnchor="middle"
                      fill="#F8FAFC"
                      fontSize="9"
                      fontFamily="var(--font-sans)"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                    <text
                      y="26"
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="7.5"
                      fontFamily="var(--font-mono)"
                    >
                      {node.sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mini Real-time Status Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.65rem',
              marginTop: '0.85rem',
            }}
          >
            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem 0.65rem',
              }}
            >
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Engine</span>
              <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                OpenCV + AI
              </span>
            </div>

            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem 0.65rem',
              }}
            >
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Matching</span>
              <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Real-Time
              </span>
            </div>

            <div
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem 0.65rem',
              }}
            >
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Status</span>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                Active
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Python Code snippet view */
        <div
          style={{
            background: 'var(--bg-code)',
            borderRadius: '12px',
            padding: '1rem',
            border: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            lineHeight: '1.6',
            color: '#E2E8F0',
            overflowX: 'auto',
          }}
        >
          <div style={{ color: '#94A3B8', marginBottom: '0.35rem' }}># Real-time Face Recognition Workflow</div>
          <div><span style={{ color: '#F43F5E' }}>import</span> cv2</div>
          <div><span style={{ color: '#F43F5E' }}>import</span> numpy <span style={{ color: '#F43F5E' }}>as</span> np</div>
          <div><span style={{ color: '#F43F5E' }}>import</span> pandas <span style={{ color: '#F43F5E' }}>as</span> pd</div>
          <div style={{ margin: '0.35rem 0', color: '#94A3B8' }}># Extract 128-d facial landmark embeddings</div>
          <div>face_net = load_model(<span style={{ color: '#38BDF8' }}>"facial_weights.h5"</span>)</div>
          <div>encodings = face_net.get_encodings(frame)</div>
          <div style={{ margin: '0.35rem 0', color: '#94A3B8' }}># Verify against database encodings</div>
          <div>match = match_student(encodings, student_db)</div>
          <div><span style={{ color: '#F43F5E' }}>if</span> match.is_identified:</div>
          <div style={{ paddingLeft: '1rem', color: '#34D399' }}>record_attendance(student_id=match.id, status="Present")</div>
        </div>
      )}

      {/* Floating subtle bottom tag */}
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Sparkles size={13} color="#818CF8" />
          Face Recognition Attendance Core
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-indigo)', fontSize: '0.72rem', fontWeight: '600' }}>
          Python • OpenCV • SQL
        </span>
      </div>
    </motion.div>
  );
}
