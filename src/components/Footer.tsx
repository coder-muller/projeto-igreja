import { CrossIcon } from "./icons/CrossIcon";
import { FadeIn } from "./ui/FadeIn";

export function Footer() {
  return (
    <FadeIn>
      <footer className="relative z-[1] py-16 px-8 pb-12 text-center border-t border-celeste/9">
        <CrossIcon className="mx-auto mb-5 size-7 opacity-28" />
        <div className="font-serif text-[1.15rem] text-gelo mb-1.5">
          Igreja Mover Canguçu
        </div>
        <p className="text-[0.78rem] text-dim leading-8">
          Av. 20 de Setembro, 246 &middot; Canguçu, RS
          <br />
          Cultos: Terças às 14h &middot; Quintas e Sábados às 19h30
        </p>
        <a
          href="https://www.instagram.com/movercangucu?igsh=MXZqa2I5cDNqYmFyNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 rounded-full border border-celeste/30 bg-celeste/8 px-4 py-2 text-[0.78rem] text-gelo no-underline transition-colors duration-300 hover:bg-celeste/16 hover:text-branco"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </a>
        <p className="text-[0.7rem] text-dim/35 mt-4">
          &copy; Igreja Mover Canguçu
        </p>
      </footer>
    </FadeIn>
  );
}
