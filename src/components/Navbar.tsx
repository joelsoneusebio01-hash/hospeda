import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {BARBERSHOP_INFO, getWhatsAppBookingUrl} from '../data/barbershop';
import {Logo} from './Logo';

const NAV_LINKS = [
  {label: 'Início', href: '#inicio'},
  {label: 'Sobre', href: '#sobre'},
  {label: 'Serviços', href: '#servicos'},
  {label: 'Preços', href: '#precos'},
  {label: 'Galeria', href: '#galeria'},
  {label: 'Contacto', href: '#contacto'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top thin gold announcement bar */}
      <div className="bg-[#C9A227] text-[#0A0A0A] py-1.5 px-4 text-center">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase leading-tight">
          {BARBERSHOP_INFO.announcement}
        </p>
      </div>

      {/* Fixed/Sticky 3-zone white navigation header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark (Black & White Crest) */}
          <a
            href="#inicio"
            aria-label="Barbearia No Ponto — Início"
            className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
          >
            <Logo variant="dark" size="sm" />
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#262626] hover:text-[#0A0A0A] transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#B8901D] text-[#0A0A0A] font-display font-semibold text-xs sm:text-sm tracking-[0.1em] uppercase px-4 sm:px-5 py-2.5 min-h-[40px] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
            >
              AGENDAR AGORA
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#0A0A0A] hover:text-[#8E6908] transition-colors focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {mobileOpen && (
          <nav
            aria-label="Menu móvel"
            className="md:hidden bg-white border-t border-neutral-200 px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#0A0A0A] hover:text-[#8E6908] border-b border-neutral-100 last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
