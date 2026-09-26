import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { SequenceViewer } from './components/SequenceViewer';
import { CoachingPackages } from './components/CoachingPackages';
import { SummitCommunitySection } from './components/SummitCommunitySection';
import { BrandGuideDrawer } from './components/BrandGuideDrawer';
import { ExportModal } from './components/ExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EBDD] text-[#3E2A1E]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenExport={() => setIsExportOpen(true)}
        onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroBanner />
        <SequenceViewer />
        <CoachingPackages />
        <SummitCommunitySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <BrandGuideDrawer
        isOpen={isBrandGuideOpen}
        onClose={() => setIsBrandGuideOpen(false)}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
