import React, { useState, useMemo } from 'react';
import { X, Search, ShieldCheck, Download, Copy, Check, ExternalLink, Mail, Lock, Building, FileText, AlertTriangle } from 'lucide-react';
import { PRIVACY_SECTIONS, PRIVACY_POLICY_METADATA } from '../data/privacyPolicyData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>(PRIVACY_SECTIONS[0].id);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return PRIVACY_SECTIONS;
    const q = searchQuery.toLowerCase();
    return PRIVACY_SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.content.some((c) => c.toLowerCase().includes(q)) ||
        s.keyPoints?.some((k) => k.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleCopySection = (section: typeof PRIVACY_SECTIONS[0]) => {
    const text = `${section.number}. ${section.title}\n\n${section.summary}\n\n${section.content.join('\n\n')}\n\nPuntos Clave:\n${section.keyPoints?.join('\n') || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedSectionId(section.id);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  const handleDownloadFullPolicy = () => {
    let fullText = `POLÍTICA DE PRIVACIDAD INTEGRAL - SAVIA (HEFESOFT S.A.S.)\n`;
    fullText += `Fecha de última actualización: ${PRIVACY_POLICY_METADATA.lastUpdated}\n`;
    fullText += `Responsable Legal: ${PRIVACY_POLICY_METADATA.legalEntity} (${PRIVACY_POLICY_METADATA.country})\n`;
    fullText += `URL Oficial: ${PRIVACY_POLICY_METADATA.officialUrl}\n`;
    fullText += `Contacto Privacidad: ${PRIVACY_POLICY_METADATA.emailPrivacy} | Soporte: ${PRIVACY_POLICY_METADATA.emailSupport}\n\n`;
    fullText += `============================================================\n\n`;

    PRIVACY_SECTIONS.forEach((s) => {
      fullText += `${s.number}. ${s.title.toUpperCase()}\n`;
      fullText += `${s.summary}\n\n`;
      s.content.forEach((p) => {
        fullText += `${p}\n\n`;
      });
      if (s.keyPoints) {
        fullText += `Aspectos Específicos:\n`;
        s.keyPoints.forEach((kp) => {
          fullText += ` • ${kp}\n`;
        });
        fullText += `\n`;
      }
      if (s.alertNotice) {
        fullText += `[AVISO FORMAL]: ${s.alertNotice}\n\n`;
      }
      fullText += `------------------------------------------------------------\n\n`;
    });

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Politica_de_Privacidad_Savia_Hefesoft_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
      role="dialog"
      aria-modal="true"
      id="privacy-policy-modal"
    >
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#0F1715] border border-[#1A2E28] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#E5E7EB]">
        {/* Modal Top Bar */}
        <div className="bg-[#050807] border-b border-[#1A2E28] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl text-[#10B981]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Política de Privacidad y Tratamiento de Datos
                </h2>
                <span className="hidden sm:inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] font-bold uppercase tracking-wider border border-[#10B981]/20">
                  Google Limited Use
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF]">
                Savia by <strong className="text-white">{PRIVACY_POLICY_METADATA.legalEntity}</strong> • Actualizado el {PRIVACY_POLICY_METADATA.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadFullPolicy}
              className="px-4 py-2 rounded-full bg-[#050807] hover:bg-[#1A2E28] text-white border border-[#1A2E28] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Descargar documento legal completo en .txt"
            >
              <Download className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="hidden sm:inline">Descargar .TXT</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#050807] hover:bg-[#1A2E28] text-[#9CA3AF] hover:text-white border border-[#1A2E28] transition-colors cursor-pointer"
              aria-label="Cerrar modal de privacidad"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search and Fast Navigation Strip */}
        <div className="bg-[#050807]/80 border-b border-[#1A2E28] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en cláusulas (ej: Gmail, Nango, retención, Limited Use)..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#0F1715] border border-[#1A2E28] rounded-full text-white placeholder-[#6B7280] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-[#10B981]" />
              {PRIVACY_POLICY_METADATA.country}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#10B981]" />
              Bóveda Nango
            </span>
            <span>•</span>
            <a
              href={PRIVACY_POLICY_METADATA.googlePolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:underline flex items-center gap-1 font-semibold"
            >
              Google Limited Use Policy
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Main Layout: Split Sidebar + Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Index Sidebar */}
          <div className="w-full md:w-72 bg-[#050807] border-r border-[#1A2E28] p-3 overflow-y-auto space-y-1.5 shrink-0 hidden md:block">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] px-2 py-1">
              Cláusulas y Requisitos
            </div>
            {PRIVACY_SECTIONS.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSectionId(sec.id);
                    document.getElementById(`sec-${sec.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-bold'
                      : 'text-[#9CA3AF] hover:bg-[#0F1715] hover:text-white'
                  }`}
                >
                  <span className="truncate mr-2">
                    {sec.number}. {sec.title}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />}
                </button>
              );
            })}

            {/* Quick Links */}
            <div className="pt-4 mt-4 border-t border-[#1A2E28] px-2 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                Enlaces Rápidos
              </div>
              <a
                href={PRIVACY_POLICY_METADATA.googlePermissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#10B981] hover:underline flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Revocar permisos en Google
              </a>
              <a
                href={`mailto:${PRIVACY_POLICY_METADATA.emailPrivacy}`}
                className="text-xs text-[#9CA3AF] hover:text-white flex items-center gap-1"
              >
                <Mail className="w-3 h-3 text-[#10B981]" />
                {PRIVACY_POLICY_METADATA.emailPrivacy}
              </a>
            </div>
          </div>

          {/* Reading Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-8 bg-[#0F1715]">
            {/* Obligatory Google Limited Use Banner */}
            <div className="p-5 rounded-2xl bg-[#050807] border border-[#10B981]/40 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] mb-1">
                    Declaración Oficial de Cumplimiento de Google API Services
                  </div>
                  <p className="text-sm font-semibold text-white italic leading-relaxed">
                    “El uso de la información recibida de las APIs de Google cumplirá la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.”
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-2">
                    Savia no comercializa información de usuario, no utiliza datos para publicidad personalizada y mantiene un modelo estricto de aprobación humana previa ("Human-in-the-loop").
                  </p>
                </div>
              </div>
            </div>

            {filteredSections.length === 0 ? (
              <div className="text-center py-12 text-[#9CA3AF] space-y-2">
                <FileText className="w-10 h-10 mx-auto text-[#6B7280]" />
                <p>No se encontraron resultados para "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#10B981] hover:underline cursor-pointer"
                >
                  Restablecer búsqueda
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={`sec-${sec.id}`}
                  className="p-5 sm:p-6 rounded-2xl bg-[#050807] border border-[#1A2E28] hover:border-[#10B981]/40 transition-colors space-y-4"
                >
                  {/* Section Title Bar */}
                  <div className="flex items-start justify-between gap-4 border-b border-[#1A2E28] pb-3">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs font-bold shrink-0">
                        {sec.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {sec.title}
                        </h3>
                        <p className="text-xs text-[#9CA3AF] mt-0.5">
                          {sec.summary}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopySection(sec)}
                      className="text-[#9CA3AF] hover:text-[#10B981] p-1.5 rounded-lg hover:bg-[#0F1715] transition-colors cursor-pointer shrink-0 text-xs flex items-center gap-1 border border-transparent hover:border-[#1A2E28]"
                      title="Copiar texto de esta cláusula"
                    >
                      {copiedSectionId === sec.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#10B981]" />
                          <span className="text-[11px] text-[#10B981]">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px] hidden sm:inline">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Section Paragraphs */}
                  <div className="space-y-3 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Key Points bullet list */}
                  {sec.keyPoints && sec.keyPoints.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#0F1715] border border-[#1A2E28] space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                        Puntos Clave y Condiciones Específicas:
                      </div>
                      <ul className="space-y-2">
                        {sec.keyPoints.map((kp, kpIdx) => (
                          <li key={kpIdx} className="flex items-start gap-2.5 text-xs text-[#E5E7EB]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-1.5" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Alert notice if any */}
                  {sec.alertNotice && (
                    <div className="p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-xs text-[#10B981] flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <strong>Aviso de Cumplimiento: </strong>
                        <span>{sec.alertNotice}</span>
                      </div>
                    </div>
                  )}
                </article>
              ))
            )}

            {/* Corporate Signature & Contact Box */}
            <div className="p-6 rounded-2xl bg-[#050807] border border-[#1A2E28] text-xs text-[#9CA3AF] space-y-3">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-[#10B981]" />
                <span>Información Corporativa del Responsable del Tratamiento</span>
              </div>
              <p>
                <strong>{PRIVACY_POLICY_METADATA.legalEntity}</strong> opera la solución Savia bajo estricto apego a las leyes de protección de datos personales de la República de Colombia (Ley 1581 de 2012 de Habeas Data), el Reglamento General de Protección de Datos de la Unión Europea (RGPD) y las directrices de verificación de aplicaciones de Google Workspace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <span className="text-[#9CA3AF] block">Sede Central:</span>
                  <span className="text-white">{PRIVACY_POLICY_METADATA.address}</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block">Oficial de Protección de Datos:</span>
                  <a href={`mailto:${PRIVACY_POLICY_METADATA.emailPrivacy}`} className="text-[#10B981] hover:underline">
                    {PRIVACY_POLICY_METADATA.emailPrivacy}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#050807] border-t border-[#1A2E28] p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#9CA3AF]">
            ¿Deseas ejercer tus derechos de acceso, rectificación o cancelación? Escríbenos a{' '}
            <a href={`mailto:${PRIVACY_POLICY_METADATA.emailSupport}`} className="text-[#10B981] hover:underline font-semibold">
              {PRIVACY_POLICY_METADATA.emailSupport}
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
