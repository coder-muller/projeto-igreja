import type { ScheduleItem } from "../../data/schedule";

interface ScheduleRowProps {
  item: ScheduleItem;
}

export function ScheduleRow({ item }: ScheduleRowProps) {
  return (
    <div className="group relative grid grid-cols-[76px_1fr_auto] max-sm:grid-cols-[58px_1fr] gap-6 items-start py-5 px-4 pl-6 border-b border-celeste/6 rounded-[10px] transition-colors duration-300 hover:bg-celeste/[0.04]">
      {/* Left accent bar */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-acento rounded transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] group-hover:h-[55%]" />

      {/* Time */}
      <div className="text-right pt-0.5">
        <div className="font-serif text-[1.55rem] font-light text-celeste leading-none">
          {item.time}
        </div>
        <div className="text-[0.62rem] text-dim uppercase tracking-[0.1em]">
          {item.period}
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="font-serif text-[1.1rem] font-semibold text-branco mb-0.5">
          {item.speaker}
        </div>
        <div className="text-[0.74rem] uppercase tracking-[0.1em] text-acento mb-2">
          {item.topic}
        </div>
        <p className="text-[0.83rem] text-dim leading-[1.65] font-light">
          {item.description}
        </p>
      </div>

      {/* Tag */}
      <span className="max-sm:hidden text-[0.65rem] uppercase tracking-[0.1em] text-celeste border border-celeste/22 rounded-full px-3 py-1 whitespace-nowrap h-fit bg-celeste/5 transition-all duration-300 group-hover:bg-celeste/12 group-hover:border-celeste/40">
        {item.tag}
      </span>
    </div>
  );
}
