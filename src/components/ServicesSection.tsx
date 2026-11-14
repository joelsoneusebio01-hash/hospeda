import {ArrowUpRight} from 'lucide-react';
import {FEATURED_SERVICES, getWhatsAppBookingUrl} from '../data/barbershop';
import {BarbershopImage} from './BarbershopImage';

export function ServicesSection() {
  const primaryCards = FEATURED_SERVICES.filter((s) => s.featuredLarge);
  const secondaryCards = FEATURED_SERVICES.filter((s) => !s.featuredLarge);

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6908] mb-2">
              Especialidades da Casa
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] text-balance">
              Serviços No Ponto
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#525252] max-w-md leading-relaxed">
            Do corte no teu estilo aos cortes de adultos, crianças, tranças e barbaterapia. Escolhe o teu serviço e agenda em segundos.
          </p>
        </div>

        {/* Row 1: Two Marquee Service Cards (Corte no Teu Estilo & Cortes de Adultos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {primaryCards.map((service) => (
            <article
              key={service.id}
              className="group bg-white border border-neutral-200 hover:border-[#0A0A0A] transition-colors duration-200 flex flex-col sm:flex-row overflow-hidden"
            >
              <div className="sm:w-1/2 aspect-[4/5] sm:aspect-auto sm:min-h-[340px] overflow-hidden bg-neutral-100 relative shrink-0">
                <BarbershopImage
                  src={service.image}
                  alt={service.imageAlt}
                  title={service.title}
                  className={`w-full h-full object-cover ${service.objectPosition || 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-[#0A0A0A]">
                    {service.title}
                  </h3>
                  <p className="font-mono text-base font-semibold text-[#8E6908] mt-1.5 tabular-nums">
                    {service.price}
                  </p>
                  <p className="mt-3 text-sm text-[#525252] leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                <a
                  href={getWhatsAppBookingUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-between w-full border border-[#0A0A0A] bg-white hover:bg-[#C9A227] hover:border-[#C9A227] text-[#0A0A0A] px-4 py-3 text-xs font-display font-semibold tracking-[0.1em] uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>Agendar este corte</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2: Three Cards (Barbaterapia, Corte Criança, Tranças & Estilos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryCards.map((service) => (
            <article
              key={service.id}
              className="group bg-white border border-neutral-200 hover:border-[#0A0A0A] transition-colors duration-200 flex flex-col"
            >
              <div className="aspect-[4/4] sm:aspect-[4/3] overflow-hidden bg-neutral-100 relative">
                <BarbershopImage
                  src={service.image}
                  alt={service.imageAlt}
                  title={service.title}
                  className={`w-full h-full object-cover ${service.objectPosition || 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-[#0A0A0A]">
                    {service.title}
                  </h3>
                  <p className="font-mono text-sm font-semibold text-[#8E6908] mt-1 tabular-nums">
                    {service.price}
                  </p>
                  <p className="mt-3 text-sm text-[#525252] leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                <a
                  href={getWhatsAppBookingUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-between w-full border border-[#0A0A0A] bg-white hover:bg-[#C9A227] hover:border-[#C9A227] text-[#0A0A0A] px-4 py-3 text-xs font-display font-semibold tracking-[0.1em] uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>Agendar este corte</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
