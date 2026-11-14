import {useEffect, useState} from 'react';
import {ArrowUpRight, X} from 'lucide-react';
import {
  BARBERSHOP_INFO,
  GALLERY_PHOTOS,
  GalleryPhoto,
  getWhatsAppBookingUrl,
} from '../data/barbershop';
import {BarbershopImage} from './BarbershopImage';

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPhoto]);

  return (
    <section
      id="galeria"
      className="py-16 sm:py-24 bg-white border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6908] mb-2">
              Portfólio & Ambiente
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] text-balance">
              Galeria No Ponto
            </h2>
          </div>

          <a
            href={BARBERSHOP_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#8E6908] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Seguir {BARBERSHOP_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] sm:auto-rows-[260px] gap-4">
          {GALLERY_PHOTOS.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`Ampliar foto: ${photo.title}`}
              className={`group relative overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-[#0A0A0A] text-left transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0A0A0A] ${photo.spanClass}`}
            >
              <BarbershopImage
                src={photo.image}
                alt={photo.alt}
                title={photo.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#C9A227] block">
                  {photo.category}
                </span>
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-white mt-0.5">
                  {photo.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-w-3xl w-full bg-white border border-neutral-200 overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar pré-visualização"
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 text-[#0A0A0A] hover:bg-[#C9A227] flex items-center justify-center border border-neutral-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-[#0A0A0A]">
              <BarbershopImage
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                title={selectedPhoto.title}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-200 bg-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8E6908]">
                  {selectedPhoto.category}
                </p>
                <h3 className="font-display text-xl font-bold uppercase text-[#0A0A0A] mt-0.5">
                  {selectedPhoto.title}
                </h3>
              </div>

              <a
                href={getWhatsAppBookingUrl(selectedPhoto.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#B8901D] text-[#0A0A0A] font-display font-semibold text-xs tracking-[0.1em] uppercase px-5 py-3 whitespace-nowrap shrink-0"
              >
                <span>Agendar este estilo</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
