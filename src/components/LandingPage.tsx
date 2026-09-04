import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  FileText,
  LogIn,
  ExternalLink,
  Building,
} from 'lucide-react';

interface LandingPageProps {
  onNavigateToPrivacy: () => void;
  onOpenCookieModal: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateToPrivacy,
  onOpenCookieModal,
}) => {
  const scrollToContent = () => {
    document.getElementById('inicio-contenido')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full text-[#E5E7EB] bg-[#050807]">
      {/* 1. Top Utility Navigation Bar */}
      <div className="bg-[#030605] border-b border-[#1A2E28] text-[#9CA3AF] text-[11px] font-medium py-2 px-4 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToContent}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Ir al contenido
            </button>
            <span className="text-[#1A2E28]">•</span>
            <div className="flex items-center gap-1.5 text-[#10B981] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Savia es un producto de Hefesoft</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://savia.app.hefesoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <LogIn className="w-3 h-3 text-[#10B981]" />
              <span>Ingresar a Savia</span>
            </a>

            <button
              onClick={onNavigateToPrivacy}
              className="px-2.5 py-0.5 rounded-full bg-[#0F1715] text-[#34D399] border border-[#1A2E28] hover:border-[#10B981]/50 transition-colors cursor-pointer font-semibold flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-[#10B981]" />
              <span>Ver Aviso de Privacidad</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Brand Header */}
      <header className="border-b border-[#1A2E28] bg-[#050807]/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#10B981] to-[#3B82F6] flex items-center justify-center shadow-md shadow-[#10B981]/20">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-lg tracking-tight">Savia</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                  Producto de Hefesoft
                </span>
              </div>
              <p className="text-[10px] text-[#9CA3AF]">Acelerador de ventas para intermediarios de seguros</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://savia.app.hefesoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#10B981]/20 flex items-center gap-1.5"
            >
              <span>Ingresar a Savia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section id="inicio-contenido" className="pt-16 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4 text-[#10B981]" />
          <span>Acelerador de Ventas de Seguros (AVS)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Acelera tus ventas de seguros con <span className="text-[#10B981]">Savia</span>
        </h1>

        <p className="text-base sm:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed font-normal">
          Una sola plataforma para automatizar tu proceso de cotización: pasa de{' '}
          <strong className="text-white">45 minutos a menos de 3 minutos</strong> por cotización.
        </p>

        <p className="text-sm sm:text-base text-[#10B981] font-semibold tracking-wide">
          Menos tiempo cotizando, más tiempo cerrando pólizas.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://savia.app.hefesoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#10B981]/30 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Ingresar a Savia</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onNavigateToPrivacy}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0F1715] hover:bg-[#1A2E28] text-white border border-[#1A2E28] hover:border-[#10B981]/40 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#10B981]" />
            <span>Ver Aviso de Privacidad</span>
          </button>
        </div>

        <div className="pt-4 text-xs text-[#9CA3AF] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>Savia es un producto de Hefesoft — Acelerador de ventas y cotizaciones para profesionales</span>
        </div>
      </section>

      {/* 4. Metrics / ¿Qué han logrado otros intermediarios? */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            ¿Qué han logrado otros intermediarios con Savia?
          </h2>
          <p className="text-xs text-[#9CA3AF]">
            Resultados medidos en agencias y corredores activos en Colombia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#10B981]">80%</div>
            <h3 className="text-base font-bold text-white">Más agilidad al cotizar</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Cotizan más rápido y aceleran el cierre.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#10B981]">60%</div>
            <h3 className="text-base font-bold text-white">Menos carga operativa</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Automatizan tareas y liberan tiempo comercial.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-[#10B981]">25%</div>
            <h3 className="text-base font-bold text-white">Más ventas</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Dan más seguimiento y generan nuevas oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-[#030605] border-t border-[#1A2E28] py-12 px-4 sm:px-6 text-xs text-[#9CA3AF]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight">Savia</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981]">
                  Hefesoft
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Acelerador de ventas de seguros para intermediarios y agencias en Colombia. Desarrollado y operado por Hefesoft S.A.S.
              </p>
              <div className="pt-1 text-[11px] text-[#10B981] font-semibold">
                Savia es un producto de Hefesoft
              </div>
            </div>

            {/* Col 2: Hefesoft S.A.S. */}
            <div className="space-y-2">
              <div className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Hefesoft S.A.S.</span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Savia es un producto de Hefesoft creado para digitalizar la intermediación aseguradora en Colombia.
              </p>
              <ul className="space-y-1.5 text-xs pt-1">
                <li>
                  <a
                    href="https://savia.app.hefesoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[#10B981]"
                  >
                    <span>Plataforma Savia</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <span className="text-[#9CA3AF]">cr 68 c bis a 37 sur</span>
                </li>
                <li>
                  <span className="text-[#9CA3AF]">Bogotá D.C., Colombia</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Contacto */}
            <div className="space-y-2">
              <div className="font-bold text-white text-xs uppercase tracking-wider">
                Contacto
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-semibold text-white">Atención y soporte</div>
                  <div className="text-white font-medium">3028648594</div>
                  <a href="mailto:soporte@hefesoft.com" className="text-[#10B981] hover:underline">
                    soporte@hefesoft.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Legal & Privacidad */}
            <div className="space-y-2">
              <div className="font-bold text-white text-xs uppercase tracking-wider">
                Legal & Privacidad
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    id="footer-policy-page-btn"
                    onClick={onNavigateToPrivacy}
                    className="text-[#10B981] hover:underline font-bold text-left cursor-pointer flex items-center gap-1"
                  >
                    <span>Política de Privacidad y Tratamiento de Datos</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateToPrivacy}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenCookieModal}
                    className="hover:text-[#10B981] transition-colors cursor-pointer"
                  >
                    Personalizar cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1A2E28] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px]">
            <div>Savia © Todos los Derechos Reservados 2026 • Hefesoft S.A.S.</div>
            <div className="flex items-center gap-3">
              <a
                href="https://savia.app.hefesoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>savia.app.hefesoft.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
