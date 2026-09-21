import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiArrowTopRightOnSquare, HiEnvelope, HiXMark } from 'react-icons/hi2'
import { LuAppWindow, LuPanelsTopLeft, LuWorkflow } from 'react-icons/lu'
import PremiumNavbar from './components/PremiumNavbar'
import Preloader from './components/Preloader'
import './index.css'

const WEB3FORMS_ACCESS_KEY = '32d6d900-2222-452d-b767-a0d8dcc38fb8'
const serviceIcons = [LuPanelsTopLeft, LuAppWindow, LuWorkflow]

const projects = [
  {
    id: 'agentmasterclass', title: 'AgentMasterclass',
    eyebrow: { en: 'Real estate education', sr: 'Edukacija za agente nekretnina' },
    summary: { en: 'A program website that helps new and working real estate agents find the right in-person training path.', sr: 'Sajt programa koji početnicima i agentima nekretnina pomaže da pronađu odgovarajuću obuku uživo.' },
    challenge: { en: 'Beginners and working agents need different information before choosing a training program.', sr: 'Početnicima i agentima koji već rade potrebne su različite informacije prije izbora programa obuke.' },
    solution: { en: 'The public pages separate the two audiences, present both programs, and show clear entry points to apply or continue to payment.', sr: 'Javne stranice razdvajaju dvije grupe, predstavljaju oba programa i pokazuju jasne ulaze za prijavu ili nastavak plaćanja.' },
    capabilities: ['Education website', 'Two program paths', 'Application entry', 'Mobile experience'],
    flow: { en: ['Visitor', 'Choose a path', 'Compare programs', 'View a program', 'Apply'], sr: ['Posjetilac', 'Izbor puta', 'Poređenje programa', 'Pregled programa', 'Prijava'] },
    desktop: 'work/agentmasterclass-desktop.png', mobile: 'work/agentmasterclass-mobile.png',
    detailImage: 'work/agentmasterclass-program-mobile.png',
    detailCaption: { en: 'Program selection on mobile', sr: 'Izbor programa na telefonu' },
    url: 'https://agentmasterclass.rs',
  },
  {
    id: 'arbexfund', title: 'ArbexFund',
    eyebrow: { en: 'Finance platform', sr: 'Finansijska platforma' },
    summary: { en: 'An account sales system that makes a complex financial offer easier to understand, explore, and act on.', sr: 'Sistem za prodaju naloga koji kompleksnu finansijsku ponudu čini lakšom za razumijevanje, pregled i sljedeći korak.' },
    challenge: { en: 'Account sales can feel risky when the offer, process, and trust signals are not structured clearly.', sr: 'Prodaja naloga može delovati rizično kada ponuda, proces i signali poverenja nisu jasno strukturirani.' },
    solution: { en: 'A focused platform combining account discovery, buyer inquiries, and the internal workflow needed to manage the offer.', sr: 'Fokusirana platforma koja spaja pregled naloga, upite kupaca i interni tok potreban za upravljanje ponudom.' },
    engineering: { en: 'Responsive full-stack application with separate client and server logic, structured data, and an administration workflow.', sr: 'Responsive full-stack aplikacija sa odvojenom klijentskom i serverskom logikom, strukturiranim podacima i administrativnim tokom.' },
    capabilities: ['Web application', 'Account catalog', 'Buyer inquiries', 'Admin workflow'],
    flow: { en: ['Visitor', 'Account offer', 'Selection', 'Inquiry', 'Admin follow-up'], sr: ['Posjetilac', 'Ponuda naloga', 'Odabir', 'Upit', 'Admin obrada'] },
    stack: ['React', 'Node.js', 'Express', 'MongoDB'], desktop: 'work/arbexpc.png', mobile: 'work/arbexmob.png', url: 'https://arbexfund.com',
  },
  {
    id: 'inkvibe', title: 'InkVibe',
    eyebrow: { en: 'Tattoo studio website', sr: 'Sajt za tattoo studio' },
    summary: { en: 'A studio website that puts the work first and gives prospective clients a direct path to a booking inquiry.', sr: 'Sajt studija koji radove stavlja u prvi plan i potencijalnim klijentima daje direktan put do upita za termin.' },
    challenge: { en: 'The site needed to feel distinctive without making the portfolio or booking journey difficult to understand.', sr: 'Sajt je morao da bude prepoznatljiv bez komplikovanja portfolija i puta do rezervacije.' },
    solution: { en: 'A stronger visual direction, clear work presentation, and a direct booking path across desktop and mobile.', sr: 'Jači vizuelni pravac, jasna prezentacija radova i direktan booking tok na desktopu i telefonu.' },
    engineering: { en: 'A fast responsive interface built around image presentation, clear navigation, and a consistent inquiry path.', sr: 'Brz responsive interfejs izgrađen oko prikaza radova, jasne navigacije i dosljednog puta do upita.' },
    capabilities: ['Business website', 'Work portfolio', 'Booking inquiry', 'Mobile experience'],
    flow: { en: ['Visitor', 'Portfolio', 'Studio fit', 'Booking inquiry'], sr: ['Posjetilac', 'Portfolio', 'Izbor studija', 'Upit za termin'] },
    stack: ['React', 'Vite', 'Responsive UI', 'Booking flow'], desktop: 'work/inkvibe-desktop.png', mobile: 'work/inkvibe-mobile.png', url: 'https://nikolaskakavac.github.io/InkVibe/',
  },
]

const copy = {
  en: {
    nav: { work: 'Work', services: 'Services', process: 'Process', about: 'About', contact: 'Contact' },
    hero: { eyebrow: 'AI-powered software studio', title: <>We build digital systems <br />that grow your business.</>, body: 'From high-converting websites to custom web apps, payments and automated workflows — we design and build the systems behind growing businesses.', primary: 'Start a Project', secondary: 'View Our Work', capabilities: ['Websites', 'Web Apps', 'Payments', 'Automations'] },
    work: { eyebrow: 'Selected work', title: 'Built for real businesses.', body: 'A small selection of websites and products where clarity, implementation, and business goals had to work together.', view: 'View case study' },
    problems: { eyebrow: 'Problems we solve', title: 'When your business outgrows a basic website.', items: ["You're handling applications manually.", 'Payments and customer data live in different places.', "Your website doesn't connect to the way your business actually works."], closing: "That's where we come in." },
    services: { eyebrow: 'What we build', title: 'Digital infrastructure, without the agency overhead.', items: [['Websites', 'You need a better way to attract and convert customers.'], ['Web Applications', 'Your product needs functionality beyond a traditional website.'], ['Business Systems', 'Your business needs multiple processes working together.']] },
    statement: { label: 'Our operating advantage', title: <>AI-powered.<br /><span>Engineer-led.</span></>, body: 'We combine modern AI development workflows with hands-on engineering to design, build, and ship reliable software faster.', points: ['AI-assisted delivery', 'Human architecture', 'Production-ready'] },
    process: { eyebrow: 'Process', title: 'Clear from first conversation to launch.', steps: [['Understand', 'We map the business, users, workflow, and requirements before development begins.'], ['Design', 'We shape the structure, experience, and visual direction.'], ['Build', 'We implement the product and connect the systems it needs.'], ['Launch', 'We test, refine, deploy, and prepare the next steps.']] },
    about: { eyebrow: 'Why Skale', title: 'Small by design.', body: 'Work directly with the person designing the solution — someone who understands both the business problem and the technical implementation.', second: 'No account-manager layers or unnecessary overhead. A modern AI-native workflow keeps delivery lean while the decisions and responsibility stay human.', direct: 'Direct collaboration with Nikola' },
    proof: { eyebrow: 'Client perspective', title: 'Trust is built in the work.' },
    contact: { eyebrow: 'Start a conversation', title: <>Have something in mind?<br />Let’s figure out how to build it.</>, body: 'Best fit for businesses that need more than a template.', call: 'Start a Project', name: 'Name', email: 'Email', type: 'Project type', details: 'Tell us about the project', send: 'Send project brief', sending: 'Sending…', success: 'Thanks. Your message is on its way, and I will reply within 24 hours.', error: 'The message could not be sent. Please try again or email skaledigitalss@gmail.com.', types: ['Business website', 'Web application', 'Business system / integration', 'Redesign', 'Not sure yet'] },
    case: { problem: 'Business problem', system: 'System', flow: 'Customer flow', engineering: 'Engineering', technology: 'Technology' },
    footer: 'Digital products for growing businesses.',
  },
  sr: {
    nav: { work: 'Radovi', services: 'Usluge', process: 'Proces', about: 'O nama', contact: 'Kontakt' },
    hero: { eyebrow: 'AI-powered software studio', title: <>Gradimo digitalne sisteme <br />koji razvijaju vaš biznis.</>, body: 'Od sajtova koji pretvaraju posete u upite do web aplikacija, plaćanja i automatizovanih procesa, dizajniramo i gradimo sisteme iza rastućih firmi.', primary: 'Započni projekat', secondary: 'Pogledaj radove', capabilities: ['Sajtovi', 'Web aplikacije', 'Plaćanja', 'Automatizacije'] },
    work: { eyebrow: 'Izdvojeni radovi', title: 'Napravljeno za stvarne biznise.', body: 'Mali izbor sajtova i proizvoda gde su jasnoća, implementacija i poslovni cilj morali da rade zajedno.', view: 'Otvori case study' },
    problems: { eyebrow: 'Problemi koje rješavamo', title: 'Kada vaš biznis preraste osnovni sajt.', items: ['Prijave i dalje obrađujete ručno.', 'Plaćanja i podaci o klijentima nalaze se na različitim mjestima.', 'Vaš sajt nije povezan sa načinom na koji biznis stvarno funkcioniše.'], closing: 'Tu mi preuzimamo.' },
    services: { eyebrow: 'Šta gradimo', title: 'Digitalna infrastruktura bez agencijskog overhead-a.', items: [['Sajtovi', 'Treba vam bolji način da privučete i pretvorite posjetioce u klijente.'], ['Web aplikacije', 'Vašem proizvodu treba više funkcionalnosti od tradicionalnog sajta.'], ['Poslovni sistemi', 'Vašem biznisu treba više povezanih procesa koji rade zajedno.']] },
    statement: { label: 'Naša operativna prednost', title: <>AI-powered.<br /><span>Engineer-led.</span></>, body: 'Spajamo moderne AI razvojne procese sa praktičnim inženjeringom kako bismo pouzdan software dizajnirali, izgradili i isporučili brže.', points: ['AI-assisted delivery', 'Ljudska arhitektura', 'Spremno za produkciju'] },
    process: { eyebrow: 'Proces', title: 'Jasno od prvog razgovora do launch-a.', steps: [['Razumijevanje', 'Mapiramo biznis, korisnike, workflow i zahtjeve prije početka razvoja.'], ['Dizajn', 'Oblikujemo strukturu, iskustvo i vizuelni pravac.'], ['Izrada', 'Gradimo proizvod i povezujemo sisteme koji su mu potrebni.'], ['Launch', 'Testiramo, doterujemo, objavljujemo i definišemo sledeće korake.']] },
    about: { eyebrow: 'Zašto Skale', title: 'Namjerno mali.', body: 'Radite direktno sa osobom koja dizajnira rješenje i razumije i poslovni problem i tehničku implementaciju.', second: 'Bez account-manager slojeva i nepotrebnog overhead-a. Moderan AI-native workflow održava isporuku efikasnom, dok odluke i odgovornost ostaju ljudski.', direct: 'Direktna saradnja sa Nikolom' },
    proof: { eyebrow: 'Iskustva klijenata', title: 'Poverenje se gradi kroz rad.' },
    contact: { eyebrow: 'Započnimo razgovor', title: <>Imate nešto na umu?<br />Hajde da vidimo kako da to izgradimo.</>, body: 'Najbolje odgovara biznisima kojima treba više od template rješenja.', call: 'Započni projekat', name: 'Ime', email: 'Email', type: 'Tip projekta', details: 'Opišite projekat', send: 'Pošalji brief', sending: 'Šalje se…', success: 'Hvala. Poruka je poslata i odgovoriću u roku od 24 sata.', error: 'Poruka nije poslata. Pokušajte ponovo ili pišite na skaledigitalss@gmail.com.', types: ['Business website', 'Web aplikacija', 'Poslovni sistem / integracija', 'Redizajn', 'Nisam siguran'] },
    case: { problem: 'Poslovni problem', system: 'Sistem', flow: 'Put korisnika', engineering: 'Inženjering', technology: 'Tehnologije' },
    footer: 'Digitalni proizvodi za rastuće biznise.',
  },
}

const testimonials = [
  { name: 'Kosta Kurteš', company: 'ArbexFund', en: 'ArbexFund got a much more serious online presence. The platform now presents the offer more clearly and moves users toward contact faster.', sr: 'ArbexFund je dobio mnogo ozbiljniji online nastup. Platforma sada jasnije prikazuje ponudu i brže vodi korisnika ka kontaktu.' },
  { name: 'Daniel Foster', company: 'SaaS startup', en: 'We needed a site that looked sharp enough for investors but still simple for customers. The result gave us a cleaner pitch and a more serious presence.', sr: 'Trebao nam je sajt dovoljno ozbiljan za investitore, ali i jednostavan za korisnike. Rezultat je doneo jasniju prezentaciju i ozbiljniji nastup.' },
  { name: 'Stefan Soldo', company: 'Business website client', en: 'The collaboration was clear from start to finish. I got a website that looks professional, runs fast, and presents the service much better.', sr: 'Saradnja je bila jasna od početka do kraja. Dobio sam sajt koji izgleda profesionalno, radi brzo i mnogo bolje predstavlja uslugu.' },
]

function App() {
  const [lang, setLang] = useState('en')
  const [showIntroLoader, setShowIntroLoader] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [activeProject, setActiveProject] = useState(null)
  const [formStatus, setFormStatus] = useState('idle')
  const caseDialogRef = useRef(null)
  const caseCloseRef = useRef(null)
  const t = copy[lang]
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  useEffect(() => {
    if (!showIntroLoader) return undefined
    const introTimer = window.setTimeout(() => setShowIntroLoader(false), 720)
    return () => window.clearTimeout(introTimer)
  }, [showIntroLoader])

  useEffect(() => {
    if (!activeProject) return undefined
    const previouslyFocused = document.activeElement
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null)
      if (event.key !== 'Tab' || !caseDialogRef.current) return
      const focusable = [...caseDialogRef.current.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.requestAnimationFrame(() => caseCloseRef.current?.focus())
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); previouslyFocused?.focus?.() }
  }, [activeProject])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', `SkaleDigitals inquiry from ${formData.get('name') || 'website visitor'}`)
    formData.append('from_name', formData.get('name') || 'SkaleDigitals website visitor')
    setFormStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed')
      form.reset(); setFormStatus('success')
    } catch (error) { console.error(error); setFormStatus('error') }
  }

  const structuredData = { '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': 'https://skaledigitals.com/#business', name: 'SkaleDigitals', url: 'https://skaledigitals.com/', email: 'skaledigitalss@gmail.com', image: 'https://skaledigitals.com/work/dk.png', founder: { '@type': 'Person', name: 'Nikola Skakavac', jobTitle: 'Web Designer and Full-stack Developer' }, sameAs: ['https://www.linkedin.com/in/nikolaskakavac/', 'https://github.com/nikolaskakavac', 'https://instagram.com/skaledigitals'], serviceType: ['Business websites', 'Web applications', 'Payment integrations', 'Business automation'] }

  return <div className="site-shell">
    <AnimatePresence>{showIntroLoader && <Preloader />}</AnimatePresence>
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    <PremiumNavbar lang={lang.toUpperCase()} onLangChange={(next) => setLang(next.toLowerCase())} labels={t.nav} ctaLabel={t.hero.primary} />
    <main lang={lang === 'sr' ? 'sr' : 'en'}>
      <section className="studio-hero" id="top"><div className="shell hero-inner">
        <span className="section-kicker">{t.hero.eyebrow}</span><h1>{t.hero.title}</h1><p className="hero-lede">{t.hero.body}</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">{t.hero.primary}<HiArrowRight /></a><a className="button button-text" href="#work">{t.hero.secondary}</a></div>
        <div className="capability-line">{t.hero.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
      </div></section>

      <section className="section selected-work" id="work"><div className="shell">
        <header className="section-heading"><span className="section-kicker">{t.work.eyebrow}</span><h2>{t.work.title}</h2><p>{t.work.body}</p></header>
        <div className="project-list">{projects.map((project, index) => <article className={`project-feature project-${project.id} ${index % 2 ? 'project-reverse' : ''}`} key={project.id}>
          <button className="project-visual" type="button" onClick={() => setActiveProject(project)} aria-label={`${t.work.view}: ${project.title}`}>
            <span className="browser-frame"><span className="browser-bar"><i></i><i></i><i></i></span><img src={withBase(project.desktop)} alt={`${project.title} desktop preview`} loading="lazy" /></span>
            <span className="phone-frame"><img src={withBase(project.mobile)} alt={`${project.title} mobile preview`} loading="lazy" /></span>
          </button>
          <div className="project-copy"><span className="project-index">0{index + 1}</span><span className="section-kicker">{project.eyebrow[lang]}</span><h3>{project.id === 'agentmasterclass' ? <>Agent<wbr />Masterclass</> : project.title}</h3><p>{project.summary[lang]}</p><div className="project-capabilities" aria-label={lang === 'sr' ? 'Mogućnosti sistema' : 'System capabilities'}>{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div><button className="project-link" type="button" onClick={() => setActiveProject(project)}>{t.work.view}<HiArrowRight /></button></div>
        </article>)}</div>
      </div></section>

      <section className="section problems-section" id="problems" aria-labelledby="problems-title"><div className="shell">
        <header className="section-heading compact-heading"><span className="section-kicker">{t.problems.eyebrow}</span><h2 id="problems-title">{t.problems.title}</h2></header>
        <ol className="problem-list">{t.problems.items.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
        <p className="problems-closing">{t.problems.closing}</p>
      </div></section>

      <section className="section services-section" id="services"><div className="shell"><header className="section-heading compact-heading"><span className="section-kicker">{t.services.eyebrow}</span><h2>{t.services.title}</h2></header><div className="service-list">{t.services.items.map(([title, body], index) => {
        const ServiceIcon = serviceIcons[index]
        return <article className="service-row" key={title}><span>0{index + 1}</span><div className="service-title"><span className="service-icon" aria-hidden="true"><ServiceIcon /></span><h3>{title}</h3></div><p>{body}</p></article>
      })}</div></div></section>

      <section className="section engineering-section"><div className="shell engineering-inner"><div><span className="section-kicker">{t.statement.label}</span><h2>{t.statement.title}</h2></div><div className="engineering-copy"><p>{t.statement.body}</p><ul>{t.statement.points.map((point) => <li key={point}>{point}</li>)}</ul></div></div></section>

      <section className="section process-section" id="process"><div className="shell"><header className="section-heading compact-heading"><span className="section-kicker">{t.process.eyebrow}</span><h2>{t.process.title}</h2></header><ol className="process-list">{t.process.steps.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></div></section>

      <section className="section about-section" id="about"><div className="shell about-inner"><div className="about-photo"><img src={withBase('nikola-contact.png')} alt="Nikola Skakavac, founder of SkaleDigitals" loading="lazy" /><span>{t.about.direct}</span></div><div className="about-copy"><span className="section-kicker">{t.about.eyebrow}</span><h2>{t.about.title}</h2><p>{t.about.body}</p><p>{t.about.second}</p></div></div></section>

      <section className="section proof-section" aria-labelledby="proof-title"><div className="shell"><header className="section-heading compact-heading"><span className="section-kicker">{t.proof.eyebrow}</span><h2 id="proof-title">{t.proof.title}</h2></header><div className="quote-grid">{testimonials.map((item) => <figure key={item.name}><blockquote>“{item[lang]}”</blockquote><figcaption><strong>{item.name}</strong><span>{item.company}</span></figcaption></figure>)}</div></div></section>

      <section className="section contact-section" id="contact"><div className="shell contact-inner"><div className="contact-copy"><span className="section-kicker">{t.contact.eyebrow}</span><h2>{t.contact.title}</h2><p>{t.contact.body}</p><a className="button button-primary contact-call" href="#project-brief">{t.contact.call}<HiArrowRight /></a><a className="direct-email" href="mailto:skaledigitalss@gmail.com"><HiEnvelope />skaledigitalss@gmail.com</a></div><form className="project-form" id="project-brief" onSubmit={handleSubmit}><input className="honeypot" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" /><label><span>{t.contact.name}</span><input name="name" type="text" required autoComplete="name" /></label><label><span>{t.contact.email}</span><input name="email" type="email" required autoComplete="email" /></label><label className="form-wide"><span>{t.contact.type}</span><select name="type" defaultValue="" required><option value="" disabled>—</option>{t.contact.types.map((item) => <option key={item}>{item}</option>)}</select></label><label className="form-wide"><span>{t.contact.details}</span><textarea name="message" rows="4" required /></label><button className="button button-primary form-submit" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? t.contact.sending : t.contact.send}<HiArrowRight /></button>{formStatus === 'success' && <p className="form-status success" role="status">{t.contact.success}</p>}{formStatus === 'error' && <p className="form-status error" role="alert">{t.contact.error}</p>}</form></div></section>
    </main>

    <footer className="site-footer"><div className="shell footer-inner"><div><a className="footer-brand" href="#top" aria-label="SkaleDigitals home"><span className="footer-logo" aria-hidden="true" /></a><p>{t.footer}</p></div><nav aria-label="Footer"><a href="#work">{t.nav.work}</a><a href="#services">{t.nav.services}</a><a href="#about">{t.nav.about}</a><a href="#contact">{t.nav.contact}</a></nav><div className="footer-socials"><a href="https://instagram.com/skaledigitals" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com/in/nikolaskakavac/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/nikolaskakavac" target="_blank" rel="noreferrer">GitHub</a></div><span className="copyright">© 2026 SkaleDigitals</span></div></footer>

    {activeProject && <div className="case-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveProject(null)}>
      <section className={`case-dialog case-dialog-${activeProject.id}`} ref={caseDialogRef} role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button className="case-close" ref={caseCloseRef} type="button" autoFocus onClick={() => setActiveProject(null)} aria-label={lang === 'sr' ? 'Zatvori' : 'Close'}><HiXMark /></button>
        <div className="case-image"><img src={withBase(activeProject.desktop)} alt={`${activeProject.title} desktop page`} /></div>
        <div className="case-content">
          <span className="section-kicker">{activeProject.eyebrow[lang]}</span><h2 id="case-title">{activeProject.id === 'agentmasterclass' ? <>Agent<wbr />Masterclass</> : activeProject.title}</h2>
          <div className={`case-story ${activeProject.engineering ? '' : 'case-story-compact'}`}>
            <div><span>{t.case.problem}</span><p>{activeProject.challenge[lang]}</p></div>
            <div><span>{t.case.system}</span><p>{activeProject.solution[lang]}</p></div>
            {activeProject.engineering && <div><span>{t.case.engineering}</span><p>{activeProject.engineering[lang]}</p></div>}
          </div>
          {activeProject.detailImage && <figure className="case-detail-visual"><figcaption>{activeProject.detailCaption[lang]}</figcaption><img src={withBase(activeProject.detailImage)} alt={`${activeProject.title}: ${activeProject.detailCaption[lang]}`} loading="lazy" /></figure>}
          <div className="customer-flow"><span>{t.case.flow}</span><ol>{activeProject.flow[lang].map((step) => <li key={step}>{step}</li>)}</ol></div>
          {(activeProject.stack || activeProject.url) && <div className="case-footer">
            {activeProject.stack && <div className="case-technology"><span>{t.case.technology}</span><div className="project-stack">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div></div>}
            {activeProject.url && <a className="button button-primary" href={activeProject.url} target="_blank" rel="noreferrer">{lang === 'sr' ? 'Otvori projekat' : 'Open live project'}<HiArrowTopRightOnSquare /></a>}
          </div>}
        </div>
      </section>
    </div>}
  </div>
}

export default App
