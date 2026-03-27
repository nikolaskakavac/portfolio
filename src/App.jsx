import { createElement, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  HiOutlineClock,
  HiOutlineCodeBracketSquare,
  HiOutlineFolderOpen,
  HiOutlineMagnifyingGlass,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineSwatch,
} from 'react-icons/hi2'
import Preloader from './components/Preloader'
import PremiumNavbar from './components/PremiumNavbar'
import './index.css'

const content = {
  sr: {
    brand: 'SKALEDIGITALS',
    nav: {
      proof: 'Rezultati',
      work: 'Case studies',
      services: 'Usluge',
      process: 'Proces',
      about: 'O meni',
      resources: 'Resursi',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Your website should make you money. I build websites that turn visitors into paying clients.',
      subtitle:
        'Od landing stranica do ozbiljnijih platformi. Ako firmi treba sajt ili aplikacija koja izgleda profesionalno, radi brzo i uliva poverenje pravim klijentima, to je ono što radim.',
      ctaPrimary: 'Zakaži besplatan poziv',
      ctaSecondary: 'Pogledaj case studies',
      micro: 'Odgovor u roku od 24h • jasan plan posle prvog razgovora • SR / EN saradnja',
      proof: [
        { value: '60-70+', label: 'izrađenih sajtova i web projekata' },
        { value: '2018+', label: 'godina rada sa realnim klijentima' },
        { value: '24h', label: 'maksimalno vreme odgovora' },
      ],
      audience: 'Radim za firme iz različitih industrija: finance, restorani, kafići, tattoo i hair saloni, arhitektura, građevina, uslužni biznisi i SaaS proizvodi.',
      badges: ['Biznis sajtovi', 'Full-stack aplikacije', 'Održavanje i dalje unapređenje'],
      showcase: {
        label: 'Web partner za ozbiljne firme',
        heading: 'Od prvog sajta do proizvoda koji raste sa firmom',
        body:
          'Mogu da uradim ceo web deo projekta: strukturu, dizajn, development, integracije i održavanje. Cilj nije samo lep sajt, već rešenje koje firma stvarno koristi.',
      },
      floating: [
        { title: 'Jači prvi utisak', sub: 'da sajt odmah deluje ozbiljno' },
        { title: 'Od landinga do aplikacije', sub: 'u skladu sa ciljem firme' },
        { title: 'Spremno za dalje', sub: 'integracije, održavanje i rast' },
      ],
    },
    proof: {
      title: 'Ne prodajem samo dizajn ili kod, već kompletno web rešenje',
      subtitle: 'Kada klijent angažuje mene, cilj je da dobije sajt ili aplikaciju koja izgleda ozbiljno, radi brzo i može odmah da se koristi u poslu.',
      cards: [
        {
          title: 'Desetine projekata za realne firme',
          body: 'Radio sam 30-40 klijenata i 60-70+ sajtova i web projekata za različite tipove firmi i usluga.',
          meta: 'Business websites',
        },
        {
          title: 'Širina koja pomaže projektu',
          body: 'Biznis sajtovi, full-stack aplikacije, payment integracije, API povezivanja, AI chatbotovi i održavanje nakon lansiranja.',
          meta: 'Design + development',
        },
        {
          title: 'Brza isporuka bez haosa',
          body: 'Brz sam kada je cilj jasan, ali ne jurim brzinu po cenu kvaliteta. Fokus je da isporuka bude čista, profesionalna i održiva.',
          meta: 'Execution',
        },
      ],
      strip: ['Profesionalan izgled', 'Jasna struktura', 'Brz i održiv development'],
    },
    work: {
      title: 'Izdvojeni case studies',
      subtitle: 'Tri projekta koja najbolje pokazuju kvalitet dizajna, jasnoću strukture i način na koji pristupam klijentskim sajtovima.',
      primaryCta: 'Pogledaj projekat',
      secondaryCta: 'Pošalji upit',
      items: [
        {
          title: 'Milena Vasić',
          category: 'Healthcare website',
          challenge: 'Kod ovakvog sajta najvažnije je da korisnik odmah oseti poverenje i jasno razume kome je usluga namenjena.',
          solution: 'Mirniji vizuelni pravac, jasna struktura sekcija i fokus na informacije koje pomažu osobi da se javi bez dileme.',
          result: 'Sajt koji deluje profesionalno, smireno i mnogo lakše vodi do prvog kontakta.',
          meta: 'Psychotherapy practice',
          link: 'https://nikolaskakavac.github.io/psihoterapeut-milena-vasic/',
          screenshotDesktop: 'work/psihoterapeut-desktop.png',
          screenshotMobile: 'work/psihoterapeut-mobile.png',
        },
        {
          title: 'InkVibe',
          category: 'Tattoo studio website',
          challenge: 'Kod tattoo studija sajt mora odmah da deluje upečatljivo, profesionalno i dovoljno jasno da posetilac poželi da zakaže termin.',
          solution: 'Vizuelno jači pravac, jasna prezentacija radova, bolja struktura sekcija i fokus na booking tok.',
          result: 'Sajt koji ostavlja ozbiljniji utisak brenda i mnogo lakše vodi korisnika ka upitu ili rezervaciji.',
          meta: 'Creative service brand',
          link: 'https://nikolaskakavac.github.io/InkVibe/',
          screenshotDesktop: 'work/inkvibe-desktop.png',
          screenshotMobile: 'work/inkvibe-mobile.png',
        },
        {
          title: 'Jobzee',
          category: 'Platform & SaaS',
          challenge: 'Kod platformi nije dovoljno da interfejs bude moderan. Mora da ostane jasan, brz i razumljiv različitim tipovima korisnika.',
          solution: 'Full-stack pristup sa fokusom na UX tokove, preglednost interfejsa i bazu spremnu za dalje funkcionalnosti.',
          result: 'Proizvod koji izgleda ozbiljnije, radi jasnije i lakše može da raste kroz nove iteracije.',
          meta: 'Career platform',
          link: 'https://poslovi.vercel.app/',
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
        },
      ],
      archive: [
        { title: 'Pekarska platforma', link: 'https://nikolaskakavac.github.io/pekarska-platforma/' },
        { title: 'Frizerski salon', link: 'https://nikolaskakavac.github.io/frizerski/' },
        { title: 'InkVibe studio', link: 'https://nikolaskakavac.github.io/InkVibe/' },
        { title: 'PixelPulse agency', link: 'https://nikolaskakavac.github.io/PixelPulse/' },
      ],
    },
    services: {
      title: 'Usluge',
      subtitle: 'Usluge su postavljene tako da firma može da krene od jednostavnijeg sajta, a zatim da raste ka naprednijem proizvodu i održavanju.',
      items: [
        {
          title: 'Landing stranice i biznis sajtovi',
          desc: 'Za firme kojima treba ozbiljan online nastup, jasan prikaz usluga i bolji put do upita, poziva ili rezervacije.',
        },
        {
          title: 'Custom web aplikacije i SaaS',
          desc: 'Za klijente kojima treba više od prezentacije: dashboardi, korisnički nalozi, payment integracije, API povezivanja i ozbiljniji proizvodni tokovi.',
        },
        {
          title: 'Održavanje i dalji razvoj',
          desc: 'Kada projekat već postoji, ali treba redovne izmene, unapređenja, nove funkcionalnosti ili tehničku podršku bez stalne potrage za novim developerom.',
        },
      ],
    },
    process: {
      title: 'Proces je jednostavan i jasan',
      subtitle: 'Bez komplikacije, bez lutanja i bez situacije da klijent ne zna šta se trenutno radi i šta sledi dalje.',
      steps: [
        { title: '01. Kratak discovery', desc: 'Razumemo ponudu, cilj, publiku i šta sajt ili proizvod mora da postigne.' },
        { title: '02. Struktura i pravac', desc: 'Definišem sekcije, hijerarhiju sadržaja, CTA tok i vizuelni smer.' },
        { title: '03. Dizajn i development', desc: 'Sledi izrada rešenja koje izgleda premium, radi brzo i ostaje tehnički čisto.' },
        { title: '04. Launch i finalni polish', desc: 'Testiranje, završna doterivanja i priprema da projekat bude spreman za realnu upotrebu.' },
      ],
    },
    about: {
      title: 'O meni',
      body:
        'Od 2018. radim izradu web sajtova i web aplikacija za klijente iz različitih industrija. Najviše mi odgovaraju firme koje žele ozbiljan, čist i profesionalan web nastup bez improvizacije.',
      points: [
        'Radio sam sa 30-40 klijenata i 60-70+ sajtova i web projekata.',
        'Pokrivam ceo web proces: od landinga i biznis sajta do full-stack aplikacija i SaaS rešenja.',
        'Imam development i dizajnerski background, pa finalni rezultat izgleda urednije, jasnije i profesionalnije.',
      ],
      stackLabel: 'Expertise',
      stack: ['React / Next.js', 'Node.js / Express', 'Python / Django', 'PostgreSQL / MongoDB', 'Webflow / Framer', 'Stripe / PayPal integrations'],
    },
    resources: {
      title: 'Resursi',
      subtitle: 'Sadržaj koji dodatno pokazuje način razmišljanja, kvalitet rada i ozbiljnost pristupa poslu.',
      items: [
        {
          title: 'Kako homepage odmah gradi poverenje',
          type: 'Guide',
          desc: 'Šta korisnik mora da vidi u prvih nekoliko sekundi da ne ode sa sajta i da poželi da klikne dalje.',
        },
        {
          title: 'Checklist za sajt koji deluje premium',
          type: 'Resource',
          desc: 'Sekcije, proof elementi, CTA logika i detalji koji često prave razliku između prosečnog i ozbiljnog sajta.',
        },
        {
          title: 'Kako projekat pretvoriti u case study',
          type: 'Template',
          desc: 'Format kojim se radovi predstavljaju kao konkretan dokaz, a ne samo kao lepa galerija screenshotova.',
        },
      ],
    },
    ctaBanner: {
      title: 'Ako ti treba sajt ili aplikacija koja izgleda ozbiljno i može da podrži realan posao, hajde da pričamo.',
      body: 'Na prvom razgovoru definišemo cilj, obim projekta i koji je najpametniji sledeći korak.',
      primary: 'Zakaži poziv',
      secondary: 'Pošalji brief',
    },
    contact: {
      title: 'Kontakt',
      body: 'Pošalji nekoliko osnovnih informacija o projektu i dobićeš konkretan odgovor kako bih pristupio realizaciji, koji je sledeći korak i da li sam dobar fit.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'Odgovor u roku od 24h',
      formLabels: { name: 'Ime', email: 'Email', type: 'Tip projekta', budget: 'Budžet', details: 'Kratak opis' },
      submit: 'Pošalji poruku',
      success: 'Forma je trenutno demo verzija. Za sada me kontaktiraj direktno mailom ili zakaži poziv i dobićeš konkretan odgovor u najkraćem roku.',
      projectTypes: ['Business website', 'Portfolio', 'SaaS / web app', 'Redesign / optimization'],
      budgetOptions: ['1k - 2k EUR', '2k - 5k EUR', '5k+ EUR', 'Nisam siguran'],
    },
    footer: {
      line: 'Dostupan za nove projekte.',
      links: ['Case studies', 'Usluge', 'Proces', 'Resursi', 'Kontakt'],
    },
  },
  en: {
    brand: 'SKALEDIGITALS',
    nav: {
      proof: 'Results',
      work: 'Case studies',
      services: 'Services',
      process: 'Process',
      about: 'About',
      resources: 'Resources',
      contact: 'Contact',
    },
    hero: {
      title: 'Your website should make you money. I build websites that turn visitors into paying clients.',
      subtitle:
        'From landing pages to advanced platforms. If a company needs a website or app that looks professional, runs fast, and builds trust with the right clients, that is what I do.',
      ctaPrimary: 'Book a free call',
      ctaSecondary: 'View case studies',
      micro: 'Reply within 24h • clear plan after the first conversation • SR / EN collaboration',
      proof: [
        { value: '60-70+', label: 'websites and web projects delivered' },
        { value: '2018+', label: 'working with real clients' },
        { value: '24h', label: 'maximum reply time' },
      ],
      audience: 'I work with different kinds of companies: finance, restaurants, cafes, tattoo and hair studios, architecture, construction, service businesses, and SaaS products.',
      badges: ['Business websites', 'Full-stack applications', 'Maintenance and ongoing improvement'],
      showcase: {
        label: 'Web partner for serious companies',
        heading: 'From the first website to a product that grows with the business',
        body:
          'I can handle the full web side of the project: structure, design, development, integrations, and maintenance. The goal is not just a nice website, but a solution the company can actually use.',
      },
      floating: [
        { title: 'Stronger first impression', sub: 'so the website feels serious fast' },
        { title: 'From landing page to app', sub: 'based on the company goal' },
        { title: 'Ready for what comes next', sub: 'integrations, maintenance, and growth' },
      ],
    },
    proof: {
      title: 'I do not sell only design or code, but complete web solutions',
      subtitle: 'When a client works with me, the goal is to get a website or application that looks serious, runs fast, and can be used in real business immediately.',
      cards: [
        {
          title: 'Dozens of projects for real companies',
          body: 'I have worked with 30-40 clients and delivered 60-70+ websites and web projects across different industries and business types.',
          meta: 'Business websites',
        },
        {
          title: 'Range that helps the project',
          body: 'Business websites, full-stack applications, payment integrations, API connections, AI chatbots, and support after launch.',
          meta: 'Design + development',
        },
        {
          title: 'Fast delivery without chaos',
          body: 'I work fast when the goal is clear, but never at the cost of quality. The focus is on clean, professional, and maintainable delivery.',
          meta: 'Execution',
        },
      ],
      strip: ['Professional presentation', 'Clear structure', 'Fast and maintainable build'],
    },
    work: {
      title: 'Featured case studies',
      subtitle: 'Three projects that best show design quality, structure clarity, and how I approach client-facing websites.',
      primaryCta: 'Open project',
      secondaryCta: 'View all work',
      items: [
        {
          title: 'Milena Vasic',
          category: 'Healthcare website',
          challenge: 'Trust and clarity around services had to feel stronger than the design itself.',
          solution: 'A structure built around calm communication, clearer information, and a direct path to contact.',
          result: 'A more professional presence and an easier decision for the first conversation.',
          meta: 'Psychotherapy practice',
          link: 'https://nikolaskakavac.github.io/psihoterapeut-milena-vasic/',
          screenshotDesktop: 'work/psihoterapeut-desktop.png',
          screenshotMobile: 'work/psihoterapeut-mobile.png',
        },
        {
          title: 'InkVibe',
          category: 'Tattoo studio website',
          challenge: 'The site needed to feel bold and memorable while still making the brand look professional and easy to book.',
          solution: 'A stronger visual direction, cleaner section flow, portfolio-focused presentation, and a clearer path to inquiry.',
          result: 'A more distinctive brand presence and a website that pushes visitors more naturally toward contact or booking.',
          meta: 'Creative service brand',
          link: 'https://nikolaskakavac.github.io/InkVibe/',
          screenshotDesktop: 'work/inkvibe-desktop.png',
          screenshotMobile: 'work/inkvibe-mobile.png',
        },
        {
          title: 'Jobzee',
          category: 'Platform & SaaS',
          challenge: 'A more complex product needed to stay clear and accessible for multiple user types.',
          solution: 'A full-stack platform focused on clarity, user flows, and a modern interface system.',
          result: 'A more serious product presence and a base ready for further growth and iteration.',
          meta: 'Career platform',
          link: 'https://poslovi.vercel.app/',
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
        },
      ],
      archive: [
        { title: 'Bakery platform', link: 'https://nikolaskakavac.github.io/pekarska-platforma/' },
        { title: 'Hair salon', link: 'https://nikolaskakavac.github.io/frizerski/' },
        { title: 'InkVibe studio', link: 'https://nikolaskakavac.github.io/InkVibe/' },
        { title: 'PixelPulse agency', link: 'https://nikolaskakavac.github.io/PixelPulse/' },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'The service mix is set up so a company can start with a simpler site and grow into a more advanced product and long-term support.',
      items: [
        {
          title: 'Landing pages and business websites',
          desc: 'For companies that need a stronger online presence, a clearer service presentation, and a better path to inquiries, calls, or bookings.',
        },
        {
          title: 'Custom web applications',
          desc: 'For clients that need more than presentation: dashboards, user accounts, payment integrations, API connections, and more advanced product workflows.',
        },
        {
          title: 'Maintenance and ongoing development',
          desc: 'When a project already exists, but needs regular updates, improvements, new features, or technical support without constantly searching for another developer.',
        },
      ],
    },
    process: {
      title: 'A process with no surprises',
      subtitle: 'No confusion, no wasted time, and no moments where the client has no idea what is being done or what comes next.',
      steps: [
        { title: '01. Discovery', desc: 'Goals, target audience, offer clarity, and communication tone.' },
        { title: '02. Wireframe & direction', desc: 'Section structure, CTA flow, and visual direction before development starts.' },
        { title: '03. Design & development', desc: 'Premium UI and frontend that stays fast, clean, and maintainable.' },
        { title: '04. Launch & refinement', desc: 'Final polish, testing, and a handoff ready for SEO, ads, or next iterations.' },
      ],
    },
    about: {
      title: 'About',
      body:
        'Since 2018, I have been building websites and web applications for clients across different industries. I work best with companies that want a serious, clean, and professional web presence without improvisation.',
      points: [
        '40+ clients and 70+ website and web projects delivered.',
        'From landing pages and business websites to full-stack apps and SaaS products.',
        'Development and design background combined, so the final result feels cleaner, clearer, and more professional.',
      ],
      stackLabel: 'Expertise',
      stack: ['React / Next.js', 'Node.js / Express', 'Python / Django', 'PostgreSQL / MongoDB', 'SEO-ready frontend', 'Conversion-focused UI'],
    },
    resources: {
      title: 'Resources that keep building credibility',
      subtitle: 'Content that shows the way I think, the quality of the work, and the level of seriousness behind the service.',
      items: [
        {
          title: 'How a homepage builds trust fast',
          type: 'Guide',
          desc: 'What a potential client must see in the first few seconds to stay, trust, and click.',
        },
        {
          title: 'Checklist for a premium business website',
          type: 'Resource',
          desc: 'Section structure, proof elements, CTA logic, and what should never be skipped.',
        },
        {
          title: 'Case study framework for a freelance portfolio',
          type: 'Template',
          desc: 'A simple format that turns a project from a gallery item into a sales proof asset.',
        },
      ],
    },
    ctaBanner: {
      title: 'If you need a website or application that feels serious and can support real business, let’s talk.',
      body: 'On the first call, we define the goal, project scope, and the smartest next step.',
      primary: 'Book a call',
      secondary: 'Send a brief',
    },
    contact: {
      title: 'Contact',
      body: 'Share a few key details about the project and I will give you a concrete answer on how I would approach it, what the next step is, and whether I am the right fit.',
      emailLabel: 'Email',
      email: 'nikolaskakavac22@gmail.com',
      note: 'Reply within 24h',
      formLabels: { name: 'Name', email: 'Email', type: 'Project type', budget: 'Budget', details: 'Short brief' },
      submit: 'Send inquiry',
      success: 'The form is currently a demo lead flow, but the design and structure are ready for real capture. For now, reach out by email or book a call directly.',
      projectTypes: ['Business website', 'Portfolio', 'SaaS / web app', 'Redesign / optimization'],
      budgetOptions: ['1k - 2k EUR', '2k - 5k EUR', '5k+ EUR', 'Not sure yet'],
    },
    footer: {
      line: 'Available for new projects.',
      links: ['Case studies', 'Services', 'Process', 'Resources', 'Contact'],
    },
  },
}

function TiltCard({ element = 'div', className, style, children, tiltEnabled, maxRotation = 4, hoverScale = 1.015, ...rest }) {
  void tiltEnabled
  void maxRotation
  void hoverScale
  return createElement(element, { className, style, ...rest }, children)
}

function App() {
  const [lang, setLang] = useState('en')
  const [showIntroLoader, setShowIntroLoader] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const cursorRef = useRef(null)
  const processSectionRef = useRef(null)

  const t = content[lang]
  const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`
  const tiltEnabled = false
  const featuredTiltProps = { tiltEnabled, maxRotation: 5, hoverScale: 1.02 }

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntroLoader(false), 1100)
    return () => window.clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    const cursorElement = cursorRef.current
    if (!cursorElement) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return

    const moveCursor = (event) => {
      cursorElement.style.transform = `translate3d(${event.clientX - 11}px, ${event.clientY - 11}px, 0)`
      cursorElement.classList.add('visible')
    }

    const hideCursor = () => {
      cursorElement.classList.remove('visible')
    }

    const rootElement = document.documentElement
    window.addEventListener('pointermove', moveCursor, { passive: true })
    rootElement.addEventListener('mouseleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      rootElement.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
    }
  }, [])

  useEffect(() => {
    const sectionElement = processSectionRef.current
    if (!sectionElement) return

    const stepElements = Array.from(sectionElement.querySelectorAll('.process-card'))
    let frameId = 0

    const updateProgress = () => {
      frameId = 0
      const rect = sectionElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.28)))
      sectionElement.style.setProperty('--process-progress', progress.toFixed(3))

      stepElements.forEach((element, index) => {
        const threshold = (index + 0.45) / stepElements.length
        element.classList.toggle('is-active', progress >= threshold)
      })
    }

    const requestProgressUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestProgressUpdate, { passive: true })
    window.addEventListener('resize', requestProgressUpdate)

    return () => {
      window.removeEventListener('scroll', requestProgressUpdate)
      window.removeEventListener('resize', requestProgressUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <AnimatePresence>{showIntroLoader && <Preloader />}</AnimatePresence>

      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span></span>
      </div>

      <div
        className={`page ${showIntroLoader ? 'intro-pending' : 'intro-ready'} trust-mode`}
        data-theme="dark"
        style={{
          '--page-bg-image': `url("${withBase('logos/background.png')}")`,
        }}
      >
        <PremiumNavbar
          brand="SkaleDigitals"
          logoSrc={withBase('491462317_2497496547265667_8538657457538507949_n.jpg')}
          lang={lang.toUpperCase()}
          navItems={[
            { label: t.nav.proof, href: '#proof', icon: 'proof' },
            { label: t.nav.work, href: '#work', icon: 'work' },
            { label: t.nav.services, href: '#services', icon: 'services' },
            { label: t.nav.process, href: '#process', icon: 'process' },
            { label: t.nav.about, href: '#about', icon: 'about' },
            { label: t.nav.contact, href: '#contact', icon: 'contact' },
          ]}
          ctaLabel={lang === 'sr' ? 'Zakaži poziv' : 'Book a call'}
          onLangChange={(nextLang) => setLang(nextLang.toLowerCase())}
        />

        <main className="main" lang={lang === 'sr' ? 'sr' : 'en'}>
          <section className="hero hero-trust-layout" id="top">
            <div className="hero-copy">
              <h1>I turn clicks into clients.</h1>
              <p className="hero-supporting-heading">Your website should make you money.</p>
              <p className="hero-subtitle">
                From landing pages to full web platforms, I design and develop fast, professional websites that build trust and drive real business results.
              </p>
              <div className="hero-buttons">
                <a className="btn primary" href="#contact">Book a Free Call &rarr;</a>
                <a className="btn ghost" href="#work">View Case Studies</a>
              </div>
              <p className="hero-microcopy">No commitment &bull; 15 min &bull; Instant booking</p>
              <div className="hero-micro-proof" aria-label="Client rating">
                <span className="hero-micro-proof-stars" aria-hidden="true">★★★★★</span>
                <span className="hero-micro-proof-rating">4.9/5 client satisfaction</span>
              </div>
            </div>
            <aside className="hero-side-proof" aria-label="Hero proof">
              <div className="hero-side-proof-inner">
                <span className="hero-side-proof-label">Built for client results</span>
                <div className="hero-trust-strip" aria-label="Trust stats">
                  <span className="hero-trust-item">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineFolderOpen />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>60+</strong>
                      <small>projects delivered</small>
                    </span>
                  </span>
                  <span className="hero-trust-item">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineSparkles />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>2018</strong>
                      <small>working with real clients since</small>
                    </span>
                  </span>
                  <span className="hero-trust-item">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineClock />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>24h</strong>
                      <small>replies within</small>
                    </span>
                  </span>
                </div>
              </div>
            </aside>
          </section>

          <section className="section proof-section" id="proof">
            <div className="section-header">
              <span className="eyebrow">Testimonials</span>
              <h2>{t.proof.title}</h2>
              <p>{t.proof.subtitle}</p>
            </div>
            <div className="proof-strip clean-proof-strip">
              {t.proof.strip.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="grid testimonial-grid proof-grid">
              {t.proof.cards.map((item, index) => (
                <TiltCard key={item.title} element="article" className="testimonial reveal proof-card" style={{ '--delay': `${0.06 + index * 0.06}s` }} tiltEnabled={tiltEnabled}>
                  <span className="proof-card-label">{lang === 'sr' ? 'Rezultat' : 'Result'}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <strong>{item.meta}</strong>
                </TiltCard>
              ))}
            </div>
          </section>

          <section className="section work-section" id="work">
            <div className="section-header work-header-row">
              <div>
                <span className="eyebrow">Case studies</span>
                <h2>{t.work.title}</h2>
                <p>{t.work.subtitle}</p>
              </div>
              <a className="text-link" href="#contact">{t.work.secondaryCta}</a>
            </div>
            <div className="grid case-study-grid">
              {t.work.items.map((item, index) => (
                <TiltCard key={item.title} element="article" className="work-card case-study-card reveal" style={{ '--delay': `${0.08 + index * 0.06}s` }} {...featuredTiltProps}>
                  <div className="work-media">
                    <div className="work-shot desktop">
                      <img src={withBase(item.screenshotDesktop)} alt={`${item.title} desktop preview`} loading="lazy" />
                    </div>
                    <div className="work-shot mobile">
                      <img src={withBase(item.screenshotMobile)} alt={`${item.title} mobile preview`} loading="lazy" />
                    </div>
                  </div>
                  <div className="case-study-top">
                    <span className="work-tag">{item.category}</span>
                    <span className="work-meta">{item.meta}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="case-study-copy">
                    <p><strong>{lang === 'sr' ? 'Problem:' : 'Challenge:'}</strong> {item.challenge}</p>
                    <p><strong>{lang === 'sr' ? 'Rešenje:' : 'Solution:'}</strong> {item.solution}</p>
                    <p><strong>{lang === 'sr' ? 'Ishod:' : 'Result:'}</strong> {item.result}</p>
                  </div>
                  <a className="btn ghost" href={item.link} target="_blank" rel="noopener noreferrer">{t.work.primaryCta}</a>
                </TiltCard>
              ))}
            </div>
            <div className="work-archive">
              {t.work.archive.map((item) => (
                <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="archive-link">{item.title}</a>
              ))}
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-header">
              <span className="eyebrow">{lang === 'sr' ? 'Ponuda' : 'Offer'}</span>
              <h2>{t.services.title}</h2>
              <p>{t.services.subtitle}</p>
            </div>
            <div className="grid service-grid">
              {t.services.items.map((item, index) => (
                <TiltCard key={item.title} element="article" className="card service-card reveal" style={{ '--delay': `${0.06 + index * 0.06}s` }} {...featuredTiltProps}>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </TiltCard>
              ))}
            </div>
          </section>

          <section className="section" id="process">
            <div className="section-header">
              <span className="eyebrow">Roadmap</span>
              <h2>{t.process.title}</h2>
              <p>{t.process.subtitle}</p>
            </div>
            <div ref={processSectionRef} className="process-roadmap-shell">
              <div className="process-roadmap-line" aria-hidden="true">
                <span className="process-roadmap-line-track"></span>
                <span className="process-roadmap-line-progress"></span>
              </div>
              <div className="grid process-grid process-trust-grid">
                {t.process.steps.map((step, index) => (
                  <TiltCard key={step.title} element="article" className="process-card reveal" style={{ '--delay': `${0.08 + index * 0.05}s` }} {...featuredTiltProps}>
                    <span className="process-node" aria-hidden="true"></span>
                    <div className="process-icon" aria-hidden="true">
                      {index === 0 ? <HiOutlineMagnifyingGlass /> : null}
                      {index === 1 ? <HiOutlineSwatch /> : null}
                      {index === 2 ? <HiOutlineCodeBracketSquare /> : null}
                      {index === 3 ? <HiOutlineRocketLaunch /> : null}
                    </div>
                    <span className="step-index">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </section>

          <section className="section cta-banner" aria-label={lang === 'sr' ? 'Poziv na akciju' : 'Call to action'}>
            <TiltCard element="div" className="cta-banner-content cta-trust" tiltEnabled={tiltEnabled}>
              <span className="eyebrow">Next step</span>
              <h2>{t.ctaBanner.title}</h2>
              <p>{t.ctaBanner.body}</p>
              <div className="cta-banner-actions">
                <a className="btn primary" href="#contact">{t.ctaBanner.primary}</a>
              </div>
            </TiltCard>
          </section>

          <section className="section" id="about">
            <div className="about about-trust">
              <div className="about-photo-card">
                <img src={withBase('491462317_2497496547265667_8538657457538507949_n.jpg')} alt="Nikola Skakavac" loading="lazy" />
                <div className="about-photo-note">
                  <strong>{lang === 'sr' ? 'Direktna saradnja' : 'Direct collaboration'}</strong>
                  <span>{lang === 'sr' ? 'Strategija, dizajn i development u jednom toku.' : 'Strategy, design, and development in one flow.'}</span>
                </div>
              </div>
              <TiltCard element="div" className="stack about-copy-card" tiltEnabled={tiltEnabled}>
                <span>{t.about.stackLabel}</span>
                <h2>{t.about.title}</h2>
                <p>{t.about.body}</p>
                <ul className="about-point-list">
                  {t.about.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="stack-logos" aria-label={lang === 'sr' ? 'Logoi tehnologija' : 'Technology logos'}>
                  <img src={withBase('logos/react.png')} alt="React" loading="lazy" />
                  <img src={withBase('logos/next.png')} alt="Next.js" loading="lazy" />
                  <img src={withBase('logos/node.png')} alt="Node.js" loading="lazy" />
                  <img src={withBase('logos/express.png')} alt="Express" loading="lazy" />
                  <img src={withBase('logos/python.png')} alt="Python" loading="lazy" />
                  <img src={withBase('logos/django.png')} alt="Django" loading="lazy" />
                  <img src={withBase('logos/mongodb.png')} alt="MongoDB" loading="lazy" />
                  <img src={withBase('logos/postgresql.png')} alt="PostgreSQL" loading="lazy" />
                </div>
                <ul>
                  {t.about.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </TiltCard>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div>
              <span className="eyebrow">Let's talk</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.body}</p>
              <div className="contact-meta">
                <span>{t.contact.emailLabel}</span>
                <strong>{t.contact.email}</strong>
                <em>{t.contact.note}</em>
              </div>
            </div>
            <TiltCard element="div" className="contact-card contact-form-card" tiltEnabled={tiltEnabled}>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <label><span>{t.contact.formLabels.name}</span><input type="text" placeholder={lang === 'sr' ? 'Vaše ime' : 'Your name'} /></label>
                <label><span>{t.contact.formLabels.email}</span><input type="email" placeholder="name@email.com" /></label>
                <label>
                  <span>{t.contact.formLabels.type}</span>
                  <select defaultValue="">
                    <option value="" disabled>{lang === 'sr' ? 'Odaberi tip projekta' : 'Select project type'}</option>
                    {t.contact.projectTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label>
                  <span>{t.contact.formLabels.budget}</span>
                  <select defaultValue="">
                    <option value="" disabled>{lang === 'sr' ? 'Odaberi okvirni budžet' : 'Select budget range'}</option>
                    {t.contact.budgetOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="contact-form-full">
                  <span>{t.contact.formLabels.details}</span>
                  <textarea rows="5" placeholder={lang === 'sr' ? 'Cilj projekta, rok i sve što je bitno.' : 'Goal, timeline, and anything important to know.'}></textarea>
                </label>
                <button className="btn primary" type="submit">{t.contact.submit}</button>
              </form>
              {formSubmitted && <p className="form-success">{t.contact.success}</p>}
            </TiltCard>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content footer-trust-content">
            <span>{t.footer.line}</span>
            <span>&copy; 2026 {t.brand}</span>
            <div className="footer-link-row">
              <a href="#proof">{t.nav.proof}</a>
              <a href="#work">{t.nav.work}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#process">{t.nav.process}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com/skaledigitals" target="_blank" rel="noopener noreferrer" className="social-link social-icon-link" aria-label="Instagram">
              <img src={withBase('logos/insta.avif')} alt="Instagram" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/nikolaskakavac/" target="_blank" rel="noopener noreferrer" className="social-link social-icon-link" aria-label="LinkedIn">
              <img src={withBase('logos/linkedin.png')} alt="LinkedIn" loading="lazy" />
            </a>
            <a href="https://github.com/nikolaskakavac" target="_blank" rel="noopener noreferrer" className="social-link social-icon-link" aria-label="GitHub">
              <img src={withBase('logos/github.png')} alt="GitHub" loading="lazy" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
