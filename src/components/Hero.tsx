import { motion } from "motion/react";
import { Badge } from "./ui/Badge";
import arteEventoImg from "../assets/ArteSeminario.png";
import { TicketsIcon } from "lucide-react";

const badges = ["R$30,00", "12 de Abril", "09h"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-1 min-h-screen flex flex-col items-center justify-center px-8 py-24 pt-24 text-center"
    >
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
        className="text-base font-light text-dim max-w-115 leading-[1.85]"
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

      {/* Event art */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 w-full max-w-230 mx-auto relative"
      >
        <div className="absolute -inset-px rounded-2xl z-[-1] bg-linear-to-br from-celeste/45 via-transparent to-acento/20" />
        <div className="bg-profundo/60 rounded-2xl border border-celeste/10 p-3 sm:p-4 backdrop-blur-[10px]">
          <img
            src={arteEventoImg}
            alt="Arte oficial do Seminário de Homens"
            className="w-full h-auto block rounded-xl"
            loading="eager"
          />
        </div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.35, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        href="/ingressos"
        className="mt-7 inline-flex items-center justify-center gap-3 rounded-full border border-celeste/65 bg-celeste/18 px-6 py-3 text-[0.78rem] md:px-9 md:py-3.5 md:text-[0.9rem] uppercase tracking-[0.14em] text-gelo no-underline shadow-[0_0_22px_rgba(91,155,213,0.18)] transition-all duration-300 hover:bg-celeste/28 hover:text-branco hover:border-celeste/80 hover:shadow-[0_0_30px_rgba(91,155,213,0.28)]"
      >
        <TicketsIcon className="size-4 md:size-5" />
        Fazer inscrição
      </motion.a>
    </section>
  );
}
