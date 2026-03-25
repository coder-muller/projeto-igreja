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
          (53) 99999-9999 &nbsp;&middot;&nbsp; contato@igrejadagraca.com.br
        </p>
        <p className="text-[0.7rem] text-dim/35 mt-4">
          &copy; 2025 Igreja da Graça
        </p>
      </footer>
    </FadeIn>
  );
}
