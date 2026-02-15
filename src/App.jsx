import { useEffect, useState } from 'react'
import './index.css'

const content = {
  sr: {
    brand: 'SKALEDIGITALS',
    nav: {
      services: 'Usluge',
      work: 'Radovi',
      process: 'Proces',
      about: 'O meni',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Digitalni proizvodi koja <strong>funkcionišu</strong>.',
      subtitle:
        'Full-stack razvoj web aplikacija, e-commerce sistema i SaaS platformi. Bržina. Kvalitet. Rezultati.',
      ctaPrimary: 'Konsultacija',
      ctaSecondary: 'Portfolio',
    },
    services: {
      title: 'Što nude',
      items: [
        {
          title: 'Web Aplikacije',
          desc: 'React, Next.js, Node.js. Razvijem aplikacije koje rastu sa vašim biznisom.',
          icon: '⚡',
        },
        {
          title: 'E-commerce',
          desc: 'Kompletan setup: Stripe, Shopify, custom rešenja. Od dizajna do prodaje.',
          icon: '💳',
        },
        {
          title: 'SaaS Platforme',
          desc: 'Subscription modeli, user management, analytics. Sve što trebate.',
          icon: '🔐',
        },
        {
          title: 'Migracija & Refactor',
          desc: 'Prenosim sisteme, optimizujem kod, poboljšavam performanse.',
          icon: '🔄',
        },
        {
          title: 'Tehnički Konsalting',
          desc: 'Procenjujem projekat, dajem roadmap, preporučujem arhitekturu.',
          icon: '🎯',
        },
      ],
    },
    work: {
      title: 'Izdvojeni radovi',
      items: [
        {
          title: 'Jobzee - Platforma za karijeru',
          tag: 'Full-stack + AI',
          desc: 'Moderisana tržišta posla, praksi i talenta. Spaja studente, alumni i kompanije.',
          meta: 'poslovi.vercel.app',
          link: 'https://poslovi.vercel.app/',
        },
        {
          title: 'Pekarska platforma - Video kursevi',
          tag: 'Education SaaS',
          desc: 'Detaljni video kursevi sa receptima za pekarstvo i poslastičarstvo.',
          meta: 'nikolaskakavac.github.io/pekarska-platforma',
          link: 'https://nikolaskakavac.github.io/pekarska-platforma/',
        },
        {
          title: 'ArbexFund',
          tag: 'Fintech',
          desc: 'Finansijska platforma sa fokusom na transparentnost i pristupačnost.',
          meta: 'arbexfund.com',
          link: 'https://arbexfund.com',
        },
      ],
    },
    process: {
      title: 'Kako radim',
      steps: [
        {
          title: '1. Analiza',
          desc: 'Razumem vaš biznis, konkurenciju, ciljnu publiku i merljive ciljeve.',
          icon: '📊',
        },
        {
          title: '2. Dizajn',
          desc: 'Pravim detaljne wireframe-a, UI/UX dizajn i tehnički spektifikum.',
          icon: '🎨',
        },
        {
          title: '3. Razvoj',
          desc: 'Bezbedna, skalabilna, brza arhitektura sa best practices kodom.',
          icon: '⚙️',
        },
        {
          title: '4. Lansiranje',
          desc: 'Testing, deployment, monitoring. Sistem je siguran i gotov za produkciju.',
          icon: '🚀',
        },
      ],
    },
    testimonials: {
      title: 'Rezultati',
      items: [
        {
          quote:
            'Prenosio je kompletan sistem iz starih tehnologija. Sada je 3x brži i lakši za održavanje.',
          name: 'CTO, Tech Startup',
        },
        {
          quote:
            'Sistem radi bez problema, konverzija je porasla jer je sajt brži. Preporuka.',
          name: 'Founder, E-commerce',
        },
      ],
    },
    about: {
      title: 'Ja',
      body:
        'Radim na web aplikacijama od 2018. Specijalizujem se u React, Node.js i skalabilnim arhitekturama. Fokus: performanse, bezbednost, user experience.',
      stackLabel: 'Tech Stack',
      stack: ['React / Next.js', 'Node.js / Express', 'PostgreSQL / MongoDB', 'AWS / Vercel', 'Stripe / PayPal'],
    },
    contact: {
      title: 'Hajde da radimo',
      body:
        'Želite li da saznate kako mogu da vam pomognem? Pošalite kratko opisanje projekta i budzeta.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'Odgovaram u roku od 24h.',
      cta: 'Pošalji poruku',
      ctaSecondary: 'Zakaži brzi poziv',
    },
    ctaBanner: {
      title: 'Spreman projekat za ozbiljan rast?',
      body: 'Rezerviši besplatnu 15-min konsultaciju i dobijaš konkretan plan narednih koraka.',
      primary: 'Rezerviši termin',
      secondary: 'Pogledaj radove',
    },
    footer: {
      line: 'Dostupan za nove projekte.',
      social: 'Instagram: @skaledigitals',
    },
  },
  en: {
    brand: 'SKALEDIGITALS',
    nav: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Digital products that <strong>work</strong>.',
      subtitle:
        'Full-stack development of web applications, e-commerce systems and SaaS platforms. Speed. Quality. Results.',
      ctaPrimary: 'Consultation',
      ctaSecondary: 'Portfolio',
    },
    services: {
      title: 'What I offer',
      items: [
        {
          title: 'Web Applications',
          desc: 'React, Next.js, Node.js. Building applications that scale with your business.',
          icon: '⚡',
        },
        {
          title: 'E-commerce',
          desc: 'Complete setup: Stripe, Shopify, custom solutions. From design to sales.',
          icon: '💳',
        },
        {
          title: 'SaaS Platforms',
          desc: 'Subscription models, user management, analytics. Everything you need.',
          icon: '🔐',
        },
        {
          title: 'Migration & Refactor',
          desc: 'Moving systems, optimizing code, improving performance.',
          icon: '🔄',
        },
        {
          title: 'Technical Consulting',
          desc: 'Project assessment, roadmap, architecture recommendations.',
          icon: '🎯',
        },
      ],
    },
    work: {
      title: 'Selected work',
      items: [
        {
          title: 'Jobzee - Career platform',
          tag: 'Full-stack + AI',
          desc: 'Moderated job marketplace connecting students, alumni and companies.',
          meta: 'poslovi.vercel.app',
          link: 'https://poslovi.vercel.app/',
        },
        {
          title: 'Bakery Platform - Video courses',
          tag: 'Education SaaS',
          desc: 'Detailed video courses with recipes for baking and pastry making.',
          meta: 'nikolaskakavac.github.io/pekarska-platforma',
          link: 'https://nikolaskakavac.github.io/pekarska-platforma/',
        },
        {
          title: 'ArbexFund',
          tag: 'Fintech',
          desc: 'Financial platform focused on transparency and accessibility.',
          meta: 'arbexfund.com',
          link: 'https://arbexfund.com',
        },
      ],
    },
    process: {
      title: 'How I work',
      steps: [
        {
          title: '1. Analysis',
          desc: 'I understand your business, competition, target audience and goals.',
          icon: '📊',
        },
        {
          title: '2. Design',
          desc: 'Detailed wireframes, UI/UX design and technical specifications.',
          icon: '🎨',
        },
        {
          title: '3. Development',
          desc: 'Secure, scalable, fast architecture with clean, maintainable code.',
          icon: '⚙️',
        },
        {
          title: '4. Launch',
          desc: 'Testing, deployment, monitoring. System is secure and production-ready.',
          icon: '🚀',
        },
      ],
    },
    testimonials: {
      title: 'Results',
      items: [
        {
          quote:
            'He migrated our entire system from legacy tech. Now 3x faster and much easier to maintain.',
          name: 'CTO, Tech Startup',
        },
        {
          quote:
            'System runs flawlessly, conversion improved because the site is faster. Highly recommend.',
          name: 'Founder, E-commerce',
        },
      ],
    },
    about: {
      title: 'About me',
      body:
        'Building web applications since 2018. Specialized in React, Node.js and scalable architectures. Focus: performance, security, user experience.',
      stackLabel: 'Tech Stack',
      stack: ['React / Next.js', 'Node.js / Express', 'PostgreSQL / MongoDB', 'AWS / Vercel', 'Stripe / PayPal'],
    },
    contact: {
      title: 'Let\'s build',
      body:
        'Want to explore how I can help? Send a brief project description and budget overview.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'I reply within 24 hours.',
      cta: 'Send message',
      ctaSecondary: 'Book a quick call',
    },
    ctaBanner: {
      title: 'Ready to scale your product seriously?',
      body: 'Book a free 15-min consultation and get a concrete action plan for your next sprint.',
      primary: 'Book now',
      secondary: 'See projects',
    },
    footer: {
      line: 'Available for new projects.',
      social: 'Instagram: @skaledigitals',
    },
  },
}

function App() {
  const [lang, setLang] = useState('sr')
  const [theme, setTheme] = useState('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[lang]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderIcon = (emoji) => {
    return <span style={{ fontSize: '1.5em' }}>{emoji}</span>
  }

  return (
    <div className="page" data-theme={theme}>
      <header className="site-header">
        <div className="brand">
          <img src="/491462317_2497496547265667_8538657457538507949_n.jpg" alt="Skale Digitals" className="brand-logo" />
          <span>{t.brand}</span>
        </div>
        <nav className="nav">
          <a href="#services">{t.nav.services}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>{t.nav.work}</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>{t.nav.process}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <div className="mobile-menu-divider"></div>
            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>
            <button
              type="button"
              className="mobile-lang-toggle"
              onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}
            >
              {lang === 'sr' ? 'English' : 'Srpski'}
            </button>
          </div>
        )}
        <div className="header-controls">
          <div className="theme-switch" role="group" aria-label="Theme">
            <button
              type="button"
              className={theme === 'dark' ? 'active' : ''}
              onClick={() => setTheme('dark')}
              title="Dark theme"
            >
              🌙
            </button>
            <button
              type="button"
              className={theme === 'light' ? 'active' : ''}
              onClick={() => setTheme('light')}
              title="Light theme"
            >
              ☀️
            </button>
          </div>
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'sr' ? 'active' : ''}
              onClick={() => setLang('sr')}
            >
              SR
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="main" lang={lang === 'sr' ? 'sr' : 'en'}>
        <section className="hero" id="top">
          <h1 dangerouslySetInnerHTML={{ __html: t.hero.title }}></h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-buttons">
            <a className="btn primary" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn ghost" href="#work">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{lang === 'sr' ? 'Paketi prilagodjeni vasem cilju.' : 'Packages tailored to your goals.'}</p>
          </div>
          <div className="grid cards">
            {t.services.items.map((item, index) => (
              <article
                key={item.title}
                className="card reveal"
                style={{ '--delay': `${0.1 + index * 0.05}s` }}
              >
                <div className="card-icon">{renderIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-header">
            <h2>{t.work.title}</h2>
            <p>{lang === 'sr' ? 'Primere prilagodjavam brandu i industriji.' : 'Each build is tuned to the brand and industry.'}</p>
          </div>
          <div className="grid work-grid">
            {t.work.items.map((item, index) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card reveal"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
              >
                <div className="work-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="work-meta">{item.meta}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-header">
            <h2>{t.process.title}</h2>
            <p>{lang === 'sr' ? 'Transparentno, bez iznenadjenja.' : 'Transparent, no surprises.'}</p>
          </div>
          <div className="grid process-grid">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="process-card reveal"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
              >
                <div className="process-icon">{renderIcon(step.icon)}</div>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about">
            <div>
              <h2>{t.about.title}</h2>
              <p>{t.about.body}</p>
            </div>
            <div className="stack">
              <span>{t.about.stackLabel}</span>
              <ul>
                {t.about.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{lang === 'sr' ? 'Kratko, direktno, merljivo.' : 'Short, direct, measurable.'}</p>
          </div>
          <div className="grid testimonial-grid">
            {t.testimonials.items.map((item, index) => (
              <figure
                key={item.name}
                className="testimonial reveal"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
              >
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section cta-banner" aria-label={lang === 'sr' ? 'Poziv na akciju' : 'Call to action'}>
          <div className="cta-banner-content">
            <h2>{t.ctaBanner.title}</h2>
            <p>{t.ctaBanner.body}</p>
            <div className="cta-banner-actions">
              <a className="btn primary" href="#contact">{t.ctaBanner.primary}</a>
              <a className="btn ghost" href="#work">{t.ctaBanner.secondary}</a>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <div className="contact-meta">
              <span>{t.contact.emailLabel}</span>
              <strong>{t.contact.email}</strong>
              <em>{t.contact.note}</em>
            </div>
          </div>
          <div className="contact-card">
            <p>{lang === 'sr' ? 'Brz start, jasne metrike i roadmapa.' : 'Fast start, clear metrics, and a roadmap.'}</p>
            <a className="btn primary" href="mailto:nikolaskakavac22@gmail.com">
              {t.contact.cta}
            </a>
            <a className="btn ghost" href="mailto:nikolaskakavac22@gmail.com?subject=Project%20Consultation&body=Hi%20Skale%20Digitals%2C%0A%0AI%20want%20to%20discuss%20a%20project.%0A%0ABudget%3A%0ATimeline%3A%0AGoals%3A">
              {t.contact.ctaSecondary}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span>{t.footer.line}</span>
          <span>© 2026 {t.brand}</span>
        </div>
        <a href="https://instagram.com/skaledigitals" target="_blank" rel="noopener noreferrer" className="social-link">
          {t.footer.social}
        </a>
      </footer>
    </div>
  )
}

export default App

