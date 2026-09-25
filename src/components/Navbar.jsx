import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Beyond Data', href: '#creative' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'creative', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBg = scrolled
    ? theme === 'dark'
      ? 'rgba(5, 5, 5, 0.88)'
      : 'rgba(255, 255, 255, 0.88)'
    : 'transparent';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBg,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
          aria-label="Harsh Sanchaniya - Home"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #111116, #1A1A24)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '800',
                fontSize: '0.95rem',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HS
            </span>
            <div
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#06B6D4',
                boxShadow: '0 0 8px #06B6D4',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontWeight: '700',
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              {personalInfo.name}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Data Science • AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            padding: '0.35rem 0.5rem',
            borderRadius: '9999px',
            backdropFilter: 'blur(12px)',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(99, 102, 241, 0.16)' : 'transparent',
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
            id="theme-toggle-button"
          >
            {theme === 'dark' ? (
              <Sun size={18} color="#FBBF24" />
            ) : (
              <Moon size={18} color="#6366F1" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-primary desktop-cta"
            style={{
              padding: '0.55rem 1.2rem',
              fontSize: '0.84rem',
              borderRadius: '9999px',
            }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '1.25rem 1.5rem',
              overflow: 'hidden',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: activeSection === item.href.substring(1) ? '#60A5FA' : 'var(--text-secondary)',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    background: activeSection === item.href.substring(1) ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  marginTop: '0.5rem',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Theme:</span>
                <button
                  onClick={toggleTheme}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  {theme === 'dark' ? <Sun size={15} color="#FBBF24" /> : <Moon size={15} color="#6366F1" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              <div style={{ paddingTop: '0.75rem' }}>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
