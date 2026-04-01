import { motion } from "motion/react";
import type { MouseEvent } from "react";
import { LogoIcon } from "./icons/LogoIcon";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#programacao", label: "Programação" },
];

function smoothScrollToAnchor(targetId: string) {
  const targetSection = document.getElementById(targetId);
  if (!targetSection) {
    return false;
  }

  const startY = window.scrollY;
  const endY = targetSection.getBoundingClientRect().top + window.scrollY;
  const distance = endY - startY;

  if (Math.abs(distance) < 2) {
    return true;
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
  return true;
}

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) {
    return;
  }

  // Preserve native behavior for modified clicks (new tab/window).
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();

  const targetId = href.slice(1);
  smoothScrollToAnchor(targetId);
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
        onClick={(event) => handleNavClick(event, "#inicio")}
      >
        <LogoIcon className="size-11 shrink-0" />
        <div>
          <div className="font-serif text-[1.35rem] font-semibold text-branco tracking-wide leading-tight">
            Igreja Mover
          </div>
          <div className="text-[0.68rem] font-light text-acento uppercase tracking-[0.2em]">
            Pregando um evangelho puro e simples até que Cristo volte.
          </div>
        </div>
      </a>

      <nav className="flex gap-10 max-sm:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleNavClick(event, link.href)}
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
