import { Link } from 'react-router-dom';
import '../App.css';

const projects = [
  { title: 'LUMEN BOTANICA', category: 'Branding', year: '2025', subtitle: 'Apothecary & Organic Skincare Identity' },
  { title: 'KINETIC ISSUE 08', category: 'Editorial', year: '2025', subtitle: 'Avant-Garde Architectural & Culture Journal' },
  { title: 'AURA RESONANCE', category: 'Packaging', year: '2024', subtitle: 'Modular Vinyl Packaging & Sound Identity' },
  { title: 'SOLARIS ROASTERS', category: 'Packaging', year: '2024', subtitle: 'Specialty Coffee Packaging & Identity' },
  { title: 'METROPOLIS 2026', category: 'Typography', year: '2024', subtitle: 'International Architecture Biennale Poster Series' },
  { title: 'NOVA PARFUMS', category: 'Branding', year: '2024', subtitle: 'High Luxury Olfactory Haute Parfumerie' },
  { title: 'AWARDS NIGHT', category: 'Branding', year: '2025', subtitle: 'Evening Event Identity & Social Campaign' },
  { title: 'Personal website', category: 'Software Development', year: '2026', subtitle: 'Portfolio Website & Front-end Development' },
  { title: 'StudioFlow Dashboard (Concept)', category: 'Software Development', year: '2026', subtitle: 'Project and Client Management Web App' },
  { title: 'MarketLink (Concept)', category: 'Software Development', year: '2026', subtitle: 'Mobile-first Local Marketplace' },
  { title: 'HomeGrid', category: 'Software Development', year: '2026', subtitle: 'Responsive Estate Listing Website' }
];

function Work() {
  return (
    <>
      <header className="navbar-editorial">
        <div className="container nav-container">
          <Link to="/" className="logo-editorial"><span className="logo-initials">RK</span><span className="logo-sub">STUDIO / 26</span></Link>
          <nav className="nav-desktop">
            <Link to="/work" className="nav-link-editorial">Work</Link>
            <Link to="/about" className="nav-link-editorial">About</Link>
            <Link to="/commission" className="nav-link-editorial">Commission</Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="section projects-section">
          <div className="container">
            <div className="section-header-editorial work-page-header">
              <div className="editorial-eyebrow"><span>SELECTED ARCHIVE</span><span className="divider-slash">/</span><span>2024 — 2026</span></div>
              <h1 className="section-title-editorial">Work & Case Studies</h1>
              <p className="section-subtitle-editorial">A selected index of visual design and front-end development projects, from brand identities and editorial systems to responsive web experiences.</p>
            </div>
            <div className="projects-grid-editorial">
              {projects.map((project, index) => (
                <article key={project.title} className="project-card-editorial">
                  <div className="project-card-topbar">
                    <span>NO. {String(index + 1).padStart(2, '0')}</span>
                    <span className="project-category-tag">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="project-card-info">
                    <div className="project-card-title-row">
                      <h2 className="project-card-title">{project.title}</h2>
                    </div>
                    <p className="project-card-subtitle">{project.subtitle}</p>
                    <div className="project-card-footer">
                      <Link to="/#projects" className="read-case-study">
                        {project.category === 'Software Development' ? 'Explore project details →' : 'Explore in archive →'}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/#projects" className="btn btn-outline">Back to homepage archive</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Work;