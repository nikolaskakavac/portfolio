import { HiPhone } from 'react-icons/hi2'

export default function PremiumCTAButton({
  href = '#contact',
  onClick,
  children = 'Book a Free Call',
  className = '',
  icon = true,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        'btn primary navbar-cta-btn group relative h-12 overflow-hidden rounded-xl px-5 !text-white text-[15px] font-semibold tracking-[-0.02em]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6167F1]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        className,
      ].join(' ')}
    >
      <span className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-white/10" />
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {icon ? <HiPhone className="text-[16px] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" /> : null}
      </span>
    </a>
  )
}
