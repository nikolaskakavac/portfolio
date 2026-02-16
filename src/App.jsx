import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
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
      title: 'SKALEDIGITALS',
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
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
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
      title: 'SKALEDIGITALS',
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
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
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

const motionElements = {
  a: motion.a,
  article: motion.article,
  figure: motion.figure,
  div: motion.div,
}

function TiltCard({
  element = 'div',
  className,
  style,
  children,
  tiltEnabled,
  maxRotation = 6,
  hoverScale = 1.02,
  ...rest
}) {
  const MotionElement = motionElements[element] || motion.div
  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)
  const rotateX = useSpring(motionX, { stiffness: 420, damping: 30, mass: 0.45 })
  const rotateY = useSpring(motionY, { stiffness: 420, damping: 30, mass: 0.45 })

  const handleMove = (event) => {
    if (!tiltEnabled) return

    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width
    const relativeY = (event.clientY - rect.top) / rect.height

    const nextRotateY = (relativeX - 0.5) * (maxRotation * 2)
    const nextRotateX = (0.5 - relativeY) * (maxRotation * 2)

    motionX.set(nextRotateX)
    motionY.set(nextRotateY)
  }

  const handleLeave = () => {
    motionX.set(0)
    motionY.set(0)
  }

  return (
    <MotionElement
      className={className}
      style={{
        ...style,
        rotateX: tiltEnabled ? rotateX : 0,
        rotateY: tiltEnabled ? rotateY : 0,
        transformPerspective: 1100,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={tiltEnabled ? { scale: hoverScale } : undefined}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      {...rest}
    >
      {children}
    </MotionElement>
  )
}

function App() {
  const [lang, setLang] = useState('sr')
  const [theme, setTheme] = useState('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [activeNav, setActiveNav] = useState('services')
  const [hoveredNav, setHoveredNav] = useState(null)
  const [cursorEnabled, setCursorEnabled] = useState(false)
  const [tiltEnabled, setTiltEnabled] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 })
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [musicAvailable, setMusicAvailable] = useState(true)
  const [playHeroReveal, setPlayHeroReveal] = useState(true)
  const musicRef = useRef(null)
  const t = content[lang]
  const featuredTiltProps = {
    tiltEnabled,
    maxRotation: 10,
    hoverScale: 1.035,
  }
  const navItems = [
    { key: 'services', href: '#services', label: t.nav.services },
    { key: 'work', href: '#work', label: t.nav.work },
    { key: 'process', href: '#process', label: t.nav.process },
    { key: 'about', href: '#about', label: t.nav.about },
  ]
  const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`
  const trackSrc = withBase('background-music.mp3')
  const heroWords = t.hero.title
    .replace(/<[^>]*>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const headingWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    setCursorEnabled(finePointer)

    const updateTiltState = () => {
      setTiltEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    }
    updateTiltState()

    const handleScroll = () => {
      const currentY = window.scrollY || 0
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? Math.min(100, Math.max(0, (currentY / documentHeight) * 100)) : 0
      const parallax = Math.min(40, currentY * 0.05)

      setScrollY(currentY)
      setScrollProgress(progress)
      setParallaxOffset(parallax)
    }

    const handleMouseMove = (event) => {
      setCursorVisible(true)
      setCursorPos({ x: event.clientX, y: event.clientY })
    }

    const handleMouseLeaveWindow = () => setCursorVisible(false)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateTiltState)

    if (finePointer) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseout', handleMouseLeaveWindow)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateTiltState)
      if (finePointer) {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseout', handleMouseLeaveWindow)
      }
    }
  }, [])

  useEffect(() => {
    if (!musicEnabled || !musicRef.current || !musicAvailable) return

    musicRef.current.volume = 0.14
    musicRef.current.play().catch(() => {
      setMusicEnabled(false)
    })
  }, [musicEnabled, musicAvailable])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!finePointer || reduceMotion) return

    const buttons = Array.from(document.querySelectorAll('.btn.primary'))
    if (!buttons.length) return

    const maxOffset = 10
    const activationPadding = 90

    const resetButton = (button) => {
      button.style.setProperty('--mag-x', '0px')
      button.style.setProperty('--mag-y', '0px')
      button.classList.remove('magnetic-on')
    }

    const handleMouseMove = (event) => {
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect()
        const nearButton =
          event.clientX >= rect.left - activationPadding &&
          event.clientX <= rect.right + activationPadding &&
          event.clientY >= rect.top - activationPadding &&
          event.clientY <= rect.bottom + activationPadding

        if (!nearButton) {
          resetButton(button)
          return
        }

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = event.clientX - centerX
        const deltaY = event.clientY - centerY

        const offsetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX * 0.18))
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY * 0.18))

        button.style.setProperty('--mag-x', `${offsetX}px`)
        button.style.setProperty('--mag-y', `${offsetY}px`)
        button.classList.add('magnetic-on')
      })
    }

    const resetAll = () => {
      buttons.forEach((button) => resetButton(button))
    }

    const handleMouseOutWindow = (event) => {
      if (!event.relatedTarget) resetAll()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('blur', resetAll)
    window.addEventListener('mouseout', handleMouseOutWindow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('blur', resetAll)
      window.removeEventListener('mouseout', handleMouseOutWindow)
      resetAll()
    }
  }, [])

  useEffect(() => {
    const sectionIds = ['services', 'work', 'process', 'about']
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (!visibleEntries.length) return

        const visibleId = visibleEntries[0].target.id
        if (visibleId) {
          setActiveNav(visibleId)
        }
      },
      {
        root: null,
        rootMargin: '-22% 0px -62% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const handleHeroMove = (event) => {
    if (!cursorEnabled) return

    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width
    const relativeY = (event.clientY - rect.top) / rect.height

    setHeroTilt({
      x: (relativeX - 0.5) * 16,
      y: (0.5 - relativeY) * 12,
    })
  }

  const resetHeroTilt = () => {
    setHeroTilt({ x: 0, y: 0 })
  }

  const toggleMusic = () => {
    const next = !musicEnabled
    setMusicEnabled(next)

    if (!musicRef.current) return

    if (!next) {
      musicRef.current.pause()
      return
    }

    musicRef.current.play().catch(() => {
      setMusicEnabled(false)
    })
  }

  const renderIcon = (emoji) => {
    return <span style={{ fontSize: '1.5em' }}>{emoji}</span>
  }

  return (
    <div
      className={`page ${mobileMenuOpen ? 'menu-open' : ''}`}
      data-theme={theme}
      style={{ '--scroll-y': `${scrollY}px`, '--parallax-offset': `${parallaxOffset}px` }}
    >
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true"></div>

      <div className="bg-orb-field" aria-hidden="true">
        <div className="bg-orb orb-one"></div>
        <div className="bg-orb orb-two"></div>
        <div className="bg-orb orb-three"></div>
      </div>

      {cursorEnabled && (
        <div
          className={`custom-cursor ${cursorVisible ? 'visible' : ''}`}
          style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)` }}
          aria-hidden="true"
        >
          <span></span>
        </div>
      )}

      <header className="site-header">
        <div className="brand">
          <img src={withBase('491462317_2497496547265667_8538657457538507949_n.jpg')} alt="Skale Digitals" className="brand-logo" />
          <span>{t.brand}</span>
        </div>
        <nav className="nav" onMouseLeave={() => setHoveredNav(null)}>
          {navItems.map((item) => {
            const isHighlighted = (hoveredNav ?? activeNav) === item.key

            return (
              <a
                key={item.key}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.key)}
                onFocus={() => setHoveredNav(item.key)}
                onBlur={() => setHoveredNav(null)}
                onClick={() => setActiveNav(item.key)}
              >
                {isHighlighted && (
                  <motion.span
                    className="nav-highlight"
                    layoutId="nav-highlight"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="nav-label">{item.label}</span>
              </a>
            )
          })}
        </nav>
        <a className="header-cta" href="#contact">{t.nav.contact}</a>
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          ></button>
          <div className="mobile-menu">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>{t.nav.work}</a>
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
        </>
      )}

      <main className="main" lang={lang === 'sr' ? 'sr' : 'en'}>
        <section className="hero" id="top" onMouseMove={handleHeroMove} onMouseLeave={resetHeroTilt}>
          <motion.h1
            variants={headingContainerVariants}
            initial={playHeroReveal ? 'hidden' : false}
            animate="visible"
            onAnimationComplete={() => {
              if (playHeroReveal) {
                setPlayHeroReveal(false)
              }
            }}
          >
            {heroWords.map((word, index) => (
              <motion.span key={`${word}-${index}`} className="hero-word" variants={headingWordVariants}>
                {word}
                {index < heroWords.length - 1 ? '\u00A0' : ''}
              </motion.span>
            ))}
          </motion.h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-buttons">
            <a className="btn primary" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn ghost" href="#work">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="hero-3d-wrap" aria-hidden="true">
            <div
              className="hero-3d"
              style={{
                transform: `perspective(1000px) rotateX(${heroTilt.y}deg) rotateY(${heroTilt.x}deg) translateY(${Math.max(-44, scrollY * -0.05)}px)`,
              }}
            >
              <div className="hero-3d-layer layer-a"></div>
              <div className="hero-3d-layer layer-b"></div>
              <div className="hero-3d-layer layer-c"></div>
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
              <TiltCard
                key={item.title}
                element="article"
                className="card reveal tilt-emphasis"
                style={{ '--delay': `${0.1 + index * 0.05}s` }}
                {...featuredTiltProps}
              >
                <div className="card-icon">{renderIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </TiltCard>
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
              <TiltCard
                key={item.title}
                element="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card reveal tilt-emphasis"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
                {...featuredTiltProps}
              >
                <div className="work-tag">{item.tag}</div>
                {(item.screenshotDesktop || item.screenshotMobile) && (
                  <div className="work-media">
                    {item.screenshotDesktop && (
                      <div className="work-shot desktop">
                        <img
                          src={withBase(item.screenshotDesktop)}
                          alt={`${item.title} desktop preview`}
                          loading="lazy"
                          onError={(event) => {
                            if (!event.currentTarget.dataset.fallback) {
                              event.currentTarget.dataset.fallback = '1'
                              event.currentTarget.src = withBase('work-placeholder.svg')
                            }
                          }}
                        />
                      </div>
                    )}
                    {item.screenshotMobile && (
                      <div className="work-shot mobile">
                        <img
                          src={withBase(item.screenshotMobile)}
                          alt={`${item.title} mobile preview`}
                          loading="lazy"
                          onError={(event) => {
                            if (!event.currentTarget.dataset.fallback) {
                              event.currentTarget.dataset.fallback = '1'
                              event.currentTarget.src = withBase('work-placeholder.svg')
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="work-meta">{item.meta}</span>
              </TiltCard>
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
              <TiltCard
                key={step.title}
                element="article"
                className="process-card reveal tilt-emphasis"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
                {...featuredTiltProps}
              >
                <div className="process-icon">{renderIcon(step.icon)}</div>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about">
            <div>
              <h2>{t.about.title}</h2>
              <p>{t.about.body}</p>
            </div>
            <TiltCard element="div" className="stack" tiltEnabled={tiltEnabled}>
              <span>{t.about.stackLabel}</span>
              <ul>
                {t.about.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TiltCard>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{lang === 'sr' ? 'Kratko, direktno, merljivo.' : 'Short, direct, measurable.'}</p>
          </div>
          <div className="grid testimonial-grid">
            {t.testimonials.items.map((item, index) => (
              <TiltCard
                key={item.name}
                element="figure"
                className="testimonial reveal"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
                tiltEnabled={tiltEnabled}
              >
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>{item.name}</figcaption>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section cta-banner" aria-label={lang === 'sr' ? 'Poziv na akciju' : 'Call to action'}>
          <TiltCard element="div" className="cta-banner-content" tiltEnabled={tiltEnabled}>
            <h2>{t.ctaBanner.title}</h2>
            <p>{t.ctaBanner.body}</p>
            <div className="cta-banner-actions">
              <a className="btn primary" href="#contact">{t.ctaBanner.primary}</a>
              <a className="btn ghost" href="#work">{t.ctaBanner.secondary}</a>
            </div>
          </TiltCard>
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
          <TiltCard element="div" className="contact-card" tiltEnabled={tiltEnabled}>
            <p>{lang === 'sr' ? 'Brz start, jasne metrike i roadmapa.' : 'Fast start, clear metrics, and a roadmap.'}</p>
            <a className="btn primary" href="mailto:nikolaskakavac22@gmail.com">
              {t.contact.cta}
            </a>
            <a className="btn ghost" href="mailto:nikolaskakavac22@gmail.com?subject=Project%20Consultation&body=Hi%20Skale%20Digitals%2C%0A%0AI%20want%20to%20discuss%20a%20project.%0A%0ABudget%3A%0ATimeline%3A%0AGoals%3A">
              {t.contact.ctaSecondary}
            </a>
          </TiltCard>
        </section>
      </main>

      <button
        type="button"
        className={`music-toggle ${musicEnabled ? 'on' : ''} ${!musicAvailable ? 'disabled' : ''}`}
        onClick={toggleMusic}
        aria-label={lang === 'sr' ? 'Uključi muziku u pozadini' : 'Toggle background music'}
      >
        <span>{musicEnabled ? '🔊' : '🔈'}</span>
        <span>{lang === 'sr' ? 'Muzika' : 'Music'}</span>
      </button>

      <audio
        ref={musicRef}
        src={trackSrc}
        loop
        preload="none"
        onError={() => setMusicAvailable(false)}
      ></audio>

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

