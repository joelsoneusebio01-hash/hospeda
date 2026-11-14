import {Clock, Instagram, MapPin, MessageCircle, Navigation} from 'lucide-react';
import {BARBERSHOP_INFO, getWhatsAppBookingUrl} from '../data/barbershop';
import {Logo} from './Logo';

export function ContactFooter() {
  return (
    <footer
      id="contacto"
      className="bg-white border-t border-neutral-200 pt-16 sm:pt-20 pb-24 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-14 border-b border-neutral-200">
          {/* Heading & Action Buttons */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6908] mb-2">
              Visite-nos em Chimoio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#0A0A0A]">
              Contacto & Localização
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#525252] leading-relaxed max-w-md">
              {BARBERSHOP_INFO.slogan}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BARBERSHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#B8901D] text-[#0A0A0A] font-display font-semibold text-xs sm:text-sm tracking-[0.1em] uppercase px-6 py-3.5 transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>ABRIR NO MAPS</span>
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white font-display font-semibold text-xs sm:text-sm tracking-[0.1em] uppercase px-6 py-3.5 transition-colors whitespace-nowrap"
              >
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Structured Contact Info Grid */}
          <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F8F7F4] border border-neutral-200 p-6 sm:p-8">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#8E6908] shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#525252]">
                  Endereço Completo
                </dt>
                <dd className="text-sm sm:text-base text-[#0A0A0A] mt-1 font-medium">
                  {BARBERSHOP_INFO.address}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#8E6908] shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#525252]">
                  Horário de Funcionamento
                </dt>
                <dd className="text-sm sm:text-base text-[#0A0A0A] mt-1 font-mono font-medium tabular-nums">
                  {BARBERSHOP_INFO.hours}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <MessageCircle className="w-5 h-5 text-[#8E6908] shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#525252]">
                  WhatsApp & Marcações
                </dt>
                <dd className="mt-1">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-[#0A0A0A] hover:text-[#8E6908] transition-colors font-mono font-medium tabular-nums"
                  >
                    {BARBERSHOP_INFO.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Instagram className="w-5 h-5 text-[#8E6908] shrink-0 mt-0.5" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#525252]">
                  Instagram
                </dt>
                <dd className="mt-1">
                  <a
                    href={BARBERSHOP_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-[#0A0A0A] hover:text-[#8E6908] transition-colors font-medium"
                  >
                    {BARBERSHOP_INFO.instagramHandle} · {BARBERSHOP_INFO.instagramFollowers}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Bottom Copyright & Black/White Crest Logo Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#inicio" aria-label="Barbearia No Ponto — Topo">
            <Logo variant="dark" size="md" />
          </a>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#525252]"
          >
            <a href="#inicio" className="hover:text-[#0A0A0A] transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-[#0A0A0A] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-[#0A0A0A] transition-colors">
              Serviços
            </a>
            <a href="#precos" className="hover:text-[#0A0A0A] transition-colors">
              Preços
            </a>
            <a href="#galeria" className="hover:text-[#0A0A0A] transition-colors">
              Galeria
            </a>
          </nav>

          <p className="text-xs text-[#525252]">
            © 2026 Barbearia No Ponto.
          </p>
        </div>
      </div>
    </footer>
  );
}
