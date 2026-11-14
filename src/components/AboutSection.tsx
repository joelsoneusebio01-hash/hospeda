import {ArrowUpRight} from 'lucide-react';
import {BARBERSHOP_INFO, getWhatsAppBookingUrl} from '../data/barbershop';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-[#F8F7F4] border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Editorial Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6908] mb-3">
              Sobre a Barbearia No Ponto
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] text-balance">
              Your Style, Our Passion
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#404040] leading-relaxed max-w-2xl">
              <p>
                Na <strong className="text-[#0A0A0A] font-semibold">Barbearia No Ponto</strong>, acreditamos que um bom corte transforma a postura e a confiança de quem o usa. Localizados na Rua do Sussundenga em Chimoio, próximo à paragem do Tambara 2, reunimos técnica apurada, higiene rigorosa e atendimento próximo.
              </p>
              <p>
                Cada sessão acontece num espaço totalmente climatizado, com equipamentos esterilizados, produtos de alta performance e barbeiros atentos ao formato do teu rosto e à textura natural do teu cabelo.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#B8901D] text-[#0A0A0A] font-display font-semibold text-xs sm:text-sm tracking-[0.1em] uppercase px-6 py-3.5 transition-colors whitespace-nowrap"
              >
                <span>Agendar Visita</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={BARBERSHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#8E6908] transition-colors whitespace-nowrap"
              >
                <span>{BARBERSHOP_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Commitment & Stats Panel (no bottom image) */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 divide-y divide-neutral-200">
            <div className="p-6 sm:p-7 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-display text-3xl font-bold text-[#8E6908] tabular-nums">
                  2000+
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#525252] mt-1">
                  Clientes Atendidos
                </p>
              </div>
              <span className="text-xs text-[#525252]">Chimoio & arredores</span>
            </div>

            <div className="p-6 sm:p-7 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-display text-3xl font-bold text-[#8E6908] tabular-nums">
                  100%
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#525252] mt-1">
                  Ambiente Climatizado
                </p>
              </div>
              <span className="text-xs text-[#525252]">Conforto e higiene</span>
            </div>

            <div className="p-6 sm:p-7 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-display text-3xl font-bold text-[#8E6908] tabular-nums">
                  2026
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#525252] mt-1">
                  Seguidores no Instagram
                </p>
              </div>
              <span className="text-xs text-[#525252]">{BARBERSHOP_INFO.instagramHandle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
