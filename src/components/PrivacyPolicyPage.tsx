import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Building,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Copy,
  Check,
  Search,
  Lock,
  FileText,
  AlertTriangle,
  ChevronRight,
  Printer,
  Phone,
} from 'lucide-react';
import { PRIVACY_POLICY_METADATA, PRIVACY_SECTIONS } from '../data/privacyPolicyData';

interface PrivacyPolicyPageProps {
  onNavigateToLanding: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateToLanding }) => {
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const filteredSections = PRIVACY_SECTIONS.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (sec.keyPoints && sec.keyPoints.some((kp) => kp.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleCopyAll = () => {
    const fullText = `
POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
Plataforma: Savia (un producto de Hefesoft S.A.S.)
Responsable Legal: ${PRIVACY_POLICY_METADATA.legalEntity}
Sede: ${PRIVACY_POLICY_METADATA.address}
Teléfono: ${PRIVACY_POLICY_METADATA.phone}
Contacto: ${PRIVACY_POLICY_METADATA.emailPrivacy}
Última actualización: ${PRIVACY_POLICY_METADATA.lastUpdated}
URL: ${PRIVACY_POLICY_METADATA.officialUrl}

DECLARACIÓN DE CUMPLIMIENTO GOOGLE LIMITED USE:
El uso de la información recibida de las APIs de Google por parte de Savia cumplirá la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.

CLÁUSULAS:
${PRIVACY_SECTIONS.map((s) => `\n${s.number}. ${s.title.toUpperCase()}\n${s.summary}\n${s.content.join('\n')}\n${s.keyPoints ? s.keyPoints.map((k) => '• ' + k).join('\n') : ''}\n`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const fullText = `POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS - SAVIA (HEFESOFT S.A.S.)\n\nResponsable: ${PRIVACY_POLICY_METADATA.legalEntity}\nDirección: ${PRIVACY_POLICY_METADATA.address}\nTeléfono: ${PRIVACY_POLICY_METADATA.phone}\nContacto: ${PRIVACY_POLICY_METADATA.emailPrivacy}\nÚltima actualización: ${PRIVACY_POLICY_METADATA.lastUpdated}\n\n${PRIVACY_SECTIONS.map((s) => `${s.number}. ${s.title}\n\n${s.content.join('\n\n')}\n\nPUNTOS CLAVE:\n${s.keyPoints?.map((k) => '- ' + k).join('\n') || ''}\n\n-------------------------\n`).join('\n')}`;

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aviso_de_Privacidad_Savia_Hefesoft_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="min-h-screen bg-[#050807] text-[#E5E7EB] font-sans pb-24">
      {/* Top Sticky Nav for Privacy Page */}
      <nav className="sticky top-0 z-30 bg-[#030605]/95 backdrop-blur-md border-b border-[#1A2E28] px-4 sm:px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            id="back-to-landing-top-btn"
            onClick={onNavigateToLanding}
            className="flex items-center gap-2 text-xs font-bold text-[#9CA3AF] hover:text-[#10B981] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Volver al inicio</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href="https://savia.app.hefesoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#10B981] hover:bg-[#34D399] text-black text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-[#10B981]/20"
              title="Ir a la aplicación de Savia"
            >
              <span>Ingresar a Savia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 rounded-lg bg-[#0F1715] border border-[#1A2E28] hover:border-[#10B981]/50 text-xs font-semibold text-[#D1D5DB] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar texto de la política"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Copiar</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981] hover:text-black text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Descargar aviso en formato de texto"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar .txt</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
        {/* Document Header */}
        <header className="space-y-4 border-b border-[#1A2E28] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Documento Legal Oficial e Indexable</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            Aviso de Privacidad y Tratamiento de Datos Personales
          </h1>

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Este documento regula la recopilación, almacenamiento, uso y protección de datos personales en la plataforma <strong className="text-white">Savia</strong>, desarrollada y operada por <strong className="text-white">Hefesoft S.A.S.</strong>, en estricto cumplimiento del marco legal de la República de Colombia y las normativas de protección de datos internacionales.
          </p>

          {/* Legal metadata card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0F1715] border border-[#1A2E28] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#9CA3AF]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Building className="w-4 h-4 text-[#10B981]" />
                <span>Responsable: {PRIVACY_POLICY_METADATA.legalEntity}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{PRIVACY_POLICY_METADATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10B981]" />
                <span>Teléfono: <span className="text-white font-medium">{PRIVACY_POLICY_METADATA.phone}</span></span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span>Correo: <a href={`mailto:${PRIVACY_POLICY_METADATA.emailPrivacy}`} className="text-[#10B981] hover:underline">{PRIVACY_POLICY_METADATA.emailPrivacy}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#10B981]" />
                <time dateTime="2026-09-04">Última actualización: {PRIVACY_POLICY_METADATA.lastUpdated}</time>
              </div>
            </div>
          </div>

          {/* Google Limited Use Callout */}
          <div className="p-4 rounded-xl bg-[#0F1715] border-l-4 border-l-[#10B981] border border-[#1A2E28] space-y-1.5">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#10B981]" />
              Declaración de Cumplimiento de Google API Services User Data Policy
            </h2>
            <blockquote className="text-xs text-[#D1D5DB] leading-relaxed italic">
              &quot;El uso y la transferencia a cualquier otra aplicación de la información recibida de las cuentas de Google por parte de Savia cumplirá con la{' '}
              <a
                href={PRIVACY_POLICY_METADATA.googlePolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10B981] underline font-semibold"
              >
                Política de Datos del Usuario de los Servicios de las API de Google
              </a>
              , incluidos los requisitos de Uso Limitado (Limited Use Requirements).&quot;
            </blockquote>
          </div>
        </header>

        {/* Real-time search filter */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar cláusula, palabra clave (ej. 'Gmail', 'IA', 'ARCO', 'retención')..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#0F1715] border border-[#1A2E28] focus:border-[#10B981] focus:outline-none text-white placeholder-[#6B7280]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2 text-xs text-[#9CA3AF] hover:text-white"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Index of sections */}
        <div className="p-4 rounded-xl bg-[#0A100E] border border-[#1A2E28] space-y-2">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Índice de Cláusulas y Contenidos
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {PRIVACY_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="text-[#9CA3AF] hover:text-[#10B981] flex items-center gap-2 truncate transition-colors"
              >
                <span className="w-5 h-5 rounded bg-[#0F1715] text-[#10B981] font-bold text-[10px] flex items-center justify-center border border-[#1A2E28] shrink-0">
                  {sec.number}
                </span>
                <span className="truncate">{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Full Clauses List */}
        <div className="space-y-8 pt-4">
          {filteredSections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] space-y-4 scroll-mt-20"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-black text-xs flex items-center justify-center shrink-0">
                  {sec.number}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {sec.title}
                </h2>
              </div>

              <p className="text-xs font-medium text-[#10B981]">
                {sec.summary}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                {sec.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {sec.keyPoints && sec.keyPoints.length > 0 && (
                <div className="p-4 rounded-xl bg-[#050807] border border-[#1A2E28] space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Puntos Clave y Directrices:
                  </div>
                  <ul className="space-y-2 text-xs text-[#9CA3AF]">
                    {sec.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sec.alertNotice && (
                <div className="p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                  <AlertTriangle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sec.alertNotice}</span>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="pt-10 border-t border-[#1A2E28] text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://savia.app.hefesoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-[#10B981]/20"
            >
              <span>Ingresar a Savia</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="back-to-landing-bottom-btn"
              onClick={onNavigateToLanding}
              className="px-7 py-3 rounded-full bg-[#0F1715] hover:bg-[#1A2E28] text-white border border-[#1A2E28] hover:border-[#10B981]/40 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio de Savia</span>
            </button>
          </div>
          <p className="text-[11px] text-[#6B7280]">
            Hefesoft S.A.S. © 2026 Todos los derechos reservados • Savia es un producto de Hefesoft
          </p>
        </div>
      </div>
    </article>
  );
};
