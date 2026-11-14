import {AboutSection} from './components/AboutSection';
import {BenefitsStrip} from './components/BenefitsStrip';
import {ContactFooter} from './components/ContactFooter';
import {GallerySection} from './components/GallerySection';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {PricingSection} from './components/PricingSection';
import {ServicesSection} from './components/ServicesSection';
import {WhatsAppFloatingButton} from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BenefitsStrip />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <AboutSection />
      </main>
      <ContactFooter />
      <WhatsAppFloatingButton />
    </div>
  );
}
