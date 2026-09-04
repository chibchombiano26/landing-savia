import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookieConsentModal } from './components/CookieConsentModal';

type Page = 'landing' | 'privacidad';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (
        hash.includes('privacidad') ||
        hash.includes('privacy') ||
        path.includes('privacidad')
      ) {
        return 'privacidad';
      }
    }
    return 'landing';
  });

  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  // Sync with browser history and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('privacidad') || hash.includes('privacy')) {
        setCurrentPage('privacidad');
      } else if (hash === '' || hash === '#' || hash.includes('inicio') || hash.includes('landing')) {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPrivacy = () => {
    setCurrentPage('privacidad');
    window.location.hash = 'aviso-de-privacidad';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050807] text-[#E5E7EB] font-sans selection:bg-[#10B981] selection:text-black">
      {/* 1. Page Switcher */}
      {currentPage === 'landing' ? (
        <LandingPage
          onNavigateToPrivacy={navigateToPrivacy}
          onOpenCookieModal={() => setCookieModalOpen(true)}
        />
      ) : (
        <PrivacyPolicyPage onNavigateToLanding={navigateToLanding} />
      )}

      {/* 2. Global Cookie Consent Modal with Revisit Button */}
      <CookieConsentModal
        forceOpen={cookieModalOpen}
        onOpenPrivacyModal={navigateToPrivacy}
        onCloseForceOpen={() => setCookieModalOpen(false)}
      />
    </div>
  );
}
