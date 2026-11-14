import {BENEFITS} from '../data/barbershop';

export function BenefitsStrip() {
  return (
    <section
      aria-label="Diferenciais da Barbearia No Ponto"
      className="bg-[#F8F7F4] border-y border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {BENEFITS.map((item) => (
            <div key={item.number} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <span className="font-mono text-xs font-semibold text-[#8E6908] tracking-widest tabular-nums block mb-1.5">
                {item.number}
              </span>
              <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-[#0A0A0A]">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm text-[#525252] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
