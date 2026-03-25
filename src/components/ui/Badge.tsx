interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-celeste/22 rounded-full text-[0.76rem] text-gelo bg-profundo/60 backdrop-blur-sm tracking-wide transition-all duration-300 hover:border-celeste/55 hover:bg-medio/60 hover:-translate-y-[3px]">
      <span className="size-[5px] rounded-full bg-acento shrink-0" />
      {label}
    </div>
  );
}
