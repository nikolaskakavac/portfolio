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
import PremiumCTAButton from './components/PremiumCTAButton'
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
      title: 'Get more clients online.',
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
          title: 'Marko Petrovic',
          body: 'Pre sajta smo izgledali kao jos jedna lokalna firma. Posle novog homepage-a ljudi mnogo cesce dodju vec spremni za razgovor, jer odmah razumeju cime se bavimo i zasto da nas kontaktiraju.',
          meta: 'Direktor, gradjevinska firma',
        },
        {
          title: 'Jelena Markovic',
          body: 'Najvise nam je znacilo sto je sve slozeno tako da klijent brzo vidi usluge, cene i sledeci korak. Manje vremena trosimo na objasnjavanje u porukama, a vise na stvarne rezervacije.',
          meta: 'Vlasnica, beauty studio',
        },
        {
          title: 'Daniel Foster',
          body: 'We needed a site that looked sharp enough for investors but still simple for customers. The final result gave us a cleaner pitch, better first impressions, and a much more serious online presence.',
          meta: 'Co-founder, SaaS startup',
        }
      ],
      strip: ['Profesionalan izgled', 'Jasna struktura', 'Brz i održiv development'],
    },
    work: {
      title: 'Izdvojeni case studies',
      subtitle: 'Tri projekta koja najbolje pokazuju kvalitet dizajna, jasnoću strukture i način na koji pristupam klijentskim sajtovima.',
      primaryCta: 'Pogledaj projekat',
      secondaryCta: 'Pogledaj sve radove',
      allTitle: 'Svi radovi',
      allSubtitle: 'Pregled svih sajtova i web projekata iz portfolija, sa screenshotovima za desktop i mobile prikaz.',
      allItems: [
        {
          title: 'InkVibe',
          category: 'Tattoo studio website',
          meta: 'Creative service brand',
          description: 'Vizuelno jak sajt za tattoo studio, sa fokusom na portfolio radova i jasan booking tok.',
          link: 'https://nikolaskakavac.github.io/InkVibe/',
          screenshotDesktop: 'work/inkvibe-desktop.png',
          screenshotMobile: 'work/inkvibe-mobile.png',
        },
        {
          title: 'Milena Vasic',
          category: 'Healthcare website',
          meta: 'Psychotherapy practice',
          description: 'Smiren i profesionalan sajt koji gradi poverenje i vodi korisnika pravo do prvog kontakta.',
          link: 'https://nikolaskakavac.github.io/psihoterapeut-milena-vasic/',
          screenshotDesktop: 'work/psihoterapeut-desktop.png',
          screenshotMobile: 'work/psihoterapeut-mobile.png',
        },
        {
          title: 'Culinaria',
          category: 'Restaurant website',
          meta: 'Hospitality brand',
          description: 'Restoranski sajt koji ističe atmosferu, ponudu i vodi posetioce brže ka rezervaciji.',
          link: 'https://nikolaskakavac.github.io/culinaria/',
          screenshotDesktop: 'work/culinaria-desktop.png',
          screenshotMobile: 'work/culinaria-mobile.png',
        },
        {
          title: 'Pekarska platforma',
          category: 'Bakery website',
          meta: 'Food business',
          description: 'Web prezentacija za pekarski biznis sa jačom ponudom proizvoda i preglednijom strukturom.',
          link: 'https://nikolaskakavac.github.io/pekarska-platforma/',
          screenshotDesktop: 'work/pekarska-desktop.png',
          screenshotMobile: 'work/pekarska-mobile.png',
        },
        {
          title: 'Frizerski salon',
          category: 'Beauty website',
          meta: 'Salon brand',
          description: 'Sajt za salon sa čistim prikazom usluga, brenda i jasnim putem do rezervacije.',
          link: 'https://nikolaskakavac.github.io/frizerski/',
          screenshotDesktop: 'work/frizerski-desktop.png',
          screenshotMobile: 'work/frizerski-mobile.png',
        },
        {
          title: 'PixelPulse',
          category: 'Agency website',
          meta: 'Digital brand',
          description: 'Agencijski sajt sa modernijim vizuelnim smerom i jačim fokusom na ponudu i credibility.',
          link: 'https://nikolaskakavac.github.io/PixelPulse/',
          screenshotDesktop: 'work/pixelpulse-desktop.png',
          screenshotMobile: 'work/pixelpulse-mobile.png',
        },
        {
          title: 'Jobzee',
          category: 'Platform & SaaS',
          meta: 'Career platform',
          description: 'Platformski interfejs sa fokusom na pregledne tokove, jasnoću i ozbiljniji product utisak.',
          link: 'https://poslovi.vercel.app/',
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
        },
      ],
      items: [
        {
          title: 'InkVibe',
          category: 'Tattoo studio website',
          challenge: 'Kod tattoo studija sajt mora odmah da deluje upecljivo, profesionalno i dovoljno jasno da posetilac pozeli da zakaze termin.',
          solution: 'Vizuelno jaci pravac, jasna prezentacija radova, bolja struktura sekcija i fokus na booking tok.',
          result: 'Sajt koji ostavlja ozbiljniji utisak brenda i mnogo lakse vodi korisnika ka upitu ili rezervaciji.',
          meta: 'Creative service brand',
          link: 'https://nikolaskakavac.github.io/InkVibe/',
          screenshotDesktop: 'work/inkvibe-desktop.png',
          screenshotMobile: 'work/inkvibe-mobile.png',
        },
        {
          title: 'Milena Vasic',
          category: 'Healthcare website',
          challenge: 'Kod ovakvog sajta najvaznije je da korisnik odmah oseti poverenje i jasno razume kome je usluga namenjena.',
          solution: 'Mirniji vizuelni pravac, jasna struktura sekcija i fokus na informacije koje pomazu osobi da se javi bez dileme.',
          result: 'Sajt koji deluje profesionalno, smireno i mnogo lakse vodi do prvog kontakta.',
          meta: 'Psychotherapy practice',
          link: 'https://nikolaskakavac.github.io/psihoterapeut-milena-vasic/',
          screenshotDesktop: 'work/psihoterapeut-desktop.png',
          screenshotMobile: 'work/psihoterapeut-mobile.png',
        },
        {
          title: 'Culinaria',
          category: 'Restaurant website',
          challenge: 'Kod restoranskog sajta najbitnije je da meni, atmosfera i rezervacija budu jasni odmah, bez suvisnih koraka.',
          solution: 'Elegantniji vizuelni identitet, jaci fokus na ponudu i fotografije, plus jednostavniji tok do rezervacije ili kontakta.',
          result: 'Sajt koji deluje premium, bolje predstavlja restoran i korisnika brze vodi do odluke da rezervise.',
          meta: 'Hospitality brand',
          link: 'https://nikolaskakavac.github.io/culinaria/',
          screenshotDesktop: 'work/culinaria-desktop.png',
          screenshotMobile: 'work/culinaria-mobile.png',
        },
      ],
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
      title: 'Built on real client work.',
      body:
        'Od 2018. pravim web sajtove i web aplikacije za firme kojima je potreban ozbiljan i profesionalan online nastup.',
      bodySecondary:
        'Iskustvo pokriva landing stranice, business sajtove, SaaS proizvode i full-stack aplikacije, sa fokusom na jasnocu, performanse i konverziju.',
      stats: [
        { value: '40+', label: 'klijenata' },
        { value: '70+', label: 'projekata isporuceno' },
        { value: 'Since 2018', label: 'rad sa realnim biznisima' },
      ],
      stackLabel: 'Expertise',
      stackGroups: [
        { title: 'Frontend', items: ['React', 'Next.js'] },
        { title: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django'] },
        { title: 'Database', items: ['PostgreSQL', 'MongoDB'] },
        { title: 'Focus', items: ['SEO-ready frontend', 'Conversion-focused UI'] },
      ],
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
      title: 'Get more clients online.',
      subtitle:
        'Built to convert. Designed to grow.',
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
          title: 'Marko Petrovic',
          body: 'Before the redesign, we looked like just another local company. After the new homepage, people come into calls much better prepared because they instantly understand what we do and why they should contact us.',
          meta: 'Director, construction company',
        },
        {
          title: 'Jelena Markovic',
          body: 'What helped most was the way the site was structured around services, pricing, and the next step. We spend less time explaining things in messages and more time handling real bookings.',
          meta: 'Owner, beauty studio',
        },
        {
          title: 'Daniel Foster',
          body: 'We needed a site that looked sharp enough for investors but still simple for customers. The final result gave us a cleaner pitch, better first impressions, and a much more serious online presence.',
          meta: 'Co-founder, SaaS startup',
        }
      ],
      strip: ['Professional presentation', 'Clear structure', 'Fast and maintainable build'],
    },
    work: {
      title: 'Featured case studies',
      subtitle: 'Three projects that best show design quality, structure clarity, and how I approach client-facing websites.',
      primaryCta: 'Open project',
      secondaryCta: 'View all work',
      allTitle: 'All work',
      allSubtitle: 'A full view of the websites and web projects in the portfolio, including desktop and mobile previews.',
      allItems: [
        {
          title: 'InkVibe',
          category: 'Tattoo studio website',
          meta: 'Creative service brand',
          description: 'A bold studio website focused on portfolio presentation and a clearer path to booking.',
          link: 'https://nikolaskakavac.github.io/InkVibe/',
          screenshotDesktop: 'work/inkvibe-desktop.png',
          screenshotMobile: 'work/inkvibe-mobile.png',
        },
        {
          title: 'Milena Vasic',
          category: 'Healthcare website',
          meta: 'Psychotherapy practice',
          description: 'A calm, trust-focused website built to make the first contact feel easier and more natural.',
          link: 'https://nikolaskakavac.github.io/psihoterapeut-milena-vasic/',
          screenshotDesktop: 'work/psihoterapeut-desktop.png',
          screenshotMobile: 'work/psihoterapeut-mobile.png',
        },
        {
          title: 'Culinaria',
          category: 'Restaurant website',
          meta: 'Hospitality brand',
          description: 'A restaurant website designed to highlight atmosphere, menu, and move visitors faster toward reservation.',
          link: 'https://nikolaskakavac.github.io/culinaria/',
          screenshotDesktop: 'work/culinaria-desktop.png',
          screenshotMobile: 'work/culinaria-mobile.png',
        },
        {
          title: 'Bakery platform',
          category: 'Bakery website',
          meta: 'Food business',
          description: 'A bakery presentation site with a clearer product offer and a stronger visual identity.',
          link: 'https://nikolaskakavac.github.io/pekarska-platforma/',
          screenshotDesktop: 'work/pekarska-desktop.png',
          screenshotMobile: 'work/pekarska-mobile.png',
        },
        {
          title: 'Hair salon',
          category: 'Beauty website',
          meta: 'Salon brand',
          description: 'A salon website with a cleaner service structure, stronger brand feel, and easier booking flow.',
          link: 'https://nikolaskakavac.github.io/frizerski/',
          screenshotDesktop: 'work/frizerski-desktop.png',
          screenshotMobile: 'work/frizerski-mobile.png',
        },
        {
          title: 'PixelPulse',
          category: 'Agency website',
          meta: 'Digital brand',
          description: 'An agency-style website with a more modern visual direction and stronger offer presentation.',
          link: 'https://nikolaskakavac.github.io/PixelPulse/',
          screenshotDesktop: 'work/pixelpulse-desktop.png',
          screenshotMobile: 'work/pixelpulse-mobile.png',
        },
        {
          title: 'Jobzee',
          category: 'Platform & SaaS',
          meta: 'Career platform',
          description: 'A product-focused interface built around clarity, cleaner user flows, and a more serious SaaS presence.',
          link: 'https://poslovi.vercel.app/',
          screenshotDesktop: 'work/jobzee-desktop.png',
          screenshotMobile: 'work/jobzee-mobile.png',
        },
      ],
      items: [
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
          title: 'Culinaria',
          category: 'Restaurant website',
          challenge: 'A restaurant website has to make the menu, atmosphere, and reservation path clear within seconds, without unnecessary friction.',
          solution: 'A more refined visual direction, stronger focus on the offer and photography, and a simpler path toward booking or contact.',
          result: 'A website that feels more premium, represents the brand better, and moves visitors faster toward a reservation decision.',
          meta: 'Hospitality brand',
          link: 'https://nikolaskakavac.github.io/culinaria/',
          screenshotDesktop: 'work/culinaria-desktop.png',
          screenshotMobile: 'work/culinaria-mobile.png',
        },
      ],
    },
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
      title: 'Built on real client work.',
      body:
        'Since 2018, I have been building websites and web applications for businesses that need a serious, professional digital presence.',
      bodySecondary:
        'That includes landing pages, business websites, SaaS products, and full-stack apps, always with a focus on clarity, performance, and conversion.',
      stats: [
        { value: '40+', label: 'clients' },
        { value: '70+', label: 'projects delivered' },
        { value: 'Since 2018', label: 'building for real businesses' },
      ],
      stackLabel: 'Expertise',
      stackGroups: [
        { title: 'Frontend', items: ['React', 'Next.js'] },
        { title: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django'] },
        { title: 'Database', items: ['PostgreSQL', 'MongoDB'] },
        { title: 'Focus', items: ['SEO-ready frontend', 'Conversion-focused UI'] },
      ],
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

const fallbackContent = {
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
    title: 'Get more clients online.',
    subtitle: 'Built to convert. Designed to grow.',
  },
  proof: {
    title: 'Client feedback',
    subtitle: 'Selected work and results.',
    strip: [],
    cards: [],
  },
  work: {
    title: 'Featured case studies',
    subtitle: 'Selected projects.',
    primaryCta: 'Open project',
    secondaryCta: 'View all work',
    allTitle: 'All work',
    allSubtitle: 'Portfolio projects.',
    items: [],
    allItems: [],
  },
  services: {
    title: 'Services',
    subtitle: '',
    items: [],
  },
  process: {
    title: 'Process',
    subtitle: '',
    steps: [],
  },
  about: {
    title: 'Built on real client work.',
    body: '',
    bodySecondary: '',
    stats: [],
    stackLabel: 'Expertise',
    stackGroups: [],
  },
  resources: {
    title: 'Resources',
    subtitle: '',
    items: [],
  },
  ctaBanner: {
    title: '',
    body: '',
    primary: 'Book a call',
    secondary: '',
  },
  contact: {
    title: 'Contact',
    body: '',
    emailLabel: 'Email',
    email: '',
    note: '',
    formLabels: { name: 'Name', email: 'Email', type: 'Project type', budget: 'Budget', details: 'Short brief' },
    submit: 'Send inquiry',
    success: '',
    projectTypes: [],
    budgetOptions: [],
  },
  footer: {
    line: '',
    links: [],
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
  const [showAllWork, setShowAllWork] = useState(false)
  const cursorRef = useRef(null)
  const processSectionRef = useRef(null)

  const activeLang = typeof lang === 'string' ? lang.toLowerCase() : 'en'
  const t = content?.[activeLang] ?? content?.en ?? content?.sr ?? fallbackContent
  const nav = t?.nav ?? fallbackContent.nav
  const hero = t?.hero ?? fallbackContent.hero
  const proof = t?.proof ?? fallbackContent.proof
  const work = t?.work ?? fallbackContent.work
  const services = t?.services ?? fallbackContent.services
  const process = t?.process ?? fallbackContent.process
  const about = t?.about ?? fallbackContent.about
  const resources = t?.resources ?? fallbackContent.resources
  const ctaBanner = t?.ctaBanner ?? fallbackContent.ctaBanner
  const contact = t?.contact ?? fallbackContent.contact
  const footer = t?.footer ?? fallbackContent.footer
  const visibleWorkItems = showAllWork ? work.allItems : work.items
  const serviceHighlights = activeLang === 'sr'
    ? ['Conversion-focused UI', 'Mobile-first experience', 'Brz i čist frontend', 'Jasni CTA tokovi']
    : ['Conversion-focused UI', 'Mobile-first experience', 'Fast clean frontend', 'Clear CTA journeys']
  const serviceDetails = activeLang === 'sr'
    ? [
        {
          eyebrow: 'Za prvi utisak koji prodaje',
          points: ['Jasna ponuda iznad prevoja', 'Struktura koja gradi poverenje', 'CTA tok za upite, pozive i rezervacije'],
          outcome: 'Više ozbiljnih upita',
        },
        {
          eyebrow: 'Kada treba više od prezentacije',
          points: ['Dashboard i korisnički nalozi', 'Integracije, API tokovi i payment logika', 'UX fokus za kompleksnije proizvode'],
          outcome: 'Spremno za skaliranje',
        },
        {
          eyebrow: 'Za projekte koji ne smeju da stanu',
          points: ['Kontinuirana poboljšanja i novi feature-i', 'Tehnička podrška bez haosa', 'Brži rollout sledećih iteracija'],
          outcome: 'Dugoročan growth support',
        },
      ]
    : [
        {
          eyebrow: 'For a first impression that sells',
          points: ['Clear offer above the fold', 'Trust-building section structure', 'CTA flow for inquiries, calls, and bookings'],
          outcome: 'More qualified leads',
        },
        {
          eyebrow: 'When you need more than presentation',
          points: ['Dashboards and authenticated user flows', 'Integrations, API logic, and payments', 'UX clarity for more complex products'],
          outcome: 'Ready to scale',
        },
        {
          eyebrow: 'For products that need continuity',
          points: ['Ongoing improvements and new features', 'Technical support without friction', 'Faster rollout of next iterations'],
          outcome: 'Long-term growth support',
        },
      ]
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

    const showCursor = () => {
      cursorElement.classList.add('visible')
    }

    const hideCursor = () => {
      cursorElement.classList.remove('visible')
    }

    const rootElement = document.documentElement
    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('pointermove', moveCursor, { passive: true })
    window.addEventListener('mouseenter', showCursor)
    rootElement.addEventListener('mouseleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('mouseenter', showCursor)
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
            { label: nav.proof, href: '#proof', icon: 'proof' },
            { label: nav.work, href: '#work', icon: 'work' },
            { label: nav.services, href: '#services', icon: 'services' },
            { label: nav.process, href: '#process', icon: 'process' },
            { label: nav.about, href: '#about', icon: 'about' },
            { label: nav.contact, href: '#contact', icon: 'contact' },
          ]}
          ctaLabel={lang === 'sr' ? 'Zakaži poziv' : 'Book a call'}
          onLangChange={(nextLang) => setLang(nextLang.toLowerCase())}
        />

        <main className="main" lang={lang === 'sr' ? 'sr' : 'en'}>
          <section className="hero hero-trust-layout" id="top">
            <div className="hero-copy">
              <h1>{lang === 'sr' ? 'Tvoj sajt treba da ti donosi klijente.' : 'Your website should bring you clients.'}</h1>
              <p className="hero-subtitle">
                {lang === 'sr' ? 'Dizajniram i razvijam brze, profesionalne sajtove koji pretvaraju posetioce u klijente koji placaju.' : 'I design and build fast, professional websites that turn visitors into paying clients.'}
              </p>
              <div className="hero-buttons">
                <PremiumCTAButton href="#contact" className="hero-primary-cta" icon={false}>{lang === 'sr' ? 'Zakazi besplatan poziv' : 'Book a Free Call'}</PremiumCTAButton>
                <a className="btn ghost hero-secondary-cta" href="#work">{lang === 'sr' ? 'Pogledaj case studies' : 'View Case Studies'}</a>
              </div>
              <p className="hero-microcopy">
                {lang === 'sr' ? 'Bez obaveze' : 'No commitment'} &bull; 15 min &bull; {lang === 'sr' ? 'Brzo zakazivanje' : 'Instant booking'}
              </p>
              <div className="hero-micro-proof" aria-label={lang === 'sr' ? 'Ocena klijenata' : 'Client rating'}>
                <span className="hero-micro-proof-star" aria-hidden="true">★</span>
                <span className="hero-micro-proof-rating">{lang === 'sr' ? '4.9/5 zadovoljstvo klijenata' : '4.9/5 client satisfaction'}</span>
              </div>
            </div>
            <aside className="hero-side-proof" aria-label={lang === 'sr' ? 'Hero dokazi' : 'Hero proof'}>
              <div className="hero-side-proof-inner">
                <span className="hero-side-proof-label">{lang === 'sr' ? 'Pravljeno za konkretan rezultat' : 'Built for client results'}</span>
                <p className="hero-side-proof-summary">
                  {lang === 'sr'
                    ? 'Poverenje mi je ukazalo 40+ firmi iz usluga, hospitality, beauty i SaaS sektora.'
                    : 'Trusted by 40+ businesses across services, hospitality, beauty, and SaaS.'}
                </p>
                <div className="hero-trust-strip" aria-label={lang === 'sr' ? 'Statistika poverenja' : 'Trust stats'}>
                  <span className="hero-trust-item hero-trust-item-featured">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineFolderOpen />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>60+</strong>
                      <small>{lang === 'sr' ? 'isporu?enih projekata' : 'projects delivered'}</small>
                    </span>
                  </span>
                  <span className="hero-trust-item">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineSparkles />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>{lang === 'sr' ? 'Web & SaaS' : 'Web & SaaS'}</strong>
                      <small>{lang === 'sr' ? 'sajtovi, SaaS, booking flow i redesign projekti' : 'websites, SaaS, booking flows, and redesigns'}</small>
                    </span>
                  </span>
                  <span className="hero-trust-item">
                    <span className="hero-trust-icon" aria-hidden="true">
                      <HiOutlineClock />
                    </span>
                    <span className="hero-trust-copy">
                      <strong>24h</strong>
                      <small>{lang === 'sr' ? 'odgovor u roku od 24h' : 'reply within 24h'}</small>
                    </span>
                  </span>
                </div>
              </div>
            </aside>
          </section>

          <section className="section proof-section" id="proof">
            <div className="section-header">
              <span className="eyebrow">{lang === 'sr' ? 'Utisci klijenata' : 'Testimonials'}</span>
              <h2>{proof.title}</h2>
              <p>{proof.subtitle}</p>
            </div>
            <div className="proof-strip clean-proof-strip">
              {proof.strip.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="grid testimonial-grid proof-grid">
              {proof.cards.map((item, index) => (
                <TiltCard key={item.title} element="article" className="testimonial reveal proof-card" style={{ '--delay': `${0.06 + index * 0.06}s` }} tiltEnabled={tiltEnabled}>
                  <span className="proof-card-label">{lang === 'sr' ? 'Utisci klijenata' : 'Client feedback'}</span>
                  <blockquote>{item.body}</blockquote>
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </figcaption>
                </TiltCard>
              ))}
            </div>
          </section>

          <section className="section work-section" id="work">
            <div className="section-header work-header-row">
              <div>
                <span className="eyebrow">Case studies</span>
                <h2>{work.title}</h2>
                <p>{showAllWork ? work.allSubtitle : work.subtitle}</p>
              </div>
              <button
                type="button"
                className="text-link text-link-button"
                onClick={() => setShowAllWork((value) => !value)}
              >
                {showAllWork ? (lang === 'sr' ? 'Zatvori radove' : 'Hide all work') : work.secondaryCta}
              </button>
            </div>
            <div className="grid case-study-grid">
              {visibleWorkItems.map((item, index) => (
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
                  {showAllWork ? (
                    <p className="archive-work-description">{item.description}</p>
                  ) : (
                    <div className="case-study-copy">
                      <p><strong>{lang === 'sr' ? 'Problem:' : 'Challenge:'}</strong> {item.challenge}</p>
                      <p><strong>{lang === 'sr' ? 'Re?enje:' : 'Solution:'}</strong> {item.solution}</p>
                      <p><strong>{lang === 'sr' ? 'Ishod:' : 'Result:'}</strong> {item.result}</p>
                    </div>
                  )}
                  {item.link ? (
                    <a className="btn ghost" href={item.link} target="_blank" rel="noopener noreferrer">{work.primaryCta}</a>
                  ) : (
                    <span className="archive-work-note">{lang === 'sr' ? 'Preview dostupan u portfoliju' : 'Preview available in portfolio'}</span>
                  )}
                </TiltCard>
              ))}
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-header">
              <span className="eyebrow">{lang === 'sr' ? 'Ponuda' : 'Offer'}</span>
              <h2>{services.title}</h2>
              <p>{services.subtitle}</p>
            </div>
            <div className="services-trend-strip" aria-label={lang === 'sr' ? 'Glavne prednosti' : 'Key advantages'}>
              {serviceHighlights.map((item) => (
                <span key={item} className="services-trend-pill">{item}</span>
              ))}
            </div>
            <div className="grid service-grid service-premium-grid">
              {services.items.map((item, index) => (
                <TiltCard key={item.title} element="article" className="card service-card service-card-premium reveal" style={{ '--delay': `${0.06 + index * 0.06}s` }} {...featuredTiltProps}>
                  <div className="service-card-head">
                    <span className="service-index">0{index + 1}</span>
                    <span className="service-card-eyebrow">{serviceDetails[index]?.eyebrow}</span>
                  </div>
                  <div className="service-icon-premium" aria-hidden="true">
                    {index === 0 ? <HiOutlineSparkles /> : null}
                    {index === 1 ? <HiOutlineCodeBracketSquare /> : null}
                    {index === 2 ? <HiOutlineRocketLaunch /> : null}
                  </div>
                  <div className="service-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="service-points">
                    {serviceDetails[index]?.points?.map((point) => (
                      <span key={point} className="service-point">{point}</span>
                    ))}
                  </div>
                  <div className="service-card-foot">
                    <span className="service-outcome-chip">{serviceDetails[index]?.outcome}</span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>

          <section className="section" id="process">
            <div className="section-header">
              <span className="eyebrow">{lang === 'sr' ? 'Proces' : 'Roadmap'}</span>
              <h2>{process.title}</h2>
              <p>{process.subtitle}</p>
            </div>
            <div ref={processSectionRef} className="process-roadmap-shell">
              <div className="grid process-grid process-trust-grid">
                {process.steps.map((step, index) => (
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
              <span className="eyebrow">{lang === 'sr' ? 'Slede?i korak' : 'Next step'}</span>
              <h2>{ctaBanner.title}</h2>
              <p>{ctaBanner.body}</p>
              <div className="cta-banner-actions">
                <a className="btn primary" href="#contact">{ctaBanner.primary}</a>
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
                <span>{about.stackLabel}</span>
                <h2>{about.title}</h2>
                <div className="about-copy-flow">
                  <p>{about.body}</p>
                  <p>{about.bodySecondary}</p>
                </div>
                <div className="about-expertise-shell">
                  <div className="about-expertise-header">
                    <span>{lang === 'sr' ? 'Oblasti rada' : 'Areas of expertise'}</span>
                  </div>
                  <div className="about-expertise-grid">
                    {(about.stackGroups ?? []).map((group) => (
                      <div key={group.title} className="about-expertise-group">
                        <strong>{group.title}</strong>
                        <p>{group.items.join(' / ')}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="about-proof-grid" aria-label={lang === 'sr' ? 'Dokazi iskustva' : 'Experience proof points'}>
                  {(about.stats ?? []).map((item) => (
                    <div key={`${item.value}-${item.label}`} className="about-proof-item">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div>
              <span className="eyebrow">{lang === 'sr' ? 'Hajde da pri?amo' : "Let's talk"}</span>
              <h2>{contact.title}</h2>
              <p>{contact.body}</p>
              <div className="contact-meta">
                <span>{contact.emailLabel}</span>
                <strong>{contact.email}</strong>
                <em>{contact.note}</em>
              </div>
            </div>
            <TiltCard element="div" className="contact-card contact-form-card" tiltEnabled={tiltEnabled}>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <label><span>{contact.formLabels.name}</span><input type="text" placeholder={lang === 'sr' ? 'Vaše ime' : 'Your name'} /></label>
                <label><span>{contact.formLabels.email}</span><input type="email" placeholder="name@email.com" /></label>
                <label>
                  <span>{contact.formLabels.type}</span>
                  <select defaultValue="">
                    <option value="" disabled>{lang === 'sr' ? 'Odaberi tip projekta' : 'Select project type'}</option>
                    {contact.projectTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label>
                  <span>{contact.formLabels.budget}</span>
                  <select defaultValue="">
                    <option value="" disabled>{lang === 'sr' ? 'Odaberi okvirni budžet' : 'Select budget range'}</option>
                    {contact.budgetOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="contact-form-full">
                  <span>{contact.formLabels.details}</span>
                  <textarea rows="5" placeholder={lang === 'sr' ? 'Cilj projekta, rok i sve što je bitno.' : 'Goal, timeline, and anything important to know.'}></textarea>
                </label>
                <button className="btn primary" type="submit">{contact.submit}</button>
              </form>
              {formSubmitted && <p className="form-success">{contact.success}</p>}
            </TiltCard>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content footer-trust-content">
            <span>{footer.line}</span>
            <span>&copy; 2026 {t.brand}</span>
            <div className="footer-link-row">
              <a href="#proof">{nav.proof}</a>
              <a href="#work">{nav.work}</a>
              <a href="#services">{nav.services}</a>
              <a href="#process">{nav.process}</a>
              <a href="#about">{nav.about}</a>
              <a href="#contact">{nav.contact}</a>
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



