export function AppearanceVanityGlassCard({
  title,
  items,
  className = "",
  variant = "desktop",
}: {
  title: string;
  items: readonly string[];
  className?: string;
  variant?: "scroll" | "desktop";
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.22)] ${
        variant === "scroll"
          ? "h-full min-h-[340px] w-full md:min-h-[380px] md:w-[440px]"
          : "h-[400px] w-[440px]"
      } ${className}`}
    >
      <div
        aria-hidden
        className="liquid-glass-backdrop pointer-events-none absolute inset-0 rounded-2xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.08),inset_1px_0_0_rgba(255,255,255,0.06)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] -top-[35%] h-[75%] w-[60%] rotate-12 rounded-full bg-gradient-to-br from-white/35 via-white/10 to-transparent blur-2xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[25%] -left-[10%] h-[55%] w-[50%] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <h3 className="text-base font-normal leading-snug tracking-tight text-white drop-shadow-sm sm:text-[32px]">
          {title}
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-[14px] font-medium leading-snug text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
