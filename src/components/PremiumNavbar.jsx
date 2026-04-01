import { useEffect, useRef, useState } from 'react'
import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineEnvelope,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineBolt,
  HiChevronDown,
} from 'react-icons/hi2'
import PremiumCTAButton from './PremiumCTAButton'

const defaultNavItems = [
  { label: 'Services', href: '#services', icon: 'services' },
  { label: 'Work', href: '#work', icon: 'work' },
  { label: 'Process', href: '#process', icon: 'process' },
  { label: 'About', href: '#about', icon: 'about' },
]

const navIcons = {
  proof: HiOutlineChartBar,
  work: HiOutlineBriefcase,
  services: HiOutlineSquares2X2,
  process: HiOutlineBolt,
  about: HiOutlineUser,
  resources: HiOutlineDocumentText,
  contact: HiOutlineEnvelope,
}

function SerbiaFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[3px]" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      <rect width="24" height="5.333" y="0" fill="#C6363C" />
      <rect width="24" height="5.333" y="5.333" fill="#0C4076" />
      <rect width="24" height="5.334" y="10.666" fill="#FFFFFF" />
    </svg>
  )
}

function UkFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[3px]" aria-hidden="true">
      <rect width="24" height="16" fill="#1F4AA8" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#D8242F" strokeWidth="1.4" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#D8242F" strokeWidth="2.6" />
    </svg>
  )
}

const languageFlags = {
  SR: SerbiaFlag,
  EN: UkFlag,
}

const languageLabels = {
  SR: 'Srpski',
  EN: 'English',
}

const BRAND_VARIANT = 'typography'

function splitBrandName(brand) {
  if (brand === 'SkaleDigitals') {
    return { primary: 'Skale', secondary: 'Digitals' }
  }

  return { primary: brand, secondary: '' }
}

function BrandTypography({ brand, mobile = false }) {
  const { primary, secondary } = splitBrandName(brand)

  return (
    <span className={`inline-flex items-center ${mobile ? 'gap-2.5' : 'gap-3'}`}>
      <span className="flex h-8 items-center" aria-hidden="true">
        <span className="h-6 w-px bg-white/16"></span>
        <span className="ml-1 h-6 w-[3px] rounded-full bg-[#6167F1]"></span>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`${mobile ? 'text-[1rem]' : 'text-[1.02rem]'} font-semibold tracking-[-0.04em] text-white/96`}>
          {primary}
          {secondary ? <span className="ml-[0.14em] font-semibold text-[#6167F1]">{secondary}</span> : null}
        </span>
        {!mobile ? <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-white/32">Digital growth</span> : null}
      </span>
    </span>
  )
}

function BrandMonogram({ brand, mobile = false }) {
  const { primary, secondary } = splitBrandName(brand)

  return (
    <span className={`inline-flex items-center ${mobile ? 'gap-2.5' : 'gap-3.5'}`}>
      <span className="inline-flex items-baseline gap-0.5" aria-hidden="true">
        <span className={`${mobile ? 'text-[0.95rem]' : 'text-[1rem]'} font-semibold tracking-[-0.08em] text-white/92`}>S</span>
        <span className={`${mobile ? 'text-[0.95rem]' : 'text-[1rem]'} font-semibold tracking-[-0.08em] text-[#6167F1]`}>K</span>
      </span>
      <span className="h-5 w-px bg-white/12"></span>
      <span className="min-w-0 text-[0.98rem] font-semibold tracking-[-0.04em] text-white/95">
        {primary}
        {secondary ? <span className="ml-[0.14em] font-semibold text-[#6167F1]">{secondary}</span> : null}
      </span>
    </span>
  )
}

function BrandSignal({ brand, mobile = false }) {
  const { primary, secondary } = splitBrandName(brand)

  return (
    <span className={`inline-flex items-center ${mobile ? 'gap-2.5' : 'gap-3'}`}>
      <span className="inline-flex flex-col gap-[5px]" aria-hidden="true">
        <span className="h-px w-6 bg-white/20"></span>
        <span className="h-px w-4 bg-[#6167F1]"></span>
        <span className="h-px w-6 bg-white/12"></span>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`${mobile ? 'text-[1rem]' : 'text-[1.02rem]'} font-semibold tracking-[-0.045em] text-white/96`}>
          {primary}
          {secondary ? <span className="ml-[0.14em] font-semibold text-[#6167F1]">{secondary}</span> : null}
        </span>
        {!mobile ? <span className="mt-1 text-[0.62rem] uppercase tracking-[0.26em] text-white/30">Digital build partner</span> : null}
      </span>
    </span>
  )
}

function BrandLockup({ brand, mobile = false, variant = BRAND_VARIANT }) {
  if (variant === 'monogram') return <BrandMonogram brand={brand} mobile={mobile} />
  if (variant === 'signal') return <BrandSignal brand={brand} mobile={mobile} />
  return <BrandTypography brand={brand} mobile={mobile} />
}

function LanguageDropdown({ lang, langOpen, setLangOpen, handleLangClick, mobile = false }) {
  const ActiveFlag = languageFlags[lang]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setLangOpen((value) => !value)}
        className={[
          'group inline-flex items-center gap-2.5 overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] text-white transition-all duration-250',
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_24px_rgba(2,8,23,0.18)] backdrop-blur-xl',
          'hover:border-[#6167F1]/35 hover:bg-[linear-gradient(180deg,rgba(97,103,241,0.12),rgba(255,255,255,0.05))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(2,8,23,0.24)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6167F1]/45',
          mobile ? 'h-10 rounded-xl px-3 text-xs' : 'h-11 rounded-[14px] px-3.5 text-sm',
        ].join(' ')}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] transition-colors duration-250 group-hover:border-[#6167F1]/30 group-hover:bg-[#6167F1]/10">
          {ActiveFlag ? <ActiveFlag /> : <span>{lang}</span>}
        </span>
        {!mobile ? (
          <span className="flex flex-col items-start leading-none">
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/38">Language</span>
            <span className="mt-[0.18rem] font-medium text-white/88">{languageLabels[lang]}</span>
          </span>
        ) : (
          <span className="font-medium text-white/82">{languageLabels[lang]}</span>
        )}
        <HiChevronDown
          className={`text-[15px] text-white/56 transition-all duration-250 group-hover:text-[#6167F1] ${langOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {langOpen ? (
        <div
          className={[
            'absolute z-20 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,28,0.98),rgba(7,10,20,0.98))] p-1.5 shadow-[0_24px_60px_rgba(2,8,23,0.42)] backdrop-blur-2xl',
            mobile ? 'left-0 top-[calc(100%+8px)] min-w-[180px]' : 'right-0 top-[calc(100%+10px)] min-w-[220px]',
          ].join(' ')}
        >
          {['SR', 'EN'].map((option) => {
            const Flag = languageFlags[option]
            const active = lang === option

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleLangClick(option)}
                className={[
                  'group flex w-full items-center gap-3 rounded-[14px] px-3 py-2.5 text-left transition-all duration-200',
                  active
                    ? 'border border-[#6167F1]/25 bg-[#6167F1]/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                    : 'border border-transparent text-white/74 hover:border-white/8 hover:bg-white/[0.045] hover:text-white',
                ].join(' ')}
              >
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border transition-all duration-200 ${active ? 'border-[#6167F1]/30 bg-[#6167F1]/12' : 'border-white/8 bg-white/[0.03] group-hover:border-[#6167F1]/24 group-hover:bg-[#6167F1]/10'}`}>
                  {Flag ? <Flag /> : <span>{option}</span>}
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className={`text-sm font-medium ${active ? 'text-white' : 'text-white/84'}`}>{languageLabels[option]}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-white/34">{option}</span>
                </span>
                <span className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${active ? 'bg-[#6167F1] shadow-[0_0_0_4px_rgba(97,103,241,0.14)]' : 'bg-white/10 group-hover:bg-[#6167F1]/50'}`} />
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default function PremiumNavbar({
  brand = 'SkaleDigitals',
  logoSrc,
  lang = 'EN',
  onLangChange,
  navItems = defaultNavItems,
  ctaLabel = 'Book a Call',
  onBookCall,
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langMenuRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
      setLangOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      setLangOpen(false)
    }
  }, [mobileOpen])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const handleLangClick = (nextLang) => {
    setMobileOpen(false)
    setLangOpen(false)
    if (onLangChange) onLangChange(nextLang)
  }

  const handleCtaClick = (event) => {
    setMobileOpen(false)
    if (onBookCall) onBookCall(event)
  }

  return (
    <header className="sticky top-0 z-[1200] w-full px-0">
      <div className="w-full">
        <nav
          aria-label="Primary"
          className="h-20 w-full border-b border-white/10 bg-slate-950/90 px-4 shadow-[0_20px_45px_rgba(2,8,23,0.28)]"
        >
          <div className="mx-auto flex h-full w-full max-w-[1400px] items-center gap-5 px-3">
            <a href="#top" className="min-w-0 shrink-0 text-white md:inline-flex hidden">
              <BrandLockup brand={brand} />
            </a>

            <a href="#top" className="inline-flex text-white md:hidden">
              <BrandLockup brand={brand} mobile />
            </a>

            <ul className="mx-auto hidden flex-1 items-stretch justify-center gap-3 md:flex">
              {navItems.map((item) => {
                const Icon = navIcons[item.icon]
                const isCaseStudies = /case studies/i.test(item.label)

                return (
                  <li key={item.label} className={`flex-1 ${isCaseStudies ? 'max-w-[132px]' : 'max-w-[112px]'}`}>
                    <a
                      href={item.href}
                      className="group relative flex h-full w-full flex-col items-center justify-center rounded-xl px-2 py-2 text-center text-[13px] font-medium text-white transition-colors duration-200 hover:bg-white/[0.03] hover:text-[#6167F1]"
                    >
                      {Icon ? (
                        <Icon
                          className="pointer-events-none absolute top-[6px] text-[17px] text-[#6167F1] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(97,103,241,0.6)]"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span className="translate-y-0 transition-all duration-200 group-hover:translate-y-[13px]">{item.label}</span>
                      <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-[#6167F1] shadow-[0_0_10px_rgba(97,103,241,0.45)] transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="ml-auto hidden items-center gap-4 md:flex">
              <div ref={langMenuRef}>
                <LanguageDropdown
                  lang={lang}
                  langOpen={langOpen}
                  setLangOpen={setLangOpen}
                  handleLangClick={handleLangClick}
                />
              </div>
              <PremiumCTAButton href="#contact" onClick={handleCtaClick}>
                Book a Free Call
              </PremiumCTAButton>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => {
                setLangOpen(false)
                setMobileOpen((v) => !v)
              }}
              className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-white/80 transition hover:bg-white/10 md:hidden"
            >
              <span className="text-lg leading-none">{mobileOpen ? '×' : '≡'}</span>
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobile-nav-overlay md:hidden">
            <div className="mobile-nav-panel">
              <ul className="mobile-nav-list">
                {navItems.map((item, index) => {
                  const Icon = navIcons[item.icon]

                  return (
                    <li key={item.label} className="w-full">
                      <a
                        href={item.href}
                        onClick={() => {
                          setLangOpen(false)
                          setMobileOpen(false)
                        }}
                        className="mobile-nav-link group"
                        style={{ '--mobile-link-delay': `${0.05 + index * 0.05}s` }}
                      >
                        {Icon ? <Icon className="mobile-nav-link-icon" aria-hidden="true" /> : null}
                        <span>{item.label}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>

              <div className="mobile-nav-footer">
                <div ref={langMenuRef}>
                  <LanguageDropdown
                    lang={lang}
                    langOpen={langOpen}
                    setLangOpen={setLangOpen}
                    handleLangClick={handleLangClick}
                    mobile
                  />
                </div>

                <PremiumCTAButton href="#contact" onClick={handleCtaClick} className="h-10 px-4 text-sm">
                  Book a Free Call
                </PremiumCTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
