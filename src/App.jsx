import { useState } from 'react'
import './App.css'

const content = {
  sr: {
    brand: 'Skale Digitals',
    nav: {
      services: 'Usluge',
      work: 'Radovi',
      process: 'Proces',
      about: 'O meni',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Stranice koje prodaju, proizvodi koji rastu.',
      subtitle:
        'Dizajniram i razvijam landing stranice, multi-page sajtove, eCommerce i full-stack proizvode. Fokus: brzina, jasno porucivanje i merljiv rast.',
      ctaPrimary: 'Zakazi poziv',
      ctaSecondary: 'Pogledaj radove',
      badge: 'Dostupan za nove projekte',
    },
    services: {
      title: 'Usluge',
      items: [
        {
          title: 'Landing stranice',
          desc: 'Visok konverzioni fokus, brze iteracije, A/B logika i jasni CTA tokovi.',
          icon: '🎯',
        },
        {
          title: 'Multi-page sajtovi',
          desc: 'Struktura koja vodi korisnika, skalabilna sekcija po sekcija.',
          icon: '🌐',
        },
        {
          title: 'Ecommerce',
          desc: 'Shop i checkout bez frikcije, optimizovano za mobile prodaju.',
          icon: '🛒',
        },
        {
          title: 'Full-stack projekti',
          desc: 'Od ideje do produkcije: auth, dashboard, payment, integracije.',
          icon: '⚙️',
        },
        {
          title: 'AI agenti',
          desc: 'Automatizacija procesa, personalizovani tokovi i asistenti po meri.',
          icon: '🤖',
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
      title: 'Proces',
      steps: [
        {
          title: 'Discovery',
          desc: 'Ciljevi, publika, ponuda i kljucne metrike.',
          icon: '🔍',
        },
        {
          title: 'UX & Wireframe',
          desc: 'Mapa sekcija, hijerarhija poruka, CTA tok.',
          icon: '✏️',
        },
        {
          title: 'Design & Build',
          desc: 'Vizuelni sistem + razvoj u React/Vite.',
          icon: '🎨',
        },
        {
          title: 'Launch & Optimize',
          desc: 'Finalno podesavanje, analitika, iteracije.',
          icon: '🚀',
        },
      ],
    },
    testimonials: {
      title: 'Utisci',
      items: [
        {
          quote:
            'Jasan proces i brzina isporuke. Konverzija je porasla u prvoj nedelji.',
          name: 'CEO, SaaS startup',
        },
        {
          quote:
            'Odlicno razumevanje ponude i korisnika. Site izgleda premium.',
          name: 'Founder, eCommerce brand',
        },
      ],
    },
    about: {
      title: 'O meni',
      body:
        'Gradim digitalne proizvode koji spajaju estetiku i rezultat. Kombinujem dizajn razmisljanja, development i growth pristup da bi stranice radile posao.',
      stackLabel: 'Fokus',
      stack: ['React', 'Node', 'Stripe', 'Supabase', 'AI workflow'],
    },
    contact: {
      title: 'Kontakt',
      body:
        'Reci mi o projektu, budzetu i roku. Odgovaram u roku od 24h.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'Ili pisanje direktno na mejl.',
      cta: 'Posalji upit',
    },
    footer: {
      line: 'Dostupan za projekte od Q2 2026.',
      social: 'Instagram: @skaledigitals',
    },
  },
  en: {
    brand: 'Skale Digitals',
    nav: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Pages that sell, products that grow.',
      subtitle:
        'I design and build landing pages, multi-page sites, ecommerce and full-stack products. Focused on speed, clarity, and measurable growth.',
      ctaPrimary: 'Book a call',
      ctaSecondary: 'See work',
      badge: 'Available for new projects',
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'Landing pages',
          desc: 'Conversion-focused, fast iterations, clean CTA flows.',
          icon: '🎯',
        },
        {
          title: 'Multi-page websites',
          desc: 'Structured storytelling, scalable sections and layouts.',
          icon: '🌐',
        },
        {
          title: 'Ecommerce',
          desc: 'Frictionless shop and checkout, optimized for mobile sales.',
          icon: '🛒',
        },
        {
          title: 'Full-stack projects',
          desc: 'From idea to production: auth, dashboards, payments, integrations.',
          icon: '⚙️',
        },
        {
          title: 'AI agents',
          desc: 'Workflow automation, personalized flows, custom assistants.',
          icon: '🤖',
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
      title: 'Process',
      steps: [
        {
          title: 'Discovery',
          desc: 'Goals, audience, offer, and key metrics.',
          icon: '🔍',
        },
        {
          title: 'UX & Wireframe',
          desc: 'Section map, message hierarchy, CTA path.',
          icon: '✏️',
        },
        {
          title: 'Design & Build',
          desc: 'Visual system + development in React/Vite.',
          icon: '🎨',
        },
        {
          title: 'Launch & Optimize',
          desc: 'Final tuning, analytics, and iterations.',
          icon: '🚀',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          quote:
            'Clear process and fast delivery. Conversions jumped in week one.',
          name: 'CEO, SaaS startup',
        },
        {
          quote:
            'Great understanding of the offer and audience. The site feels premium.',
          name: 'Founder, ecommerce brand',
        },
      ],
    },
    about: {
      title: 'About',
      body:
        'I build digital products that blend aesthetics with performance. I combine design thinking, development, and growth to make pages work.',
      stackLabel: 'Focus',
      stack: ['React', 'Node', 'Stripe', 'Supabase', 'AI workflow'],
    },
    contact: {
      title: 'Contact',
      body: 'Tell me about your project, budget, and timeline. Reply within 24h.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'Or reach out directly via email.',
      cta: 'Send inquiry',
    },
    footer: {
      line: 'Available for projects from Q2 2026.',
      social: 'Instagram: @skaledigitals',
    },
  },
}

function App() {
  const [lang, setLang] = useState('sr')
  const [theme, setTheme] = useState('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[lang]

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
          className="hamburger"
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
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              type="button"
              className="mobile-lang-toggle"
              onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}
            >
              {lang === 'sr' ? '🇬🇧 English' : '🇷🇸 Srpski'}
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
          <div className="hero-content">
            <span className="pill">{t.hero.badge}</span>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.subtitle}</p>
            <div className="cta-row">
              <a className="btn primary" href="#contact">
                {t.hero.ctaPrimary}
              </a>
              <a className="btn ghost" href="#work">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="stat reveal" style={{ '--delay': '0.1s' }}>
              <span>+45%</span>
              <p>{lang === 'sr' ? 'brzi load time' : 'faster load time'}</p>
            </div>
            <div className="stat reveal" style={{ '--delay': '0.2s' }}>
              <span>+3.2x</span>
              <p>{lang === 'sr' ? 'CTR optimizacija' : 'CTR optimization'}</p>
            </div>
            <div className="stat reveal" style={{ '--delay': '0.3s' }}>
              <span>24h</span>
              <p>{lang === 'sr' ? 'odgovor na upit' : 'reply time'}</p>
            </div>
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

