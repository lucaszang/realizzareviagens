"use client";

import { FormEvent, useState } from "react";
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { offices, siteConfig } from "@/lib/site";

const contactItems = [
  {
    label: "WhatsApp",
    value: "Atendimento imediato",
    href: siteConfig.whatsappUrl,
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    value: `@${siteConfig.instagramHandle}`,
    href: siteConfig.instagram,
    icon: Instagram,
  },
  {
    label: "Facebook",
    value: "realizzareviagens",
    href: siteConfig.facebook,
    icon: Facebook,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Olá! Vim pelo site da Realizzare Viagens.`,
      name && `Nome: ${name}`,
      email && `E-mail: ${email}`,
      phone && `Telefone: ${phone}`,
      message && `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `mailto:${siteConfig.email}?subject=${encodeURIComponent("Contato pelo site")}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    setStatus("sent");
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label-caps text-rv-ocean">Contato</p>
            <h2 className="section-title mt-3">Vamos planejar a sua próxima viagem</h2>
            <div className="gold-rule-long mt-6" />
            <p className="mt-6 font-serif text-xl italic text-rv-ocean">
              “O mundo é um livro e aquele que não viaja lê sempre a mesma página.”
            </p>
            <p className="mt-2 text-sm text-rv-muted">Santo Agostinho</p>

            <div className="mt-10 divide-y divide-rv-mist border-y border-rv-mist">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 transition hover:bg-rv-cream"
                  >
                    <Icon size={18} className="text-rv-ocean" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-rv-muted">
                        {item.label}
                      </p>
                      <p className="text-sm text-rv-navy">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 text-sm text-rv-muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-rv-sand" />
              <p>
                {offices.map((office) => office.city).join(" · ")}
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-rv-cream p-8 sm:p-10">
            <p className="font-serif text-2xl text-rv-navy">Envie uma mensagem</p>
            <div className="mt-8 space-y-4">
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                  Nome
                </span>
                <input
                  name="name"
                  required
                  className="w-full border border-rv-mist bg-white px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                  E-mail
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-rv-mist bg-white px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                  Telefone
                </span>
                <input
                  name="phone"
                  className="w-full border border-rv-mist bg-white px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-rv-muted">
                  Mensagem
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Para onde você quer ir?"
                  className="w-full border border-rv-mist bg-white px-4 py-3 text-sm outline-none ring-rv-sand focus:ring-1"
                />
              </label>
            </div>
            <button type="submit" className="btn-navy mt-8 w-full">
              Enviar
            </button>
            {status === "sent" && (
              <p className="mt-4 text-sm text-rv-ocean">
                Obrigado! Seu aplicativo de e-mail deve abrir em instantes. Se preferir,
                fale conosco pelo WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
