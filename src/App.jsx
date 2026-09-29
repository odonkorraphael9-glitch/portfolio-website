import React, { useState, useEffect } from 'react';
import './App.css';

// ============================================================================
// DATA & CASE STUDIES
// ============================================================================
const projectsData = [
  {
    id: 1,
    title: "LUMEN BOTANICA",
    subtitle: "Apothecary & Organic Skincare Identity",
    category: "Branding",
    year: "2025",
    client: "Lumen Botanica Organics",
    role: "Visual Identity, Packaging & Print Direction",
    description: "An editorial brand system inspired by 19th-century botanical archives and contemporary minimalist cosmetics. Crafted a bespoke high-contrast serif monogram, custom blind-debossed paper packaging, and a warm earthy color system that elevates organic apothecary into luxury shelf presence.",
    tags: ["Brand Identity", "Packaging", "Art Direction", "Deboss & Foil"],
    palette: [
      { name: "Forest Moss", hex: "#1C2E24" },
      { name: "Raw Ochre", hex: "#C79D62" },
      { name: "Cream Parchment", hex: "#F5EFE6" },
      { name: "Obsidian Ink", hex: "#111111" }
    ],
    typography: "Custom Antiqua Serif & Plus Jakarta Sans",
    deliverables: [
      "Bespoke Wordmark & Monogram",
      "Sustainable Glass & Amber Bottle Packaging",
      "52-Page Brand Guidelines & Print Standards",
      "Blind Debossed Cotton Paper Stationery"
    ],
    behanceUrl: "https://behance.net"
  },
  {
    id: 2,
    title: "KINETIC ISSUE 08",
    subtitle: "Avant-Garde Architectural & Culture Journal",
    category: "Editorial",
    year: "2025",
    client: "Kinetic Publishing Zurich",
    role: "Editorial Direction, Grid Architecture & Typesetting",
    description: "A 160-page experimental print publication exploring brutalist urban spaces and kinetic typography. Designed with a strict 12-column Swiss grid interrupted by asymmetric fold-out spreads, tactile risograph-printed inserts, and bold display type specimen layouts.",
    tags: ["Editorial", "Swiss Grid", "Book Design", "Print Pre-press"],
    palette: [
      { name: "Signal Vermilion", hex: "#E84522" },
      { name: "Concrete Grey", hex: "#D6D6D4" },
      { name: "Acid White", hex: "#FDFCFA" },
      { name: "Deep Newsprint", hex: "#18181B" }
    ],
    typography: "Plus Jakarta Sans Bold & JetBrains Mono",
    deliverables: [
      "160-Page Hardcover Editorial Layout",
      "Custom Risograph Printed Cover & Dust Jacket",
      "Asymmetric 12-Column Layout System",
      "Architectural Photo Essay Curation"
    ],
    behanceUrl: "https://behance.net"
  },
  {
    id: 3,
    title: "AURA RESONANCE",
    subtitle: "Modular Vinyl Packaging & Sound Identity",
    category: "Packaging",
    year: "2024",
    client: "Resonance Sound Records",
    role: "Album Artwork, Holographic Packaging & Motion Graphics",
    description: "Packaging design for an ambient experimental electronic record. Translating audio waveforms into physical geometry using holographic foil stamping on matte black soft-touch cardstock, complemented by a numbered limited-edition collector booklet.",
    tags: ["Packaging", "Vinyl Sleeve", "Holo Foil", "Merchandise"],
    palette: [
      { name: "Prism Purple", hex: "#6347EB" },
      { name: "Cyber Lime", hex: "#CCFF00" },
      { name: "Carbon Slate", hex: "#17181F" },
      { name: "Silver Mylar", hex: "#E2E4EB" }
    ],
    typography: "Plus Jakarta Sans & Space Grotesk",
    deliverables: [
      "Gatefold Double 12\" Vinyl Jacket",
      "Holographic Hot Foil Stamping Finishes",
      "Custom Die-Cut Inner Dust Sleeves",
      "Limited Tour Posters & Cassette Editions"
    ],
    behanceUrl: "https://behance.net"
  },
  {
    id: 4,
    title: "SOLARIS ROASTERS",
    subtitle: "Specialty Micro-Lot Coffee Packaging & Identity",
    category: "Packaging",
    year: "2024",
    client: "Solaris Coffee Co.",
    role: "Brand Identity, Packaging Suite & Illustration",
    description: "Complete identity and custom packaging suite for a premium single-origin coffee roaster. Features origin stamp iconography, tactile kraft pouches with copper metallic label stickers, and a modular color-coded labeling system for seasonal bean harvests.",
    tags: ["Packaging", "Branding", "Custom Illustration", "Retail Collateral"],
    palette: [
      { name: "Burnt Terracotta", hex: "#BF4E30" },
      { name: "Warm Ochre", hex: "#E59F45" },
      { name: "Espresso Brown", hex: "#2B1E19" },
      { name: "Raw Kraft", hex: "#E8DEC8" }
    ],
    typography: "Playfair Display & Plus Jakarta Sans",
    deliverables: [
      "Modular Retail Coffee Bag Packaging Suite",
      "Cold Brew Bottle Labels & Screenprinted Tins",
      "Handcrafted Origin Stamp & Icon Set",
      "Cafe Menu Boards, Signage & Merch"
    ],
    behanceUrl: "https://behance.net"
  },
  {
    id: 5,
    title: "METROPOLIS 2026",
    subtitle: "International Architecture Biennale Poster Series",
    category: "Typography",
    year: "2024",
    client: "Metropolis Design Forum",
    role: "Poster Campaign, Exhibition Wayfinding & Catalog",
    description: "An expressive visual identity and silkscreen poster campaign for the annual architectural biennale. Built around structural typography and bold isometric grids exploring the tension between natural geology and monolithic steel towers.",
    tags: ["Typography", "Poster Design", "Silkscreen", "Exhibition"],
    palette: [
      { name: "Klein Blue", hex: "#002FA7" },
      { name: "Pure Chalk", hex: "#F4F4F4" },
      { name: "Graphite", hex: "#1A1A1A" },
      { name: "Safety Orange", hex: "#FF5500" }
    ],
    typography: "Plus Jakarta Sans 800 & JetBrains Mono",
    deliverables: [
      "Series of 6 Screenprinted Exhibition Posters",
      "Exhibition Wayfinding System & Spatial Typography",
      "Bi-Lingual Exhibition Catalog (96 Pages)",
      "Animated Digital Street Billboard System"
    ],
    behanceUrl: "https://behance.net"
  },
  {
    id: 6,
    title: "NOVA PARFUMS",
    subtitle: "High Luxury Olfactory Haute Parfumerie",
    category: "Branding",
    year: "2024",
    client: "Maison Nova Paris",
    role: "Luxury Branding, Bottle Embossing & Campaign",
    description: "Visual identity and packaging system for an artisanal perfume house in Paris. Combines sculptural typography, frosted fluted glass bottles with gold-plated caps, and tactile French paper rigid boxes sealed with an embossed wax stamp motif.",
    tags: ["Branding", "Luxury", "Packaging", "Art Direction"],
    palette: [
      { name: "Gilded Gold", hex: "#C5A059" },
      { name: "Smoky Quartz", hex: "#22201F" },
      { name: "Alabaster White", hex: "#F7F6F2" },
      { name: "Velvet Plum", hex: "#3B2232" }
    ],
    typography: "Playfair Display & Plus Jakarta Sans",
    deliverables: [
      "Sculptural Custom Bottle Silhouette & Cap Blueprint",
      "Rigid Gift Box Packaging with Gold Hot Foil",
      "Art Direction for Editorial Campaign Photography",
      "Collector Press Kit & Fragrance Discovery Booklet"
    ],
    behanceUrl: "https://behance.net"
  }
];

const designerInfo = {
  name: "Raphael Nuertey Odonkor",
  title: "Graphic Designer & Art Director",
  location: "Accra / Available Worldwide",
  availability: "Available for Commissions & Freelance — 2026",
  bio: "I am a Graphic Designer and Art Director working at the intersection of bold typography, deliberate layout, and timeless brand craft. With a focus on visual art and technical precision, I build identity systems, packaging, and editorial publications that command attention and communicate with unmistakable clarity.",
  disciplines: [
    { title: "Brand Identity", desc: "Monograms, comprehensive visual systems, brand books & style guidelines." },
    { title: "Editorial & Print", desc: "Magazine layouts, art book curation, typography systems & pre-press perfection." },
    { title: "Packaging & Physical", desc: "Structural packaging, foil finishes, tactile paper stock curation & retail shelf impact." },
    { title: "Art Direction", desc: "Concept ideation, creative photography direction & campaign storytelling." }
  ],
  awards: [
    { year: "2025", title: "Editorial Excellence Gold", org: "International Design Guild" },
    { year: "2024", title: "Packaging of the Year Nominee", org: "Dieline Community Selection" },
    { year: "2024", title: "Top 30 Emerging Typographers", org: "Print & Type Association" },
    { year: "2023", title: "Brand Identity Spotlight", org: "Behance Curated Portfolio" }
  ],
  tools: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Adobe After Effects",
    "Figma",
    "Print Pre-Press & CMYK Spot Colors",
    "Glyphs / Type Design",
    "Specialty Finishes (Foil, Deboss, Silkscreen)"
  ],
  stats: [
    { value: "06+", label: "Years of Craft" },
    { value: "85+", label: "Identity Systems" },
    { value: "24", label: "Editorial Editions" },
    { value: "100%", label: "Concept-Driven" }
  ]
};

// ============================================================================
// COMPONENT: GRAPHIC DESIGN VISUAL MOCKUPS
// ============================================================================
const ProjectVisual = ({ id, title, subtitle }) => {
  switch (id) {
    case 1:
      return (
        <div className="visual-canvas visual-lumen">
          <div className="lumen-card">
            <div className="lumen-header">
              <span>VOL. XII // APOTHECARY</span>
              <span>NO. 084</span>
            </div>
            <div className="lumen-center">
              <svg className="botanical-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M50 90 C50 60 30 40 20 20 C40 30 60 50 50 90 Z" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M50 90 C50 60 70 40 80 20 C60 30 40 50 50 90 Z" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="50" y1="95" x2="50" y2="15" strokeWidth="1.5" />
                <circle cx="50" cy="15" r="3" fill="currentColor" />
              </svg>
              <h4 className="lumen-title">LUMEN</h4>
              <p className="lumen-sub">BOTANICA PURA</p>
              <span className="lumen-badge">ORGANIC COLD-PRESSED SERUM</span>
            </div>
            <div className="lumen-footer">
              <span>BATCH 44/E</span>
              <span>50 ML / 1.7 FL OZ</span>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="visual-canvas visual-kinetic">
          <div className="kinetic-grid-overlay"></div>
          <div className="kinetic-top">
            <span className="kinetic-tag">JOURNAL OF SPATIAL FORM</span>
            <span>ISSUE / 08</span>
          </div>
          <div className="kinetic-hero">
            <div className="kinetic-num">08</div>
            <div className="kinetic-headline">KINETIC<br />STRUCTURES</div>
          </div>
          <div className="kinetic-bottom">
            <div className="kinetic-col">
              <div className="swiss-line"></div>
              <span>BRUTALISM // MONOLITH // FORM</span>
            </div>
            <div className="kinetic-barcode">
              <span className="bar"></span><span className="bar thin"></span><span className="bar"></span><span className="bar thick"></span>
              <span className="bar"></span><span className="bar thin"></span><span className="bar thick"></span><span className="bar"></span>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="visual-canvas visual-aura">
          <div className="vinyl-ring vinyl-ring-1"></div>
          <div className="vinyl-ring vinyl-ring-2"></div>
          <div className="vinyl-ring vinyl-ring-3"></div>
          <div className="vinyl-center-label">
            <span className="aura-label-text">AURA</span>
            <span className="aura-sub-text">45 RPM // STEREO</span>
            <div className="aura-spindle"></div>
          </div>
          <div className="holo-strip">
            <span>LIMITED EDITION VINYL PRESSING — 180G VIRGIN WAX</span>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="visual-canvas visual-solaris">
          <div className="solaris-stamp">
            <svg viewBox="0 0 100 100" className="solaris-sun">
              <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M50 10 L50 24 M50 76 L50 90 M10 50 L24 50 M76 50 L90 50 M22 22 L32 32 M68 68 L78 78 M22 78 L32 68 M68 32 L78 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="solaris-word">SOLARIS</div>
            <div className="solaris-badge-text">
              <span>SPECIALTY MICRO-LOT</span>
              <strong>ETHIOPIA YIRGACHEFFE</strong>
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="visual-canvas visual-metropolis">
          <div className="metro-grid">
            <div className="metro-header">
              <span className="metro-pill">BIENNALE 2026</span>
              <span>18.10 — 28.11</span>
            </div>
            <div className="metro-big-type">
              <span>METRO</span>
              <span className="metro-outline">POLIS</span>
            </div>
            <div className="metro-details">
              <div className="metro-box"><span className="metro-num">01</span> GEOMETRY</div>
              <div className="metro-box"><span className="metro-num">02</span> TECTONICS</div>
              <div className="metro-box"><span className="metro-num">03</span> HORIZON</div>
            </div>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="visual-canvas visual-nova">
          <div className="nova-card">
            <div className="nova-crest">
              <span>★</span>
              <div className="nova-monogram">N</div>
              <span>★</span>
            </div>
            <h4 className="nova-title">NOVA</h4>
            <p className="nova-tagline">PARFUM INTENSE • PARIS</p>
            <div className="nova-divider"></div>
            <span className="nova-notes">IRIS NOIR // SANTAL // AMBRE NOCTURNE</span>
          </div>
        </div>
      );
    default:
      return (
        <div className="visual-canvas">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      );
  }
};

// ============================================================================
// COMPONENT: CASE STUDY MODAL
// ============================================================================
const CaseStudyModal = ({ project, onClose }) => {
  const [copiedHex, setCopiedHex] = useState(null);

  if (!project) return null;

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>

        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="editorial-pill">{project.category}</span>
            <span className="editorial-pill">{project.year}</span>
            <span className="editorial-pill">{project.client}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="modal-visual-hero">
          <ProjectVisual id={project.id} title={project.title} subtitle={project.subtitle} />
        </div>

        <div className="modal-body-grid">
          <div className="modal-main-content">
            <h3 className="modal-section-heading">Design Rationale & Concept</h3>
            <p className="modal-description">{project.description}</p>

            <div className="modal-deliverables-box">
              <h4 className="deliverables-title">Deliverables & Scope</h4>
              <ul className="deliverables-list">
                {project.deliverables?.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-num">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="modal-spec-sidebar">
            <div className="spec-card">
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>

            <div className="spec-card">
              <h4>Typography System</h4>
              <p className="spec-font">{project.typography}</p>
            </div>

            <div className="spec-card">
              <h4>Color System & Swatches</h4>
              <div className="palette-grid">
                {project.palette?.map((swatch, idx) => (
                  <div 
                    key={idx} 
                    className="palette-swatch"
                    onClick={() => handleCopyColor(swatch.hex)}
                    title={`Click to copy ${swatch.hex}`}
                  >
                    <span className="swatch-color" style={{ backgroundColor: swatch.hex }}></span>
                    <div className="swatch-info">
                      <span className="swatch-name">{swatch.name}</span>
                      <span className="swatch-hex">{copiedHex === swatch.hex ? 'COPIED!' : swatch.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="spec-card">
              <h4>Disciplines</h4>
              <div className="modal-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="spec-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on Behance
              </a>
              <a href="#contact" onClick={onClose} className="btn btn-outline">
                Inquire Similar Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Projects filter state
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Interactive Typography Lab state
  const [activeFontPair, setActiveFontPair] = useState('editorial');
  const [customText, setCustomText] = useState('Typography is the architecture of thought.');

  // Contact form state
  const [projectType, setProjectType] = useState('Brand Identity');
  const [budgetTier, setBudgetTier] = useState('$5,000 – $10,000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: 'Within 2-3 months',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "odonkorraphael9@gmail.com";
  const categories = ['All', 'Branding', 'Editorial', 'Packaging', 'Typography'];
  const projectTypes = ['Brand Identity', 'Custom Packaging', 'Editorial & Book Design', 'Typography / Poster Series', 'Comprehensive Rebrand'];
  const budgetTiers = ['$3,000 – $5,000', '$5,000 – $10,000', '$10,000+'];

  const fontPairs = {
    editorial: {
      name: 'Editorial Luxury',
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Plus Jakarta Sans', sans-serif",
      desc: 'Playfair Display + Plus Jakarta Sans'
    },
    modernist: {
      name: 'Modernist Clean',
      headingFont: "'Plus Jakarta Sans', sans-serif",
      bodyFont: "'JetBrains Mono', monospace",
      desc: 'Plus Jakarta Sans Bold + JetBrains Mono'
    },
    contemporary: {
      name: 'Contemporary Bold',
      headingFont: "'Space Grotesk', sans-serif",
      bodyFont: "'Plus Jakarta Sans', sans-serif",
      desc: 'Space Grotesk + Plus Jakarta Sans'
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', timeline: 'Within 2-3 months', message: '' });
    setTimeout(() => setFormStatus(''), 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={`navbar-editorial ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo-editorial">
            <span className="logo-initials">RNO</span>
            <span className="logo-sub">STUDIO / 26</span>
          </a>

          <nav className="nav-desktop">
            <a href="#projects" className="nav-link-editorial">Work</a>
            <a href="#about" className="nav-link-editorial">About & Ethos</a>
            <a href="#contact" className="nav-link-editorial">Commission</a>

            <div className="nav-social-icons">
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" title="Behance">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8h4M3 6h6a3 3 0 0 1 0 6H3zm0 6h7a3 3 0 0 1 0 6H3zM14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
                </svg>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" title="Dribbble">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            <button className="theme-toggle-editorial" onClick={toggleTheme} aria-label="Toggle theme">
              <span className="theme-toggle-content">
                {isDarkMode ? '☀ LIGHT' : '☽ DARK'}
              </span>
            </button>
          </nav>

          <div className="nav-mobile-controls">
            <button className="theme-toggle-editorial" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? '☀' : '☽'}
            </button>
            <button className={`hamburger-editorial ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span>
            </button>
          </div>

          {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
          <nav className={`nav-mobile-editorial ${menuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-header">
              <span>INDEX // NAVIGATION</span>
              <button className="mobile-close-btn" onClick={() => setMenuOpen(false)}>✕</button>
            </div>
            <div className="mobile-nav-links">
              <a href="#projects" onClick={() => setMenuOpen(false)}><span className="nav-num">01</span> Work & Case Studies</a>
              <a href="#about" onClick={() => setMenuOpen(false)}><span className="nav-num">02</span> About & Ethos</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}><span className="nav-num">03</span> Commission / Inquiry</a>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero-editorial">
        <div className="container">
          <div className="printer-registration-bar">
            <div className="cmyk-chips">
              <span className="cmyk-chip cmyk-c">C</span>
              <span className="cmyk-chip cmyk-m">M</span>
              <span className="cmyk-chip cmyk-y">Y</span>
              <span className="cmyk-chip cmyk-k">K</span>
              <span className="cmyk-label">PRINT & DIGITAL DESIGN ARCHIVE</span>
            </div>

            <div className="registration-mark">
              <span className="crosshair">⌖</span>
              <span>REGISTRATION: 100% PRE-PRESS READY</span>
            </div>

            <div className="masthead-badge">
              <span className="live-dot"></span>
              <span>{designerInfo.availability}</span>
            </div>
          </div>

          <div className="hero-editorial-content">
            <div className="hero-intro-pill">
              <span>✦ PORTFOLIO & STUDIO ARCHIVE</span>
              <span className="divider-dot">•</span>
              <span>ACCRA / WORLDWIDE</span>
            </div>

            <h1 className="hero-main-heading">
              <span className="designer-name-tag">{designerInfo.name}</span>
              <span className="hero-giant-role">
                GRAPHIC <span className="serif-italic-accent">DESIGNER</span>
              </span>
              <span className="hero-giant-sub">
                & Visual Identity Specialist
              </span>
            </h1>

            <div className="hero-layout-split">
              <div className="hero-statement-col">
                <p className="hero-mission-lead">
                  I craft enduring brand identities, tactile packaging suites, 
                  and editorial publications. Grounded in meticulous typography, 
                  grid systems, and print production, I help ambitious brands tell unforgettable stories
                   and also help business owners reach a larger audience.
                </p>

                <div className="hero-core-tags">
                  <span className="design-pill">Brand Identity</span>
                  <span className="design-pill">Custom Packaging</span>
                  <span className="design-pill">Editorial & Books</span>
                  <span className="design-pill">Typography</span>
                  <span className="design-pill">Art Direction</span>
                </div>

                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary">Explore Design Portfolio ↓</a>
                  <a href="#contact" className="btn btn-outline">Commission a Project →</a>
                </div>
              </div>

              <div className="hero-artboard-card">
                <div className="artboard-card-header">
                  <div className="artboard-controls">
                    <span className="control-dot red"></span>
                    <span className="control-dot yellow"></span>
                    <span className="control-dot green"></span>
                  </div>
                  <span className="artboard-name">CANVAS: IDENTITY_SYSTEM_V2.AI</span>
                  <span className="artboard-zoom">100%</span>
                </div>

                <div className="artboard-canvas-preview">
                  <div className="artboard-grid-lines"></div>
                  <div className="artboard-mock-composition">
                    <div className="specimen-badge">BRAND IDENTITY // 2026</div>
                    <div className="specimen-monogram">
                      <span>R</span>
                      <span className="monogram-dot">●</span>
                      <span>N</span>
                    </div>
                    <div className="specimen-spec-row">
                      <span>PANTONE 1795 C</span>
                      <span className="swatch-sample-inline"></span>
                      <span>350 GSM COTTON</span>
                    </div>
                    <div className="specimen-footer-tags">
                      <span className="micro-tag">VECTOR PRECISION</span>
                      <span className="micro-tag">FOIL STAMP</span>
                      <span className="micro-tag">SWISS GRID</span>
                    </div>
                  </div>
                </div>

                <div className="artboard-status-bar">
                  <div className="status-metric">
                    <span className="metric-label">CRAFT</span>
                    <span className="metric-val">Identity & Print</span>
                  </div>
                  <div className="status-metric">
                    <span className="metric-label">DELIVERABLES</span>
                    <span className="metric-val">Logomarks, Guidelines</span>
                  </div>
                  <div className="status-metric">
                    <span className="metric-label">TOOLS</span>
                    <span className="metric-val">Illustrator, InDesign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-track">
            <span>GRAPHIC DESIGN</span><span className="marquee-star">✦</span>
            <span>BRAND IDENTITY</span><span className="marquee-star">✦</span>
            <span>CUSTOM PACKAGING</span><span className="marquee-star">✦</span>
            <span>EDITORIAL SYSTEMS</span><span className="marquee-star">✦</span>
            <span>TYPOGRAPHIC CRAFT</span><span className="marquee-star">✦</span>
            <span>ART DIRECTION</span><span className="marquee-star">✦</span>
            <span>PRINT PRE-PRESS</span><span className="marquee-star">✦</span>
            <span>BOOK DESIGN</span><span className="marquee-star">✦</span>
            <span>GRAPHIC DESIGN</span><span className="marquee-star">✦</span>
            <span>BRAND IDENTITY</span><span className="marquee-star">✦</span>
            <span>CUSTOM PACKAGING</span><span className="marquee-star">✦</span>
            <span>EDITORIAL SYSTEMS</span><span className="marquee-star">✦</span>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header-editorial">
            <div className="editorial-eyebrow">
              <span>SELECTED ARCHIVE</span>
              <span className="divider-slash">/</span>
              <span>2024 — 2026</span>
            </div>
            <h2 className="section-title-editorial">Visual Works & Case Studies</h2>
            <p className="section-subtitle-editorial">
              A curated index of brand identity systems, tactile packaging, editorial publications, 
              and typographic explorations built for ambitious brands.
            </p>
          </div>

          <div className="filter-editorial-wrapper">
            <div className="filter-btns-editorial">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`filter-btn-editorial ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  <span className="cat-count">
                    {cat === 'All' ? projectsData.length : projectsData.filter(p => p.category === cat).length}
                  </span>
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid-editorial">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="project-card-editorial"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-topbar">
                  <span>NO. 0{index + 1}</span>
                  <span className="project-category-tag">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <div className="project-card-visual">
                  <ProjectVisual id={project.id} title={project.title} subtitle={project.subtitle} />
                  <div className="project-view-overlay">
                    <span className="overlay-prompt">View Case Study & Specs →</span>
                  </div>
                </div>

                <div className="project-card-info">
                  <div className="project-card-title-row">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="project-client-name">{project.client}</span>
                  </div>
                  <p className="project-card-subtitle">{project.subtitle}</p>

                  <div className="project-card-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="read-case-study">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>

      {/* ================= ABOUT & LAB SECTION ================= */}
      <section id="about" className="section about-editorial-section">
        <div className="container">
          <div className="section-header-editorial">
            <div className="editorial-eyebrow">
              <span>DISCIPLINE & ETHOS</span>
              <span className="divider-slash">/</span>
              <span>PHILOSOPHY</span>
            </div>
            <h2 className="section-title-editorial">Behind The Craft</h2>
          </div>

          <div className="about-editorial-grid">
            <div className="about-manifesto">
              <div className="manifesto-lead">
                <span className="quote-mark">“</span>
                <p>
                  Graphic design is not decoration; it is visual architecture. 
                  I believe in concept-first thinking, relentless attention to typographic detail, 
                  and tactile materials that leave a lasting imprint.
                </p>
              </div>

              <div className="manifesto-body">
                <p>{designerInfo.bio}</p>
                <p>
                  My practice bridges physical print production and digital visual identities. 
                  Whether calculating paper caliper and foil deboss depths for custom packaging 
                  or laying out high-density editorial grid systems, every millimeter serves a deliberate purpose.
                </p>
              </div>

              <div className="disciplines-grid">
                {designerInfo.disciplines.map((d, idx) => (
                  <div key={idx} className="discipline-card">
                    <span className="discipline-num">0{idx + 1}</span>
                    <h4 className="discipline-title">{d.title}</h4>
                    <p className="discipline-desc">{d.desc}</p>
                  </div>
                ))}
              </div>

              <div className="stats-editorial">
                {designerInfo.stats.map((stat, idx) => (
                  <div key={idx} className="stat-editorial-item">
                    <span className="stat-editorial-number">{stat.value}</span>
                    <span className="stat-editorial-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-interactive-col">
              <div className="interactive-lab-card">
                <div className="lab-header">
                  <span className="lab-tag">INTERACTIVE STUDIO LAB</span>
                  <span className="lab-status">LIVE SPECIMEN</span>
                </div>
                <h3 className="lab-title">Typography & System Tester</h3>
                <p className="lab-subtitle">Test curated editorial font pairings in real-time:</p>

                <div className="lab-pair-tabs">
                  {Object.keys(fontPairs).map((key) => (
                    <button
                      key={key}
                      className={`lab-pair-tab ${activeFontPair === key ? 'active' : ''}`}
                      onClick={() => setActiveFontPair(key)}
                    >
                      {fontPairs[key].name}
                    </button>
                  ))}
                </div>

                <div className="lab-preview-box" style={{ fontFamily: fontPairs[activeFontPair].headingFont }}>
                  <div className="lab-font-meta">
                    <span>SPECIMEN: {fontPairs[activeFontPair].desc}</span>
                  </div>
                  <h4 className="lab-display-sample">{customText}</h4>
                  <p className="lab-body-sample" style={{ fontFamily: fontPairs[activeFontPair].bodyFont }}>
                    The harmony between serif elegance and geometric sans precision creates 
                    unmistakable visual cadence across posters, brand books, and luxury packaging.
                  </p>
                </div>

                <div className="lab-input-group">
                  <label htmlFor="customTypeInput">Enter Custom Headline Text:</label>
                  <input
                    id="customTypeInput"
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Type anything to test..."
                    className="lab-text-input"
                  />
                </div>
              </div>

              <div className="tools-card">
                <h4 className="tools-heading">Software & Production Craft</h4>
                <div className="tools-tags">
                  {designerInfo.tools.map((tool, idx) => (
                    <span key={idx} className="tool-chip">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="awards-card">
                <h4 className="awards-heading">Selected Recognition & Honors</h4>
                <ul className="awards-list">
                  {designerInfo.awards.map((award, idx) => (
                    <li key={idx} className="award-item">
                      <span className="award-year">{award.year}</span>
                      <div className="award-detail">
                        <strong>{award.title}</strong>
                        <span className="award-org">{award.org}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="section contact-editorial-section">
        <div className="container">
          <div className="contact-editorial-wrapper">
            <div className="contact-info-col">
              <div className="editorial-eyebrow">
                <span>COMMISSIONS & COLLABORATION</span>
                <span className="divider-slash">/</span>
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="contact-big-title">
                Let's create something <span className="serif-italic">extraordinary</span> together.
              </h2>

              <p className="contact-editorial-desc">
                Currently accepting selected brand identity systems, physical packaging suites, 
                and editorial print commissions for 2026. Have a question or an exciting concept? 
                Reach out and let’s discuss the vision.
              </p>

              <div className="direct-email-card">
                <span className="direct-email-label">DIRECT STUDIO INBOX</span>
                <div className="direct-email-row">
                  <span className="direct-email-address">{directEmail}</span>
                  <button type="button" className="copy-email-btn" onClick={handleCopyEmail}>
                    {copiedEmail ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
              </div>

              <div className="studio-locations">
                <div className="studio-loc">
                  <span className="loc-label">STUDIO BASE</span>
                  <span className="loc-val">Accra, Ghana (GMT)</span>
                </div>
                <div className="studio-loc">
                  <span className="loc-label">GLOBAL CLIENTS</span>
                  <span className="loc-val">Remote & Worldwide</span>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              {formStatus === 'success' && (
                <div className="success-editorial-msg">
                  ✦ Thank you! Your project inquiry has been received. I will review the scope and reply within 24-48 hours.
                </div>
              )}

              <form className="inquiry-editorial-form" onSubmit={handleFormSubmit}>
                <div className="form-group-editorial">
                  <label className="field-label">01. What is the scope of your project?</label>
                  <div className="pill-selector-group">
                    {projectTypes.map((type, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`scope-pill ${projectType === type ? 'selected' : ''}`}
                        onClick={() => setProjectType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group-editorial">
                  <label className="field-label">02. Anticipated Investment / Budget Range</label>
                  <div className="pill-selector-group">
                    {budgetTiers.map((tier, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`scope-pill ${budgetTier === tier ? 'selected' : ''}`}
                        onClick={() => setBudgetTier(tier)}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row-dual">
                  <div className="form-group-editorial">
                    <label htmlFor="inquiry-name" className="field-label">03. Your Name / Company</label>
                    <input
                      type="text"
                      id="inquiry-name"
                      className="editorial-input"
                      placeholder="e.g. Elena Rostova / Studio Noir"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group-editorial">
                    <label htmlFor="inquiry-email" className="field-label">04. Email Address</label>
                    <input
                      type="email"
                      id="inquiry-email"
                      className="editorial-input"
                      placeholder="elena@studionoir.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-editorial">
                  <label htmlFor="inquiry-timeline" className="field-label">05. Desired Timeline</label>
                  <select
                    id="inquiry-timeline"
                    className="editorial-input editorial-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Urgent (Within 4 weeks)">Urgent (Within 4 weeks)</option>
                    <option value="Within 2-3 months">Within 2-3 months</option>
                    <option value="Within 3-6 months">Within 3-6 months</option>
                    <option value="Flexible / Exploration">Flexible / Exploration</option>
                  </select>
                </div>

                <div className="form-group-editorial">
                  <label htmlFor="inquiry-message" className="field-label">06. Project Brief & Vision</label>
                  <textarea
                    id="inquiry-message"
                    className="editorial-input editorial-textarea"
                    placeholder="Tell me about your brand, what deliverables you need, and any inspiration..."
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit-editorial">
                  Transmit Project Inquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer-editorial">
        <div className="container">
          <div className="colophon-grid">
            <div className="colophon-brand">
              <span className="colophon-logo">RNO STUDIO</span>
              <p className="colophon-tagline">
                Distinctive visual identity systems, tactile packaging suites, 
                and editorial print publications.
              </p>
              <span className="colophon-copyright">
                &copy; {new Date().getFullYear()} Raphael Nuertey Odonkor. All works copyrighted.
              </span>
            </div>

            <div className="colophon-spec">
              <span className="colophon-heading">INDEX & SECTIONS</span>
              <ul className="colophon-links">
                <li><a href="#projects">01. Selected Works</a></li>
                <li><a href="#about">02. Design Ethos & Lab</a></li>
                <li><a href="#contact">03. Commission Project</a></li>
              </ul>
            </div>

            <div className="colophon-spec">
              <span className="colophon-heading">STUDIO ARCHIVES</span>
              <ul className="colophon-links">
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance Portfolio ↗</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble Shots ↗</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile ↗</a></li>
              </ul>
            </div>

            <div className="colophon-spec">
              <span className="colophon-heading">COLOPHON & SPECS</span>
              <p className="colophon-text">
                Set in <em>Playfair Display</em> and <strong>Plus Jakarta Sans</strong>. 
                Designed with high-contrast editorial sensibility and pre-press craft.
              </p>
            </div>
          </div>

          <div className="footer-editorial-bottom">
            <div className="footer-editorial-status">
              <span className="status-indicator"></span>
              <span>All systems operational // Studio Edition 2026.1</span>
            </div>

            <button className="editorial-back-to-top" onClick={scrollToTop}>
              <span>RETURN TO TOP ↑</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;