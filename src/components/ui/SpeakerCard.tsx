import type { Speaker } from "../../data/speakers";
import { PersonPlaceholder } from "../icons/PersonPlaceholder";

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-profundo/45 border border-celeste/10 transition-all duration-400 hover:border-celeste/35 hover:-translate-y-[5px] hover:scale-[1.015]">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-celeste/[0.07] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      {speaker.image ? (
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full aspect-[3/2] object-cover relative z-[1]"
          loading="lazy"
        />
      ) : (
        <div className="w-full aspect-[3/2] bg-gradient-to-br from-profundo to-medio flex items-center justify-center relative z-[1]">
          <PersonPlaceholder />
        </div>
      )}

      <div className="p-5 pb-6 relative z-[1]">
        <h3 className="font-serif text-[1.3rem] font-semibold text-branco mb-0.5">
          {speaker.name}
        </h3>
        <p className="text-[0.7rem] uppercase tracking-[0.14em] text-acento mb-3">
          {speaker.role}
        </p>
        <p className="text-sm text-dim leading-[1.7] font-light">
          {speaker.bio}
        </p>
      </div>
    </article>
  );
}
