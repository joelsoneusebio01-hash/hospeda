import heroStorefrontImg from '../assets/optimized/hero-storefront.jpg';
import corteCriancaImg from '../assets/optimized/corte-crianca.jpg';
import cortesAdultosImg from '../assets/optimized/cortes-adultos.jpg';
import corteEstiloImg from '../assets/optimized/corte-estilo.jpg';
import brandToolsImg from '../assets/optimized/brand-tools.jpg';
import barbaterapiaImg from '../assets/optimized/barbaterapia.jpg';
import trancasEstilosImg from '../assets/optimized/trancas-estilos.jpg';

export const BARBERSHOP_INFO = {
  name: 'Barbearia No Ponto',
  shortName: 'NO PONTO',
  slogan: 'Corte, estilo e inovação! Sua aparência no ponto certo!',
  announcement: 'ABERTO AGORA • 10% DE DESCONTO NA TUA PRIMEIRA VISITA',
  instagramHandle: '@noponto.barbearia',
  instagramFollowers: '2026 seguidores',
  instagramUrl: 'https://www.instagram.com/noponto.barbearia/',
  address: 'Rua do Sussundenga, Chimoio, próximo à paragem do Tambara 2',
  city: 'Chimoio, Moçambique',
  hours: 'Seg - Sáb: 08H - 19H',
  phoneDisplay: '+258 87 978 2639',
  whatsappNumber: '258879782639',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+do+Sussundenga+Tambara+2+Chimoio+Mocambique',
};

export function getWhatsAppBookingUrl(serviceName?: string): string {
  const message = serviceName
    ? `Olá No Ponto! Quero agendar ${serviceName}`
    : 'Olá No Ponto! Quero agendar um corte';
  return `https://wa.me/${BARBERSHOP_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  heroStorefront: heroStorefrontImg,
  corteCrianca: corteCriancaImg,
  cortesAdultos: cortesAdultosImg,
  corteEstilo: corteEstiloImg,
  heroBrandTools: brandToolsImg,
  barbaterapia: barbaterapiaImg,
  trancasEstilos: trancasEstilosImg,
};

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
}

export const BENEFITS: BenefitItem[] = [
  {
    number: '01',
    title: 'Barbeiros Experientes',
    description: 'Domínio técnico em degradê, navalha e visagismo masculino.',
  },
  {
    number: '02',
    title: 'Produtos Premium',
    description: 'Séruns, óleos e finalizadores selecionados para cada tipo de fio.',
  },
  {
    number: '03',
    title: 'Agendamento Fácil',
    description: 'Marcação directa pelo WhatsApp sem filas nem demoras.',
  },
  {
    number: '04',
    title: 'Ambiente Climatizado',
    description: 'Espaço moderno, confortável e higienizado no coração de Chimoio.',
  },
];

export interface FeaturedService {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  featuredLarge?: boolean;
  objectPosition?: string;
}

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'corte-estilo',
    title: 'Corte no Teu Estilo',
    price: '200 / 350 MTS',
    subtitle: 'Fade de precisão, contornos definidos na navalha e acabamento personalizado com a equipa No Ponto.',
    image: IMAGES.corteEstilo,
    imageAlt: 'Barbeiro da Barbearia No Ponto a executar corte personalizado no teu estilo',
    featuredLarge: true,
    objectPosition: 'object-top',
  },
  {
    id: 'cortes-adultos',
    title: 'Cortes de Adultos',
    price: '150 MTS',
    subtitle: 'Corte Normal, Picante ou Escovinha com degradê limpo, simetria perfeita e acabamento na navalha.',
    image: IMAGES.cortesAdultos,
    imageAlt: 'Corte de adulto com degradê limpo e contorno perfeito na Barbearia No Ponto',
    featuredLarge: true,
    objectPosition: 'object-center',
  },
  {
    id: 'barbaterapia',
    title: 'Barbaterapia & Massagem',
    price: '300 MTS',
    subtitle: 'Toalha quente, vapor relaxante, esfoliação e alinhamento completo da barba.',
    image: IMAGES.barbaterapia,
    imageAlt: 'Sessão de barbaterapia com toalha quente e navalha',
    objectPosition: 'object-center',
  },
  {
    id: 'corte-crianca',
    title: 'Corte Criança',
    price: '100 / 150 MTS',
    subtitle: 'Atendimento paciente e cuidadoso para os mais novos saírem com estilo.',
    image: IMAGES.corteCrianca,
    imageAlt: 'Criança a cortar o cabelo na Barbearia No Ponto em Chimoio',
    objectPosition: 'object-top',
  },
  {
    id: 'trancas-estilos',
    title: 'Tranças & Estilos',
    price: '100 – 350 MTS',
    subtitle: 'Waves, twist, fitage, enrolamento com esponja e tranças com riscas limpas.',
    image: IMAGES.trancasEstilos,
    imageAlt: 'Tranças masculinas simétricas feitas na Barbearia No Ponto',
    objectPosition: 'object-top',
  },
];

export type PriceCategoryKey =
  | 'cortes'
  | 'barba'
  | 'estilos'
  | 'crianca'
  | 'coloracao';

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export interface PriceCategory {
  key: PriceCategoryKey;
  label: string;
  items: PriceItem[];
}

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    key: 'cortes',
    label: 'Cortes',
    items: [
      {
        name: 'Corte no Teu Estilo',
        price: '200 / 350 MTS',
        note: 'Inclui fade personalizado e acabamento na navalha',
      },
      {
        name: 'Corte Normal | Picante | Escovinha',
        price: '150 MTS',
        note: 'Corte clássico com acabamento limpo',
      },
      {
        name: 'Careca com Máquina',
        price: '150 MTS',
        note: 'Raspagem uniforme e hidratação do couro cabeludo',
      },
      {
        name: 'Careca com Navalha',
        price: '200 MTS',
        note: 'Acabamento rente com espuma e pós-barba calmante',
      },
    ],
  },
  {
    key: 'barba',
    label: 'Barba & Barbaterapia',
    items: [
      {
        name: 'Barbaterapia & Massagem',
        price: '300 MTS',
        note: 'Toalha quente, massagem facial e hidratação da barba',
      },
      {
        name: 'Barba com Navalha',
        price: '100 / 200 MTS',
        note: 'Desenho e contornos precisos na lâmina',
      },
      {
        name: 'Barba com Máquina',
        price: '50 / 100 MTS',
        note: 'Aparar e nivelar com precisão',
      },
      {
        name: 'Alinhamento (Máquina ou Navalha)',
        price: '50 / 100 MTS',
        note: 'Manutenção rápida das linhas e perfil',
      },
    ],
  },
  {
    key: 'estilos',
    label: 'Estilos & Tranças',
    items: [
      {
        name: 'Waves',
        price: '200 MTS',
        note: 'Corte direcionado e escovagem para ondas definidas',
      },
      {
        name: 'Enrolamento com Esponja',
        price: '100 MTS',
        note: 'Texturização natural com pomada modeladora',
      },
      {
        name: 'Tranças / Desfazer Tranças / Lavagem',
        price: '150 / 250 MTS',
        note: 'Cuidado completo para tranças limpas e duradouras',
      },
      {
        name: 'Twist',
        price: '250 / 300 MTS',
        note: 'Definição uniforme com produtos hidratantes',
      },
      {
        name: 'Fitage',
        price: '250 / 350 MTS',
        note: 'Finalização estruturada para cachos e definição máxima',
      },
    ],
  },
  {
    key: 'crianca',
    label: 'Criança',
    items: [
      {
        name: 'Corte Normal',
        price: '100 MTS',
        note: 'Corte prático e confortável para crianças',
      },
      {
        name: 'Corte no Teu Estilo',
        price: '150 MTS',
        note: 'Degradê infantil moderno com acabamento suave',
      },
    ],
  },
  {
    key: 'coloracao',
    label: 'Coloração',
    items: [
      {
        name: 'Super Black no Cabelo',
        price: '150 / 200 MTS',
        note: 'Realce intenso de cor e contornos definidos',
      },
      {
        name: 'Tinta Kair',
        price: '300 / 500 MTS',
        note: 'Aplicação profissional de coloração premium',
      },
    ],
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  spanClass: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Barbearia No Ponto — Fachada Tambara 2',
    category: 'Chimoio',
    image: IMAGES.heroStorefront,
    alt: 'Fachada oficial da Barbearia No Ponto próximo à paragem do Tambara 2 em Chimoio',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Degradê de Precisão',
    category: 'Cortes de Adultos',
    image: IMAGES.cortesAdultos,
    alt: 'Corte masculino com degradê limpo feito na Barbearia No Ponto',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Equipa No Ponto em Ação',
    category: 'Corte no Teu Estilo',
    image: IMAGES.corteEstilo,
    alt: 'Barbeiro uniformizado da Barbearia No Ponto a cortar cabelo',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Atendimento Infantil',
    category: 'Criança',
    image: IMAGES.corteCrianca,
    alt: 'Corte infantil com máquina na Barbearia No Ponto',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Utensílios & Tradição',
    category: 'Qualidade',
    image: IMAGES.heroBrandTools,
    alt: 'Utensílios profissionais da Barbearia No Ponto',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
];
