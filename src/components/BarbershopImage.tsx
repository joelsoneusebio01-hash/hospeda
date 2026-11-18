import {useEffect, useState} from 'react';
import {Scissors} from 'lucide-react';

interface BarbershopImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  priority?: boolean;
}

export function BarbershopImage({
  src,
  alt,
  title,
  className = '',
  priority = false,
}: BarbershopImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#171717] via-[#101010] to-[#0A0A0A] text-[#C9A227] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Scissors className="w-8 h-8 mb-2 opacity-80" strokeWidth={1.5} />
        <span className="font-display text-sm tracking-wider uppercase text-[#F5F3EE]">
          {title || 'Barbearia No Ponto'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="eager"
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
