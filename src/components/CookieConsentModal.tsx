import React, { useState, useEffect } from 'react';
import { X, Cookie, ShieldCheck, ChevronDown, ChevronUp, Check, Settings2, FileText } from 'lucide-react';

interface CookieConsentModalProps {
  onOpenPrivacyModal: () => void;
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

interface CookiePreferences {
  necessary: boolean; // always true
  functional: boolean;
  analytics: boolean;
  performance: boolean;
}

const STORAGE_KEY = 'savia_cookie_consent_v1';

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({
  onOpenPrivacyModal,
  forceOpen,
  onCloseForceOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullNecessaryText, setShowFullNecessaryText] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: true,
    analytics: false,
    performance: true,
  });
  const [hasConsented, setHasConsented] = useState<boolean>(true); // default true to avoid flash, check on mount

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPreferences(JSON.parse(saved));
        setHasConsented(true);
      } else {
        // First visit: show modal after a brief moment
        setHasConsented(false);
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setHasConsented(false);
    }
  }, []);

  const handleSavePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.warn('Could not save cookie preferences', e);
    }
    setPreferences(prefs);
    setHasConsented(true);
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
    };
    handleSavePreferences(allAccepted);
  };

  const handleSaveCustom = () => {
    handleSavePreferences(preferences);
  };

  return (
    <>
      {/* Floating Revisit Consent Button */}
      <button
        id="revisit-consent-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 px-3.5 py-2 rounded-full bg-[#0F1715] hover:bg-[#1A2E28] text-[#9CA3AF] hover:text-[#10B981] border border-[#1A2E28] hover:border-[#10B981]/50 shadow-lg shadow-black/40 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer group"
        title="Personaliza tus preferencias"
      >
        <Cookie className="w-4 h-4 text-[#10B981] group-hover:rotate-12 transition-transform" />
        <span>Personaliza tus preferencias</span>
      </button>

      {/* Cookie Consent Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-[#0F1715] border border-[#1A2E28] rounded-2xl shadow-2xl shadow-black/80 text-[#E5E7EB] overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#1A2E28] flex items-center justify-between bg-[#050807]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                  <Settings2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Personaliza tus preferencias
                  </h3>
                  <p className="text-xs text-[#9CA3AF]">
                    Gestión de privacidad y cookies en Savia (Hefesoft S.A.S.)
                  </p>
                </div>
              </div>

              <button
                id="cookie-modal-close-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-[#1A2E28] transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              <p>
                Usamos cookies para ayudarte a navegar de manera eficiente y realizar ciertas funciones. Encontrarás información detallada sobre todas las cookies en cada categoría de consentimiento a continuación.
              </p>

              {/* Categories */}
              <div className="space-y-3 pt-2">
                {/* 1. Necessary (Always Active) */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#050807] border border-[#1A2E28]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <span className="font-bold text-white text-xs sm:text-sm">
                        Necesario
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-[10px] font-bold uppercase tracking-wider">
                      Siempre activa
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[#9CA3AF]">
                    Las cookies categorizadas como &quot;Necesarias&quot; se almacenan en tu navegador, ya que son esenciales para habilitar las funcionalidades básicas del sitio, como la autenticación de sesión y la seguridad contra ataques CSRF.
                    {showFullNecessaryText && (
                      <span className="block mt-1 text-[#6B7280]">
                        Sin estas cookies, el cotizador de Savia no puede operar ni mantener las sesiones protegidas con las aseguradoras y Nango. No almacenan información personal identificable para otros fines.
                      </span>
                    )}
                  </p>

                  <button
                    onClick={() => setShowFullNecessaryText(!showFullNecessaryText)}
                    className="mt-1 text-[11px] text-[#10B981] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    {showFullNecessaryText ? (
                      <>
                        <span>Mostrar menos</span>
                        <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        <span>Mostrar más</span>
                        <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>

                {/* 2. Functional */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#050807] border border-[#1A2E28] flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-bold text-white text-xs sm:text-sm">
                      Functional
                    </div>
                    <p className="text-xs text-[#9CA3AF]">
                      Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1A2E28] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
                  </label>
                </div>

                {/* 3. Analytics */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#050807] border border-[#1A2E28] flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-bold text-white text-xs sm:text-sm">
                      Analytics
                    </div>
                    <p className="text-xs text-[#9CA3AF]">
                      Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1A2E28] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
                  </label>
                </div>

                {/* 4. Performance */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#050807] border border-[#1A2E28] flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-bold text-white text-xs sm:text-sm">
                      Performance
                    </div>
                    <p className="text-xs text-[#9CA3AF]">
                      Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.performance}
                      onChange={(e) =>
                        setPreferences({ ...preferences, performance: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1A2E28] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
                  </label>
                </div>
              </div>

              {/* Privacy Policy Link Note */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#9CA3AF]">
                <span>¿Dudas sobre cómo tratamos tus datos personales?</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenPrivacyModal();
                  }}
                  className="text-[#10B981] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Ver Aviso de Privacidad
                </button>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-[#1A2E28] bg-[#050807] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                id="cookie-save-preferences-btn"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#0F1715] hover:bg-[#1A2E28] text-[#E5E7EB] border border-[#1A2E28] hover:border-[#10B981]/50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Guardar mis preferencias
              </button>
              <button
                id="cookie-accept-all-btn"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black text-xs font-bold uppercase tracking-wider shadow-md shadow-[#10B981]/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4 text-black" />
                <span>Aceptar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
