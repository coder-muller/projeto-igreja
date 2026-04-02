import { schedule } from "../data/schedule";
import { SectionHeading } from "./ui/SectionHeading";
import { ScheduleRow } from "./ui/ScheduleRow";
import { FadeIn } from "./ui/FadeIn";

export function Schedule() {
  let globalIndex = 0;

  return (
    <section
      id="programacao"
      className="relative z-1 py-24 px-8 bg-linear-to-b from-transparent via-profundo/45 to-transparent"
    >
      <div className="max-w-220 mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Cronograma completo"
            title="Programação"
          />
        </FadeIn>

        {schedule.map((day) => (
          <div key={day.label}>
            <FadeIn direction="left">
              <div className="text-[0.68rem] uppercase tracking-[0.2em] text-celeste/45 pb-2 border-b border-celeste/8 mt-10 first:mt-0 mb-2">
                {day.label}
              </div>
            </FadeIn>

            {day.items.map((item) => {
              const delay = globalIndex * 0.11 + 0.1;
              globalIndex++;
              return (
                <FadeIn key={item.time} direction="left" delay={delay}>
                  <ScheduleRow item={item} />
                </FadeIn>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
