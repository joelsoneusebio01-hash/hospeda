import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {
  PRICE_CATEGORIES,
  PriceCategoryKey,
  getWhatsAppBookingUrl,
} from '../data/barbershop';

type FilterState = 'todos' | PriceCategoryKey;

export function PricingSection() {
  const [activeFilter, setActiveFilter] = useState<FilterState>('todos');

  const visibleCategories =
    activeFilter === 'todos'
      ? PRICE_CATEGORIES
      : PRICE_CATEGORIES.filter((cat) => cat.key === activeFilter);

  return (
    <section
      id="precos"
      className="py-16 sm:py-24 bg-[#F8F7F4] border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6908] mb-2">
              Tabela Oficial · Preços em Meticais (MTS)
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] text-balance">
              Lista de Preços Completa
            </h2>
          </div>

          {/* Interactive category filter controls */}
          <div
            role="tablist"
            aria-label="Filtrar serviços por categoria"
            className="flex flex-wrap items-center gap-1.5 bg-white border border-neutral-200 p-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'todos'}
              onClick={() => setActiveFilter('todos')}
              className={`px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-[#0A0A0A] text-white font-semibold'
                  : 'text-[#525252] hover:text-[#0A0A0A]'
              }`}
            >
              Todos
            </button>
            {PRICE_CATEGORIES.map((category) => (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === category.key
                    ? 'bg-[#0A0A0A] text-white font-semibold'
                    : 'text-[#525252] hover:text-[#0A0A0A]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleCategories.map((category) => (
            <div
              key={category.key}
              className={`bg-white border border-neutral-200 p-6 sm:p-8 ${
                visibleCategories.length === 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b-2 border-[#C9A227] pb-4 mb-2">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[#0A0A0A]">
                  {category.label}
                </h3>
                <span className="font-mono text-xs text-[#525252] tabular-nums uppercase">
                  {category.items.length} opções
                </span>
              </div>

              <ul className="divide-y divide-neutral-200">
                {category.items.map((item) => (
                  <li
                    key={`${category.key}-${item.name}`}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-[#0A0A0A]">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-xs sm:text-sm text-[#525252] mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <span className="font-mono text-sm sm:text-base font-semibold text-[#8E6908] tabular-nums whitespace-nowrap">
                        {item.price}
                      </span>
                      <a
                        href={getWhatsAppBookingUrl(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[#0A0A0A] hover:border-[#C9A227] hover:bg-[#C9A227] text-[#0A0A0A] px-3 py-2 text-xs font-display font-semibold tracking-wider uppercase transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                      >
                        <span>Agendar este corte</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
