import { IntroducingVideoFeatureCard } from "@/components/introducing-video/feature-card";
import { FEATURE_CARDS } from "@/data/introducing-video";

export function IntroducingVideoSection() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Full-bleed video */}
        <div className="absolute inset-0" aria-hidden>
          <video
            src="/vids/landing-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div
            className="absolute inset-x-0 bottom-0 h-[58%] backdrop-blur-[20px] sm:backdrop-blur-[28px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, black 35%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 35%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#2f383b]/55 via-[#2f383b]/20 to-transparent" />
        </div>

        {/* Inner container */}
        <div className="relative mx-auto flex min-h-[min(100vh,860px)] w-full min-w-0 flex-col md:min-h-[820px] lg:w-[1360px] lg:border-l lg:border-r lg:border-white/25">
          <div className="relative flex min-h-[min(100vh,860px)] flex-1 flex-col md:min-h-[820px]">
            <div className="relative flex min-h-[min(100vh,860px)] flex-1 flex-col justify-end items-center lg:items-start lg:justify-between p-5 sm:p-6 md:min-h-[820px] md:p-8 md:pb-10">
              <p className="w-fit mb-8 rounded-full bg-white/10 px-1.5 py-0.25 font-mono text-[11px] leading-[18px] font-normal uppercase text-white/90 backdrop-blur-sm">
                Backed by 2000+ research papers
              </p>

              <div className="flex flex-col justify-center md:max-w-[520px]">
                <h2 className="text-balance text-3xl font-normal leading-tight tracking-tight text-white text-center lg:text-left sm:text-4xl md:text-5xl md:leading-[1.1]">
                  Will analyzing my face
                  <br />
                  <span className="text-white/85">
                    make me insecure?
                  </span>
                </h2>
                <p className="mt-5 max-w-[420px] text-pretty text-base leading-relaxed text-white/85 text-center lg:text-left sm:text-[16px]">
                  Most insecurity comes from uncertainty—not knowing if your
                  concerns are real or imagined. When you&apos;re guessing about
                  your appearance, your mind often makes things seem worse than they
                  are.
                </p>
              </div>
            </div>

            <div className="mt-auto w-full min-w-0 border-t border-white/25">
              <div className="flex w-full min-w-0 touch-pan-x items-stretch snap-x snap-mandatory overflow-x-auto overscroll-x-contain lg:overflow-visible lg:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {FEATURE_CARDS.map((card, i) => (
                  <div
                    key={card.title}
                    className={`flex w-[min(78vw,300px)] shrink-0 snap-start border-r border-white/25 p-3 md:w-[min(58vw,360px)] lg:w-[min(48vw,380px)] lg:w-auto lg:flex-1 lg:shrink ${
                      i === FEATURE_CARDS.length - 1 ? "border-r-0" : ""
                    }`}
                  >
                    <IntroducingVideoFeatureCard {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
