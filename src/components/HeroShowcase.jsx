const fallbackOutcomes = [
  { title: 'Premium first impression', sub: 'for high-trust brands' },
  { title: 'Clear CTA flow', sub: 'designed around inquiry' },
]

export default function HeroShowcase({
  lang = 'en',
  previewSrc,
  previewAlt,
  mobilePreviewSrc,
  outcomes,
  title,
  category,
  projects = [],
  activeIndex = 0,
  onPrevious,
  onNext,
  onSelect,
}) {
  const cards = (outcomes && outcomes.length ? outcomes : fallbackOutcomes).slice(0, 2)

  return (
    <div className="hero-visual-wrap">
      <div className="hero-visual-shell">
        {cards[0] ? (
          <div className="hero-float-card hero-float-left">
            <strong>{cards[0].title}</strong>
            <span>{cards[0].sub}</span>
          </div>
        ) : null}

        {cards[1] ? (
          <div className="hero-float-card hero-float-right">
            <strong>{cards[1].title}</strong>
            <span>{cards[1].sub}</span>
          </div>
        ) : null}

        <article className="hero-mockup-card">
          <div className="hero-mockup-topbar">
            <div className="hero-mockup-nav">
              <button type="button" className="hero-nav-btn" onClick={onPrevious} aria-label={lang === 'sr' ? 'Prethodni projekat' : 'Previous project'}>
                ←
              </button>
              <button type="button" className="hero-nav-btn" onClick={onNext} aria-label={lang === 'sr' ? 'Sledeći projekat' : 'Next project'}>
                →
              </button>
            </div>
            <div className="hero-mockup-meta">
              <strong>{title}</strong>
              <span>{category}</span>
            </div>
          </div>

          <div className="hero-mockup-media">
            <div className="hero-mockup-desktop">
              <img src={previewSrc} alt={previewAlt || (lang === 'sr' ? 'Prikaz projekta' : 'Project preview')} loading="eager" />
            </div>

            {mobilePreviewSrc ? (
              <div className="hero-mockup-mobile">
                <img src={mobilePreviewSrc} alt={`${previewAlt || title} mobile`} loading="eager" />
              </div>
            ) : null}
          </div>

          {projects.length ? (
            <div className="hero-project-strip" aria-label={lang === 'sr' ? 'Hero projekti' : 'Hero projects'}>
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  className={`hero-project-chip ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => onSelect?.(index)}
                >
                  {project.title}
                </button>
              ))}
            </div>
          ) : null}
        </article>
      </div>
    </div>
  )
}
