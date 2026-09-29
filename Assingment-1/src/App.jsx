import './App.css'

const skills = [
  { name: 'React & JavaScript', level: 'Advanced', value: 92 },
  { name: 'UI engineering', level: 'Advanced', value: 86 },
  { name: 'CSS & accessibility', level: 'Confident', value: 82 },
  { name: 'Design systems', level: 'Confident', value: 74 },
]

function NavigationBar() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </nav>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Atanu Ghosh, home">
        <span className="wordmark-mark">A</span>
        <span>Atanu Ghosh</span>
      </a>
      <NavigationBar />
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section hero-text-only" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="availability-dot" /> Available for select projects</p>
        <h1 id="hero-title">Thoughtful interfaces.<br /><span>Made for people.</span></h1>
        <p className="hero-intro">I&apos;m Atanu, a frontend developer turning considered design into clear, accessible web experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-location"><span aria-hidden="true">⌖</span> Based in Portland, Oregon <span className="location-divider">·</span> Working everywhere</p>
      </div>
    </section>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <SectionLabel number="01">A bit about me</SectionLabel>
      <div className="about-content">
        <h2>Good work starts with <span>good questions.</span></h2>
        <div className="about-detail">
          <p>I&apos;m a frontend developer who likes the space where thoughtful design meets useful technology. I care about the details people feel: a page that loads quickly, a form that makes sense, and an interface that works for everyone.</p>
          <p>When I&apos;m away from the browser, you&apos;ll find me at a neighborhood coffee shop, on a long trail, or collecting far too many books for my shelves.</p>
          <a className="text-link about-link" href="#contact">More about working together <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="about-facts" aria-label="At a glance">
        <div><strong>4+</strong><span>Years building for the web</span></div>
        <div><strong>12</strong><span>Projects shipped with care</span></div>
        <div><strong>100%</strong><span>Always learning something new</span></div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="content-section education-section" id="education">
      <SectionLabel number="02">Education</SectionLabel>
      <div className="section-main">
        <div className="section-heading-row">
          <h2>Built on a <span>strong foundation.</span></h2>
          <p className="section-aside">A mix of formal study, hands-on practice, and a healthy curiosity.</p>
        </div>
        <article className="education-entry">
          <span className="education-year">2023 — Ongoing</span>
          <div>
            <h3>BCA</h3>
            <p>Techno India University</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="content-section skills-section" id="skills">
      <SectionLabel number="03">What I bring</SectionLabel>
      <div className="section-main skills-main">
        <div className="section-heading-row">
          <h2>Good with the <span>details.</span></h2>
          <p className="section-aside">The tools change. Clear thinking and care for the user don&apos;t.</p>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.name}>
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-track" aria-label={`${skill.name}: ${skill.level}`}>
                <span style={{ '--skill-value': `${skill.value}%` }} />
              </div>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
        <div className="tool-list"><span>Also in my toolkit</span><p>TypeScript <i>·</i> Git <i>·</i> Figma <i>·</i> Node.js <i>·</i> WCAG</p></div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-topline"><span>04 / CONTACT</span><span>Have a good one in mind?</span></div>
      <h2>Let&apos;s make<br />something <span>matter.</span></h2>
      <div className="contact-bottom">
        <a className="contact-email" href="mailto:atanu72@gmail.com">atanu72@gmail.com <span aria-hidden="true">↗</span></a>
        <p>Open to thoughtful collaborations<br />and kind people.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">A</span><span>Atanu Ghosh</span></a>
      <span>Designed &amp; built with care <span aria-hidden="true">©</span> 2025</span>
      <div className="footer-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

function App() {

  return (
    <div className="portfolio-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
