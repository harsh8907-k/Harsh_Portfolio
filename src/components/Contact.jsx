import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or note';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#6366F1', '#06B6D4', '#38BDF8', '#FFFFFF'],
      });
    } catch (e) {
      // ignore
    }
  };

  const openMailClient = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Hi Harsh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="text-gradient">Something Intelligent.</span>
          </h2>
          <p className="section-subtitle">
            I'm open to connecting around data, AI, development, creative projects and opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Primary Email Card */}
            <div
              className="card-base"
              style={{
                padding: '1.75rem',
                borderLeft: '4px solid #06B6D4',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#06B6D4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Primary Channel
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      Email Address
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '0.35rem 0.65rem',
                    color: copiedEmail ? '#10B981' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--accent-indigo)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  wordBreak: 'break-all',
                }}
              >
                {personalInfo.email}
              </a>
              <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Preferred for opportunities, collaborations, and project inquiries.
              </span>
            </div>

            {/* Phone Card */}
            <div
              className="card-base"
              style={{
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366F1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Phone / Mobile
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                      Direct Line
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '0.35rem 0.65rem',
                    color: copiedPhone ? '#10B981' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                  id="copy-phone-btn"
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={personalInfo.social.phone}
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div
              className="card-base"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass"
            style={{
              padding: '2.25rem',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Message Drafted!
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  Thanks <strong>{formData.name}</strong>! Your note has been prepared. Click below to open your email client and send it directly to Harsh, or reset the form.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={openMailClient}
                    className="btn-primary"
                    style={{ padding: '0.65rem 1.4rem' }}
                  >
                    <span>Send via Email Client</span>
                    <ExternalLink size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary"
                    style={{ padding: '0.65rem 1.4rem' }}
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Fill out the fields below and submit to initiate contact directly.
                  </p>
                </div>

                {/* Name field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-name"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.name ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-email"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-subject"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    Subject / Topic (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Data Collaboration"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                {/* Message field */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    htmlFor="contact-message"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Harsh, I noticed your work on the face recognition attendance system..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.message ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', cursor: 'pointer' }}
                  id="submit-contact-form"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
