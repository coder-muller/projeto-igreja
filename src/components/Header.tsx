import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { LogoIcon } from "./icons/LogoIcon";

const navLinks = [
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#programacao", label: "Programação" },
  { href: "#inicio", label: "Inicio" },
];

function smoothScrollToInicio() {
  const startY = window.scrollY;
  const inicioSection = document.getElementById("inicio");
  const endY = inicioSection
    ? inicioSection.getBoundingClientRect().top + window.scrollY
    : 0;
  const distance = endY - startY;

  if (Math.abs(distance) < 2) {
    return;
  }

  const duration = 900;
  let startTime: number | null = null;
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    window.scrollTo({ top: startY + distance * easedProgress });

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function handleInicioClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  smoothScrollToInicio();
  if (window.location.hash !== "#inicio") {
    window.history.replaceState(null, "", "#inicio");
  }
}

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-200 px-12 max-sm:px-5 py-4 flex items-center justify-between bg-noite/80 backdrop-blur-xl border-b border-celeste/14"
    >
      <a
        href="#inicio"
        aria-label="Voltar ao início"
        className="flex items-center gap-3 no-underline"
        onClick={handleInicioClick}
      >
        <LogoIcon className="size-11 shrink-0" />
        <div>
          <div className="font-serif text-[1.35rem] font-semibold text-branco tracking-wide leading-tight">
            Igreja Mover
          </div>
          <div className="text-[0.68rem] font-light text-acento uppercase tracking-[0.2em]">
            Onde há amor, há Deus
          </div>
        </div>
      </a>

      <nav className="flex gap-10 max-sm:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={link.href === "#inicio" ? handleInicioClick : undefined}
            className="group relative text-[0.76rem] uppercase tracking-[0.14em] text-gelo no-underline pb-0.5 transition-colors duration-300 hover:text-branco"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-acento transition-all duration-350 ease-in-out group-hover:w-full" />
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
