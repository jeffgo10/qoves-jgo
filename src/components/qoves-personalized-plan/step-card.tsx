export function StepCard({ number, text }: { number: number; text: string }) {
  return (
    <article className="group relative flex h-full min-h-[148px] w-full flex-col justify-between rounded-2xl border border-[#E4E7E9] bg-white p-5 lg:min-h-[160px] lg:p-6">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7a8489] via-[#8b979d] to-[#a3b1b6] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        aria-hidden
      />

      <div
        className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#9AAEB5] font-mono text-sm text-white transition-colors duration-300 ease-out group-hover:bg-white/25"
        aria-hidden
      >
        {number}
      </div>

      <p className="relative z-10 mt-auto max-w-[200px] pt-8 text-sm font-normal leading-snug text-[#515255] transition-colors duration-300 ease-out group-hover:text-white lg:text-[18px]">
        {text}
      </p>
    </article>
  );
}
