import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Creative from './components/Creative';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Ambient Animated Mesh & Grid */}
        <div className="bg-ambient" aria-hidden="true">
          <div className="bg-ambient-grid" />
          <div className="bg-ambient-glow-1" />
          <div className="bg-ambient-glow-2" />
          <div className="bg-ambient-glow-3" />
        </div>

        {/* Sticky Header Navigation with Theme Toggle */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Creative />
          <Languages />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
