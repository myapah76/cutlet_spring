import React from 'react';
import { Language, PageView, MenuItem } from '@/types';
import {
  HeroSection,
  PhilosophySection,
  FeedbackSection,
  LocationMapSection,
} from '@/features/home/components';

interface HomeScreenProps {
  setCurrentView: (view: PageView) => void;
  language: Language;
  onSelectItem?: (item: MenuItem) => void;
  onOpenReservation?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setCurrentView,
  language,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Hero Section */}
      <HeroSection
        setCurrentView={setCurrentView}
        language={language}
      />

      {/* 02. Philosophy Section (4 Foundations) */}
      <PhilosophySection language={language} />

      {/* 03. Voice of Guests / Verified Feedback */}
      <FeedbackSection />

      {/* 04. Atelier Location & Interactive Google Map */}
      <LocationMapSection />
    </div>
  );
};
