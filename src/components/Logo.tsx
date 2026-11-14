interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Emblema oficial BARBEARIA NO PONTO inspirado na arte de referência:
 * moldura escalonada, navalhas clássicas a flanquear "BARBEARIA",
 * tipografia forte "NO PONTO" e postes de barbeiro laterais.
 */
export function Logo({
  variant = 'dark',
  size = 'sm',
  className = '',
}: LogoProps) {
  const ink = variant === 'dark' ? '#0A0A0A' : '#FFFFFF';
  const paper = variant === 'dark' ? '#FFFFFF' : '#0A0A0A';
  const heightClass = size === 'md' ? 'h-12 sm:h-14' : 'h-10 sm:h-11';

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      aria-label="Barbearia No Ponto"
    >
      <svg
        viewBox="0 0 270 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto`}
        role="img"
        aria-label="Logótipo Barbearia No Ponto"
      >
        {/* Moldura escalonada exterior estilo emblema clássico */}
        <path
          d="M6 20 L26 20 L34 11 L48 18 L52 7 L218 7 L222 18 L236 11 L244 20 L264 20 L264 78 L215 73 L55 73 L6 78 Z"
          fill={paper}
          stroke={ink}
          strokeWidth="3.5"
          strokeLinejoin="miter"
        />

        {/* Poste de Barbeiro Esquerdo */}
        <g transform="translate(15, 22)">
          <rect x="2" y="0" width="12" height="3.5" rx="1.5" fill={ink} />
          <circle cx="8" cy="6.5" r="4.5" stroke={ink} strokeWidth="2" fill={paper} />
          <rect x="2.5" y="9.5" width="11" height="27" stroke={ink} strokeWidth="2" fill={paper} />
          <path d="M3 16 L13 11 M3 23 L13 18 M3 30 L13 25 M3 36 L13 31" stroke={ink} strokeWidth="2.4" />
          <circle cx="8" cy="39.5" r="4.5" stroke={ink} strokeWidth="2" fill={paper} />
          <rect x="2" y="42.5" width="12" height="3.5" rx="1.5" fill={ink} />
        </g>

        {/* Poste de Barbeiro Direito */}
        <g transform="translate(239, 22)">
          <rect x="2" y="0" width="12" height="3.5" rx="1.5" fill={ink} />
          <circle cx="8" cy="6.5" r="4.5" stroke={ink} strokeWidth="2" fill={paper} />
          <rect x="2.5" y="9.5" width="11" height="27" stroke={ink} strokeWidth="2" fill={paper} />
          <path d="M3 16 L13 11 M3 23 L13 18 M3 30 L13 25 M3 36 L13 31" stroke={ink} strokeWidth="2.4" />
          <circle cx="8" cy="39.5" r="4.5" stroke={ink} strokeWidth="2" fill={paper} />
          <rect x="2" y="42.5" width="12" height="3.5" rx="1.5" fill={ink} />
        </g>

        {/* Navalha Esquerda */}
        <g transform="translate(39, 15)" fill={ink}>
          <path d="M0 11 L21 7 L22 10 L1 14 Z" />
          <path d="M2 2 L22 7 L20 9.5 L1 5 Z" />
        </g>

        {/* Navalha Direita */}
        <g transform="translate(209, 15)" fill={ink}>
          <path d="M22 11 L1 7 L0 10 L21 14 Z" />
          <path d="M20 2 L0 7 L2 9.5 L21 5 Z" />
        </g>

        {/* Texto superior: BARBEARIA */}
        <text
          x="135"
          y="25"
          textAnchor="middle"
          fill={ink}
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.16em',
          }}
        >
          BARBEARIA
        </text>

        {/* Letreiro principal forte: NO PONTO */}
        <text
          x="135"
          y="61"
          textAnchor="middle"
          fill={ink}
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 700,
            fontSize: '36px',
            letterSpacing: '0.07em',
          }}
        >
          NO PONTO
        </text>
      </svg>
    </span>
  );
}
