import { AppearanceVanityGlassCard } from "@/components/appearance-vanity/glass-card";
import { AppearanceVanityLiquidGlassFilters } from "@/components/appearance-vanity/liquid-glass-filters";
import { VanitySectionBackground } from "@/components/appearance-vanity/section-background";
import { GLASS_CARDS } from "@/data/appearance-vanity";

export function AppearanceVanitySection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#888] min-h-[640px] lg:h-screen lg:min-h-[957px]">
      <AppearanceVanityLiquidGlassFilters />
      <VanitySectionBackground />

      <div className="relative z-10 mx-auto w-full lg:h-full lg:min-h-[957px] lg:w-[1360px] md:border-l md:border-r md:border-white/25">
        <div className="relative flex flex-col px-5 py-12 sm:px-8 sm:py-16 pt-50 md:pt-50 lg:block lg:min-h-[957px] lg:px-10 lg:py-20">
          <div className="text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:max-w-[640px] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <h2 className="text-balance text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.12]">
              Is it vain to care
              <br />
              <span className="text-white/90">about your appearance?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-pretty text-base leading-relaxed text-white/85 sm:text-[16px]">
              Many feel guilty about wanting to improve their looks, fearing it
              means they&apos;re insecure. But here&apos;s what research tells
              us: caring about appearance is natural. Like finances, and
              education, it&apos;s just another form of self-improvement.
            </p>
          </div>

          <div className="mt-8 w-full lg:hidden">
            <div className="flex items-stretch snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {GLASS_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className={`flex w-[min(85vw,380px)] shrink-0 snap-start ${
                    i === GLASS_CARDS.length - 1 ? "" : "pr-3"
                  }`}
                >
                  <AppearanceVanityGlassCard
                    title={card.title}
                    items={card.items}
                    variant="scroll"
                  />
                </div>
              ))}
            </div>
          </div>

          {GLASS_CARDS.map((card) => (
            <AppearanceVanityGlassCard
              key={card.title}
              title={card.title}
              items={card.items}
              variant="desktop"
              className={`hidden lg:flex ${card.desktopClassName}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
