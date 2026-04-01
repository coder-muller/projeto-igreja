import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";

const PIX_KEY = "eventos.mover@gmail.com";
const WHATSAPP_NUMBER = "5553984570367";
const TICKET_PRICE = "30,00";
const EVENT_NAME = "Seminário de Homens - 12/04";

export function TicketPurchase() {
  const [copied, setCopied] = useState(false);

  async function handleCopyPix() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  function handleOpenWhatsApp() {
    const message = encodeURIComponent(
      `Olá! Acabei de fazer o PIX de R$${TICKET_PRICE} para o ${EVENT_NAME}. Segue o comprovante em anexo.`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="inscricao" className="relative z-1 max-w-[980px] mx-auto px-8 py-24">
      <FadeIn>
        <SectionHeading eyebrow="Inscrição Online" title="Garanta sua vaga" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-celeste/14 bg-profundo/55 backdrop-blur-[9px] p-6 sm:p-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <p className="text-sm text-dim">
              Valor do ingresso: <span className="text-branco font-medium">R$ {TICKET_PRICE}</span>
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-acento">Confirmação manual pela equipe</p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="size-7 rounded-full border border-acento/45 text-acento text-xs font-semibold flex items-center justify-center mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="text-cristal text-sm font-medium mb-2">Copie a chave PIX</p>
                <div className="flex items-center gap-2 bg-noite/80 border border-celeste/15 rounded-xl px-3 sm:px-4 py-3">
                  <span className="text-gelo text-sm flex-1 font-mono truncate">{PIX_KEY}</span>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="text-xs text-acento border border-acento/30 rounded-lg px-3 py-1.5 hover:bg-acento/10 transition-colors duration-200 whitespace-nowrap"
                  >
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-px h-5 bg-celeste/18 ml-3.5" />

            <div className="flex gap-4 items-start">
              <div className="size-7 rounded-full border border-acento/45 text-acento text-xs font-semibold flex items-center justify-center mt-0.5">
                2
              </div>
              <div>
                <p className="text-cristal text-sm font-medium">
                  Faça o PIX de <span className="text-branco">R$ {TICKET_PRICE}</span>
                </p>
                <p className="text-dim text-xs mt-0.5">Realize o pagamento no app do seu banco.</p>
              </div>
            </div>

            <div className="w-px h-5 bg-celeste/18 ml-3.5" />

            <div className="flex gap-4 items-start">
              <div className="size-7 rounded-full border border-acento/45 text-acento text-xs font-semibold flex items-center justify-center mt-0.5">
                3
              </div>
              <div className="flex-1">
                <p className="text-cristal text-sm font-medium">Envie o comprovante no WhatsApp</p>
                <p className="text-dim text-xs mt-0.5 mb-3">
                  Envie a foto do comprovante para confirmar sua inscrição na lista.
                </p>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500/14 hover:bg-emerald-500/22 border border-emerald-400/30 hover:border-emerald-400/45 text-emerald-300 rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.5l5.797-1.522A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.878 9.878 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z" />
                  </svg>
                  Enviar comprovante
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-dim text-xs mt-7 leading-relaxed">
            Assim que o pagamento for confirmado, a equipe adiciona seu nome na lista de inscritos.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
