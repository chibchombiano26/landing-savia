import React from 'react';
import { Mail, FileText, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Clock, Users } from 'lucide-react';

interface CotizadorIntermediariosSectionProps {
  onOpenPreConnectModal: () => void;
  onOpenPrivacyModal: () => void;
}

export const CotizadorIntermediariosSection: React.FC<CotizadorIntermediariosSectionProps> = ({
  onOpenPreConnectModal,
  onOpenPrivacyModal,
}) => {
  return (
    <section id="como-funciona" className="py-14 bg-[#0A100E] border-y border-[#1A2E28] text-[#E5E7EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            Flujo de Cotización Ágil
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ¿Cómo acelera Savia las cotizaciones de los intermediarios?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] mt-2 leading-relaxed">
            Sin pasos complicados. Conectas tu cuenta de Google Workspace y Savia te ayuda a responder a tus clientes en minutos en tres sencillos pasos:
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] hover:border-[#10B981]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-extrabold text-sm">
                01
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <h3>Detecta la solicitud en Gmail</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Cuando un cliente te escribe solicitando cotizar una póliza o servicio, Savia identifica los datos principales del correo para que no pierdas tiempo buscando entre bandejas saturadas.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1A2E28]/60 mt-4 text-[11px] text-[#10B981] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solo lectura contextual de correos
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] hover:border-[#10B981]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-extrabold text-sm">
                02
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <FileText className="w-4 h-4 text-[#34D399]" />
                <h3>Prepara la propuesta en Drive</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Estructura la información para generar la cotización o cuadro comparativo, creando el borrador o documento de trabajo ordenado directamente en tu Google Drive.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1A2E28]/60 mt-4 text-[11px] text-[#34D399] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Tus documentos quedan respaldados
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-[#0F1715] border border-[#1A2E28] hover:border-[#10B981]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-extrabold text-sm">
                03
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Calendar className="w-4 h-4 text-[#10B981]" />
                <h3>Tú revisas, confirmas y envías</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Ningún correo se envía ni se agenda nada automáticamente. Tú como intermediario revisas las cifras, apruebas la propuesta final y agendas el seguimiento en Google Calendar con un solo clic.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1A2E28]/60 mt-4 text-[11px] text-[#10B981] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% bajo control del intermediario
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0F1715] border border-[#1A2E28] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                ¿Listo para acelerar tus cotizaciones?
              </div>
              <div className="text-xs text-[#9CA3AF]">
                Conecta tu cuenta de Google Workspace con respaldo seguro y custodia Nango.
              </div>
            </div>
          </div>

          <button
            id="intermediary-cta-connect-btn"
            onClick={onOpenPreConnectModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#34D399] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0"
          >
            <span>Conectar Google Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
