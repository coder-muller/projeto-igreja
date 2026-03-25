interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-acento mb-2">
        <span className="block w-[22px] h-px bg-acento" />
        {eyebrow}
      </div>
      <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-light text-branco leading-[1.1] mb-14">
        {title}
      </h2>
    </div>
  );
}
