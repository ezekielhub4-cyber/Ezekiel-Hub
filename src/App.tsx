import { useState } from 'react';
import { weddingConfig } from './config/weddingConfig';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { UnionOfGraceSection } from './components/UnionOfGraceSection';
import { OurStorySection } from './components/OurStorySection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { ColoursOfDaySection } from './components/ColoursOfDaySection';
import { GiftsSection } from './components/GiftsSection';
import { RsvpSection } from './components/RsvpSection';
import { Footer } from './components/Footer';
import { InvitationModal, LightboxModal } from './components/Modals';

export default function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = weddingConfig.gallery;

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + photos.length) % photos.length;
    });
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % photos.length;
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F6EA] text-[#173B2B]">
      <Navbar />

      <main>
        <HeroSection onOpenInvitation={() => setInvitationOpen(true)} />
        <UnionOfGraceSection />
        <OurStorySection />
        <EventsSection />
        <GallerySection
          onSelectPhoto={(index) => setLightboxIndex(index)}
          onOpenInvitation={() => setInvitationOpen(true)}
        />
        <ColoursOfDaySection />
        <GiftsSection />
        <RsvpSection />
      </main>

      <Footer />

      <InvitationModal
        isOpen={invitationOpen}
        onClose={() => setInvitationOpen(false)}
      />

      <LightboxModal
        photos={photos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
}
