"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import {
  TourAnswers,
  buildTourBriefing,
  emptyTourAnswers,
  maskPhoneBR,
  tourBudgets,
  tourDestinations,
  tourStyles,
  tourWhen,
} from "@/lib/tour";

const steps = [
  { id: "destino", title: "Para onde você quer ir?" },
  { id: "quando", title: "Quando pretende viajar?" },
  { id: "quem", title: "Quem vai com você?" },
  { id: "ritmo", title: "Qual o ritmo da viagem?" },
  { id: "orcamento", title: "Qual o orçamento por pessoa?" },
  { id: "contato", title: "Como a equipe te encontra?" },
] as const;

type Choice = { id: string; label: string };

function ChoiceGrid({
  options,
  value,
  onChange,
}: {
  options: Choice[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const selected = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`border px-5 py-4 text-left text-sm transition ${
              selected
                ? "border-rv-sand bg-rv-sand/20 text-rv-navy"
                : "border-rv-mist bg-white text-rv-navy hover:border-rv-sand/60"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function TourForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<TourAnswers>(emptyTourAnswers);
  const [copied, setCopied] = useState(false);

  const briefing = useMemo(() => buildTourBriefing(answers), [answers]);
  const progress = ((step + 1) / steps.length) * 100;
  const current = steps[step];

  function patch(partial: Partial<TourAnswers>) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, ...partial }));
    setCopied(false);
  }

  function canContinue() {
    if (step === 0) {
      if (!answers.destination) return false;
      if (answers.destination === "outro") return answers.destinationOther.trim().length > 1;
      return true;
    }
    if (step === 1) {
      if (!answers.when) return false;
      if (answers.when === "datas") return answers.dates.trim().length > 2;
      return true;
    }
    if (step === 2) return answers.adults >= 1;
    if (step === 3) return Boolean(answers.style);
    if (step === 4) return Boolean(answers.budget);
    if (step === 5) {
      const digits = answers.phone.replace(/\D/g, "");
      return answers.name.trim().length > 1 && digits.length >= 10;
    }
    return false;
  }

  async function sendWhatsApp() {
    try {
      await navigator.clipboard.writeText(briefing);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(siteConfig.whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function sendEmail(event: FormEvent) {
    event.preventDefault();
    const subject = `Pedido de roteiro — ${answers.name.trim()}`;
    window.open(
      `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefing)}`,
      "_blank",
    );
  }

  return (
    <section id="monte-seu-tour" className="scroll-mt-24 bg-rv-cream py-20 sm:py-28">
      <div className="section-container">
        <p className="label-caps text-rv-ocean">Sob medida</p>
        <h2 className="section-title mt-3">Monte o seu tour</h2>
        <div className="gold-rule-long mt-6" />
        <p className="section-subtitle">
          Responda em poucos passos. A equipe recebe um briefing em reais, pronto para
          montar o roteiro com mais precisão.
        </p>

        <div className="mt-10 bg-white p-6 sm:p-10">
          <div className="mb-8">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-rv-muted">
              <span>{current.id.replace("-", " ")}</span>
              <span>
                {step + 1} / {steps.length}
              </span>
            </div>
            <div className="mt-3 h-px bg-rv-mist">
              <div className="h-px bg-rv-sand transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <h3 className="font-serif text-2xl text-rv-navy sm:text-3xl">{current.title}</h3>

          <div className="mt-8">
            {step === 0 && (
              <>
                <ChoiceGrid
                  options={tourDestinations}
                  value={answers.destination}
                  onChange={(destination) => patch({ destination })}
                />
                {answers.destination === "outro" && (
                  <input
                    value={answers.destinationOther}
                    onChange={(event) => patch({ destinationOther: event.target.value })}
                    placeholder="Qual destino?"
                    className="mt-4 w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                )}
              </>
            )}

            {step === 1 && (
              <>
                <ChoiceGrid
                  options={tourWhen}
                  value={answers.when}
                  onChange={(when) => patch({ when })}
                />
                {answers.when === "datas" && (
                  <input
                    value={answers.dates}
                    onChange={(event) => patch({ dates: event.target.value })}
                    placeholder="Ex.: 10 a 20 de outubro de 2026"
                    className="mt-4 w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                )}
              </>
            )}

            {step === 2 && (
              <div className="grid gap-6 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    Adultos
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={answers.adults}
                    onChange={(event) => patch({ adults: Number(event.target.value) || 1 })}
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    Crianças
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={answers.children}
                    onChange={(event) => patch({ children: Number(event.target.value) || 0 })}
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                  <span className="mt-2 block text-xs text-rv-muted">A partir de 2 anos</span>
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    Bebês
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={6}
                    value={answers.babies}
                    onChange={(event) => patch({ babies: Number(event.target.value) || 0 })}
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                  <span className="mt-2 block text-xs text-rv-muted">Abaixo de 2 anos</span>
                </label>
              </div>
            )}

            {step === 3 && (
              <ChoiceGrid
                options={tourStyles}
                value={answers.style}
                onChange={(style) => patch({ style })}
              />
            )}

            {step === 4 && (
              <>
                <ChoiceGrid
                  options={tourBudgets}
                  value={answers.budget}
                  onChange={(budget) => patch({ budget })}
                />
                <p className="mt-4 text-sm text-rv-muted">Valores aproximados por pessoa, em reais.</p>
              </>
            )}

            {step === 5 && (
              <form onSubmit={sendEmail} className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    Nome
                  </span>
                  <input
                    required
                    value={answers.name}
                    onChange={(event) => patch({ name: event.target.value })}
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    WhatsApp
                  </span>
                  <input
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={16}
                    value={answers.phone}
                    onChange={(event) => patch({ phone: maskPhoneBR(event.target.value) })}
                    placeholder="(51) 99999-9999"
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                    Algo que a equipe precisa saber?
                  </span>
                  <textarea
                    rows={3}
                    value={answers.notes}
                    onChange={(event) => patch({ notes: event.target.value })}
                    placeholder="Aniversário, lua de mel, restrição alimentar, primeira viagem internacional..."
                    className="w-full border border-rv-mist bg-rv-cream px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                  />
                </label>

                <div className="border border-rv-mist bg-rv-cream p-5 text-sm leading-relaxed text-rv-navy whitespace-pre-wrap">
                  {briefing}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={sendWhatsApp} className="btn-navy">
                    <MessageCircle size={16} />
                    Enviar no WhatsApp
                  </button>
                  <button type="submit" className="btn-primary">
                    <Mail size={16} />
                    Enviar por e-mail
                  </button>
                </div>
                {copied && (
                  <p className="text-sm text-rv-ocean">
                    Briefing copiado. Se o WhatsApp abrir em branco, é só colar a mensagem.
                  </p>
                )}
              </form>
            )}
          </div>

          {step < 5 && (
            <div className="mt-10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-rv-muted disabled:opacity-30"
              >
                <ArrowLeft size={16} />
                Voltar
              </button>
              <button
                type="button"
                onClick={() => canContinue() && setStep((value) => Math.min(steps.length - 1, value + 1))}
                disabled={!canContinue()}
                className="btn-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continuar
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {step === 5 && (
            <button
              type="button"
              onClick={() => setStep(4)}
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-rv-muted"
            >
              <ArrowLeft size={16} />
              Voltar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
