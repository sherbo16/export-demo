export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="lgg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F5C518" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <path
          d="M16 4 L20 14 L30 16 L20 18 L16 28 L12 18 L2 16 L12 14 Z"
          fill="url(#lgg)"
          opacity="0.9"
        />
        <circle cx="16" cy="16" r="2.4" fill="#0A0F1C" />
      </svg>
      <span className="text-gradient-brand text-base font-bold tracking-tight sm:text-lg">
        OceanHarvest Exports
      </span>
    </div>
  );
}
