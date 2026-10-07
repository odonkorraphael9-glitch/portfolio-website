import { Link } from 'react-router-dom';
import '../App.css';

function About() {
  return (
    <>
      <header className="navbar-editorial">
        <div className="container nav-container">
          <Link to="/" className="logo-editorial"><span className="logo-initials">RK</span><span className="logo-sub">STUDIO / 26</span></Link>
          <nav className="nav-desktop">
            <Link to="/" className="nav-link-editorial">Home</Link>
            <Link to="/work" className="nav-link-editorial">Work</Link>
            <Link to="/about" className="nav-link-editorial">About</Link>
            <Link to="/commission" className="nav-link-editorial">Commission</Link>
          </nav>
          <div className="nav-mobile-controls">
            <Link to="/" className="nav-link-editorial">Home</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="section about-editorial-section">
          <div className="container">
            <div className="section-header-editorial">
              <div className="editorial-eyebrow"><span>DISCIPLINE & ETHOS</span><span className="divider-slash">/</span><span>ABOUT THE DESIGNER</span></div>
              <h1 className="section-title-editorial">Raphael Nuertey Odonkor</h1>
              <p className="section-subtitle-editorial">Graphic Designer & Front-end Developer</p>
            </div>
            <div className="about-editorial-grid">
              <div className="about-manifesto">
                <div className="manifesto-lead">
                  <span className="quote-mark">“</span>
                  <p>Design is visual architecture: a meeting of deliberate typography, clear systems and useful technology.</p>
                </div>
                <div className="manifesto-body">
                  <p>I work across visual identity, packaging, editorial design and front-end development. My practice combines concept-first thinking with careful execution, building brands and digital experiences that communicate with clarity.</p>
                  <p>Based in Accra, Ghana, I collaborate with ambitious people and teams locally and around the world.</p>
                </div>
                <Link to="/work" className="btn btn-primary">Explore selected work</Link>
              </div>
              <div className="about-interactive-col">
                <div className="spec-card">
                  <h4>Practice</h4>
                  <p>Brand identity · Editorial & print · Packaging · Front-end development</p>
                </div>
                <div className="spec-card">
                  <h4>Studio base</h4>
                  <p>Accra, Ghana · Available worldwide</p>
                </div>
                <div className="spec-card">
                  <h4>Current availability</h4>
                  <p>Available for commissions and freelance collaborations</p>
                </div>
                <Link to="/commission" className="btn btn-outline">Start a conversation</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;