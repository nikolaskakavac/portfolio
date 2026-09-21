import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

export default function PremiumNavbar({ lang = 'EN', onLangChange, labels, ctaLabel }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const items = [[labels.work, '#work'], [labels.services, '#services'], [labels.process, '#process'], [labels.about, '#about']]
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])
  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])
  const changeLanguage = (next) => { onLangChange?.(next); setOpen(false) }
  const switcher = <div className="language-switch" aria-label="Language"><button type="button" aria-pressed={lang === 'EN'} onClick={() => changeLanguage('EN')}>EN</button><span aria-hidden="true">/</span><button type="button" aria-pressed={lang === 'SR'} onClick={() => changeLanguage('SR')}>SR</button></div>
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}><nav className="shell nav-inner" aria-label="Primary navigation">
    <a className="brand" href="#top" aria-label="SkaleDigitals home" onClick={() => setOpen(false)}><span className="brand-symbol" aria-hidden="true" /><span>Skale<strong>Digitals</strong></span></a>
    <div className={`nav-panel ${open ? 'is-open' : ''}`} id="mobile-navigation"><div className="nav-links">{items.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div><div className="nav-mobile-actions">{switcher}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>{ctaLabel}</a></div></div>
    <div className="nav-actions">{switcher}<a className="nav-cta" href="#contact">{ctaLabel}</a></div>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>{open ? <HiXMark /> : <HiBars3 />}</button>
  </nav></header>
}
