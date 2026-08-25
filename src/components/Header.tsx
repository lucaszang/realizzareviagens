"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-white/10 bg-rv-navyDeep backdrop-blur-md"
          : "bg-gradient-to-b from-rv-navyDeep/70 to-transparent"
      }`}
    >
      <div className="section-container-wide flex h-20 items-center justify-between gap-4 lg:h-24">
        <Link href="#inicio" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo light className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 transition hover:text-rv-sandLight"
            >
              {link.label}
            </a>
          ))}
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
            Monte seu tour
          </a>
        </nav>

        <button
          type="button"
          className="shrink-0 p-2 text-rv-sandLight transition hover:text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-rv-navyDeep lg:hidden">
          <nav className="section-container-wide flex flex-col py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
              onClick={() => setOpen(false)}
            >
              Monte seu tour
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
