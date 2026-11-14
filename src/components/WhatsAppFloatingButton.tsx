import {BARBERSHOP_INFO, getWhatsAppBookingUrl} from '../data/barbershop';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppBookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Agendar pelo WhatsApp: ${BARBERSHOP_INFO.phoneDisplay}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white px-4 py-2.5 min-h-[44px] shadow-xl border border-[#22C55E]/40 transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12.031 2C6.508 2 2.031 6.477 2.031 12c0 1.773.465 3.505 1.349 5.025L2 22l5.099-1.337A9.953 9.953 0 0 0 12.031 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.826 14.129c-.245.689-1.423 1.318-1.958 1.396-.494.073-1.132.104-1.829-.117-.426-.135-.973-.318-1.669-.618-2.936-1.267-4.853-4.242-5-4.438-.147-.196-1.193-1.588-1.193-3.03 0-1.442.755-2.15 1.023-2.444.268-.294.585-.367.78-.367.195 0 .39.002.56.01.18.009.421-.068.659.503.245.588.831 2.027.904 2.174.073.147.122.318.024.514-.098.196-.147.318-.293.49-.147.171-.309.383-.441.514-.147.147-.3.306-.129.6.171.294.761 1.255 1.634 2.033 1.123 1.001 2.069 1.312 2.362 1.459.293.147.464.122.635-.074.171-.196.733-.856.929-1.15.195-.294.391-.245.659-.147.268.098 1.709.806 2.002.953.293.147.488.221.561.343.073.122.073.71-.172 1.399z" />
      </svg>
      <span className="font-mono text-xs sm:text-sm font-semibold tracking-tight tabular-nums">
        {BARBERSHOP_INFO.phoneDisplay}
      </span>
    </a>
  );
}
