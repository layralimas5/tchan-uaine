import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoUaine from "@/assets/uaine-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#importacao", label: "Importação" },
  { href: "#wine4friends", label: "Wine 4 Friends" },
  { href: "#marcas", label: "Marcas" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.14_0.06_18/0.92)] backdrop-blur-md py-3 border-b border-[oklch(1_0_0/0.06)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-3 text-cream">
          <img
            src={logoUaine}
            alt="Uaine Group"
            className="h-8 md:h-10 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          />

          <span className="h-4 w-px bg-[oklch(0.97_0.008_60/0.4)]" />

    
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] tracking-[0.22em] uppercase text-[oklch(0.97_0.008_60/0.75)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex btn-base btn-outline-cream py-3 px-6"
        >
          Seja Parceiro
        </a>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden text-[var(--cream)] p-2"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.14_0.06_18/0.98)] backdrop-blur-md`}
      >
        <nav className="container-luxe flex flex-col gap-1 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm tracking-[0.18em] uppercase text-[oklch(0.97_0.008_60/0.85)] border-b border-[oklch(1_0_0/0.06)] hover:text-[var(--accent)] transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="btn-base btn-cream mt-6 self-start"
          >
            Seja Parceiro
          </a>
        </nav>
      </div>
    </header>
  );
}