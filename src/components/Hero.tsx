import { motion } from "motion/react";
import { Badge } from "./ui/Badge";

const badges = ["Entrada Livre", "12 de Abril", "09h às 16h30"];

export function Hero() {
  return (
    <section className="relative z-1 min-h-screen flex flex-col items-center justify-center px-8 py-24 pt-24 text-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-acento mb-6"
      >
        <span className="block w-7 h-px bg-acento" />
        Seminário de Homens &nbsp;&middot;&nbsp; 12 de Abril de 2026
        <span className="block w-7 h-px bg-acento" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-[0.93] text-branco"
      >
        Organização
        <br />
        <em className="italic text-acento2">Financeira</em>
      </motion.h1>

      {/* Decorative rule */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="w-px h-14 bg-linear-to-b from-acento to-transparent my-8"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
        className="text-base font-light text-dim max-w-[460px] leading-[1.85]"
      >
        Um dia de pregação, testemunho e comunhão para equipar o homem na sua missão. Traz paz espiritual à vida financeira.
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
        className="flex gap-3 mt-10 flex-wrap justify-center"
      >
        {badges.map((label) => (
          <Badge key={label} label={label} />
        ))}
      </motion.div>

      {/* Event art placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 max-w-[800px] w-full relative"
      >
        <div className="absolute -inset-px rounded-2xl z-[-1] bg-linear-to-br from-celeste/45 via-transparent to-acento/20" />
        <div className="bg-profundo/60 rounded-2xl border border-celeste/10 p-10 min-h-[200px] flex items-center justify-center backdrop-blur-[10px]">
          <div className="text-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className="opacity-28 mx-auto"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="7"
                width="38"
                height="30"
                rx="3"
                stroke="#7EC8E3"
                strokeWidth="1.2"
              />
              <circle cx="14" cy="18" r="4" stroke="#7EC8E3" strokeWidth="1.2" />
              <path
                d="M3 30 L13 20 L21 28 L29 18 L41 31"
                stroke="#7EC8E3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[0.78rem] text-dim italic mt-3">
              <code className="bg-celeste/10 px-2 py-0.5 rounded text-[0.72rem] text-acento">
                &lt;img src="arte-evento.jpg"&gt;
              </code>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
