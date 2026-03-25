export function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="14"
        y1="3"
        x2="14"
        y2="25"
        stroke="#B8D4EE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="10"
        x2="23"
        y2="10"
        stroke="#B8D4EE"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
