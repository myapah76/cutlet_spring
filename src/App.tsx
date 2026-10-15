/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useUIStore } from '@/stores';
import { Header, Footer } from '@/components/layout';
import { HomeScreen } from '@/features/home';
import { MenuScreen } from '@/features/menu';

export default function App() {
  const {
    currentView,
    language,
    setCurrentView,
    setLanguage,
  } = useUIStore();

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-body-md flex flex-col selection:bg-[#af101a] selection:text-white">
      {/* Sticky Editorial Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content View Container */}
      <main className="w-full pt-14 sm:pt-20 flex-1">
        {currentView === 'home' && (
          <HomeScreen
            setCurrentView={setCurrentView}
            language={language}
          />
        )}

        {currentView === 'menu' && (
          <MenuScreen
            language={language}
          />
        )}

        {currentView === 'about-us' && (
          <HomeScreen
            setCurrentView={setCurrentView}
            language={language}
          />
        )}
      </main>

      {/* Shared Editorial Footer */}
      <Footer
        setCurrentView={setCurrentView}
      />
    </div>
  );
}
