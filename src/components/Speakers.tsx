import { speakers } from "../data/speakers";
import { SectionHeading } from "./ui/SectionHeading";
import { SpeakerCard } from "./ui/SpeakerCard";
import { FadeIn } from "./ui/FadeIn";

export function Speakers() {
  return (
    <section
      id="palestrantes"
      className="relative z-1 max-w-275 mx-auto px-8 pt-14 pb-24"
    >
      <FadeIn>
        <SectionHeading eyebrow="Conheça os convidados" title="Palestrantes" />
      </FadeIn>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
        {speakers.map((speaker, i) => (
          <FadeIn key={speaker.name} delay={i * 0.15}>
            <SpeakerCard speaker={speaker} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
