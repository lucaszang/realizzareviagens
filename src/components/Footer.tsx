import { Facebook, Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, offices, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-rv-navyDeep py-14 text-white">
      <div className="section-container-wide">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Agência de viagens com atendimento personalizado e Cadastur.
              Realizando sonhos no Brasil e no mundo.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-rv-sand">Navegação</p>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-rv-sandLight"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-rv-sand">Bases</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {offices.map((office) => (
                <li key={office.city}>
                  {office.city}
                  <span className="text-white/40"> · {office.region}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-rv-sandLight"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-rv-sandLight"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Cadastur · Fazendo o turismo legal.</p>
        </div>
      </div>
    </footer>
  );
}
