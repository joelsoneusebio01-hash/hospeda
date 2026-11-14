import {motion} from 'motion/react';
import {ArrowDownRight, ArrowUpRight, MapPin} from 'lucide-react';
import {BARBERSHOP_INFO, IMAGES, getWhatsAppBookingUrl} from '../data/barbershop';
import {BarbershopImage} from './BarbershopImage';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline + Location + CTAs + Unboxed Proof */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#8E6908] mb-4">
              <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Rua do Sussundenga, Chimoio · Próximo à paragem do Tambara 2</span>
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-bold uppercase tracking-tight leading-[1.03] text-[#0A0A0A] text-balance max-w-xl">
              Sua aparência no ponto certo!
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-[#404040] font-normal leading-relaxed max-w-xl">
              Mais que um corte, uma experiência premium.{' '}
              <span className="text-[#0A0A0A] font-semibold">
                Corte, estilo e inovação!
              </span>{' '}
              Esperamos por ti na Rua do Sussundenga,{' '}
              <strong className="text-[#0A0A0A] font-semibold">
                próximo à paragem do Tambara 2
              </strong>
              , em ambiente climatizado.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C9A227] hover:bg-[#B8901D] text-[#0A0A0A] font-display font-semibold text-sm sm:text-base tracking-[0.1em] uppercase px-7 py-4 min-h-[48px] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <span>AGENDAR PELO WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#precos"
                className="inline-flex items-center justify-center gap-2.5 border border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white font-display font-semibold text-sm sm:text-base tracking-[0.1em] uppercase px-7 py-4 min-h-[48px] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <span>VER PREÇOS</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Clean Unboxed Social Proof */}
            <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#525252]">
              <span className="font-semibold text-[#0A0A0A] tabular-nums">
                2000+ Clientes Satisfeitos
              </span>
              <span aria-hidden="true" className="text-[#8E6908] font-bold">
                |
              </span>
              <span className="font-semibold text-[#0A0A0A] tabular-nums">
                5.0 no Instagram
              </span>
              <span aria-hidden="true" className="text-[#8E6908] font-bold">
                ·
              </span>
              <a
                href={BARBERSHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E6908] transition-colors font-medium"
              >
                {BARBERSHOP_INFO.instagramHandle} ({BARBERSHOP_INFO.instagramFollowers})
              </a>
            </div>
          </motion.div>

          {/* Right Column: Real Storefront Hero Photo */}
          <motion.div
            initial={{opacity: 0, scale: 0.98}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <div className="border border-neutral-900 bg-[#0A0A0A] overflow-hidden shadow-lg">
              <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] max-h-[560px] w-full overflow-hidden bg-[#0A0A0A]">
                <BarbershopImage
                  src={IMAGES.heroStorefront}
                  alt="Fachada da Barbearia No Ponto em Chimoio, próximo à paragem do Tambara 2"
                  title="Barbearia No Ponto — Tambara 2"
                  priority
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-5 py-4 bg-[#0A0A0A] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#C9A227]">
                    Próximo à paragem do Tambara 2
                  </p>
                  <p className="font-display text-base sm:text-lg font-semibold uppercase tracking-wide text-white mt-0.5">
                    Rua do Sussundenga · Chimoio
                  </p>
                </div>
                <span className="font-mono text-xs text-neutral-300 tabular-nums whitespace-nowrap">
                  Seg - Sáb: 08H - 19H
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
