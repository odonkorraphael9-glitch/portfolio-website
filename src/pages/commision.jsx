import { Link } from 'react-router-dom';
import '../App.css';

function Commission() {
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
        <section className="section contact-editorial-section">
          <div className="container">
            <div className="contact-editorial-wrapper">
              <div className="contact-info-col">
                <div className="editorial-eyebrow"><span>COMMISSIONS & COLLABORATION</span><span className="divider-slash">/</span><span>GET IN TOUCH</span></div>
                <h1 className="contact-big-title">Let's create something <span className="serif-italic">extraordinary</span> together.</h1>
                <p className="contact-editorial-desc">I'm available for selected identity and software development projects. 
                    Share a little about what you have in mind and we can discuss the next steps.</p>
                <div className="direct-email-card">
                  <span className="direct-email-label">DIRECT STUDIO INBOX</span>
                  <div className="direct-email-row">
                    <a className="direct-email-address" href="mailto:odonkorraphael9@gmail.com">odonkorraphael9@gmail.com</a>
                  </div>
                </div>
                <div className="studio-locations">
                  <div className="studio-loc"><span className="loc-label">STUDIO BASE</span><span className="loc-val">Accra, Ghana (GMT)</span></div>
                  <div className="studio-loc"><span className="loc-label">GLOBAL CLIENTS</span><span className="loc-val">Remote & Worldwide</span></div>
                </div>
                <Link to="/#contact" className="btn btn-primary">Open project inquiry form</Link>
              </div>
              <div className="contact-form-col">
                <div className="spec-card">
                  <h4>Project areas</h4>
                  <div className="modal-tags">
                    <span className="spec-tag">Brand Identity</span>
                    <span className="spec-tag">Editorial & Print</span>
                    <span className="spec-tag">Software Development</span>
                  </div>
                </div>
                <div className="spec-card">
                  <h4>Next step</h4>
                  <p>Use the inquiry form or email the studio directly with your project scope, preferred timeline and budget range.</p>
                </div>
                <Link to="/work" className="btn btn-outline">Review selected work</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Commission;