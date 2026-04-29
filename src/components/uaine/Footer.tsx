import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoUainePreto from "@/assets/uaine-preto.png";

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--cream)] text-[var(--wine)] border-t border-[var(--border)]">
      <div className="container-luxe py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
      <img
  src={logoUainePreto}
  alt="Uaine Group"
  className="h-8 md:h-10 object-contain"
/>

            <p className="mt-6 max-w-md text-[var(--wine)]/70 leading-relaxed">
              Um grupo dedicado à curadoria, importação e experiências em torno do vinho.
              Construindo pontes entre vinícolas internacionais e o paladar brasileiro.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/uainegroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Uaine Group"
                className="grid place-items-center h-10 w-10 border border-[var(--wine)]/20 hover:bg-[var(--wine)] hover:text-[var(--cream)] transition-all"
              >
                <Instagram size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="grid place-items-center h-10 w-10 border border-[var(--wine)]/20 hover:bg-[var(--wine)] hover:text-[var(--cream)] transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[var(--wine)]/60">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#importacao", "Importação"],
                ["#wine4friends", "Wine 4 Friends"],
                ["#marcas", "Marcas"],
                ["#experiencias", "Experiências"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[var(--wine)]/80 hover:text-[var(--accent)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow text-[var(--wine)]/60">Contato</p>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-[var(--accent)]" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[var(--wine)]/50">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/5527999561971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--wine)]/80 hover:text-[var(--accent)]"
                  >
                    +55 27 99956-1971
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-[var(--accent)]" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[var(--wine)]/50">
                    Central de Atendimento
                  </span>
                  <a
                    href="tel:+552721427369"
                    className="text-[var(--wine)]/80 hover:text-[var(--accent)]"
                  >
                    +55 27 2142-7369
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[var(--accent)]" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[var(--wine)]/50">
                    E-mail
                  </span>
                  <a
                    href="mailto:comercial@uainegroup.com.br"
                    className="text-[var(--wine)]/80 hover:text-[var(--accent)]"
                  >
                    comercial@uainegroup.com.br
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[var(--accent)]" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[var(--wine)]/50">
                    Sede
                  </span>
                  <span className="text-[var(--wine)]/80">
                    Vitória — Espírito Santo, Brasil
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--wine)]/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-[var(--wine)]/50">
          <p>© {new Date().getFullYear()} Uaine Group. Todos os direitos reservados.</p>
          <p className="tracking-[0.18em] uppercase">
            Beba com moderação · Apreciação responsável
          </p>
        </div>
      </div>
    </footer>
  );
}