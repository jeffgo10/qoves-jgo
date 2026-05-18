import Image from "next/image";
import { FacialAnalysisChartGroup } from "@/components/facial-analysis/chart-group";
import { CHARTS, STACK_COLUMN, STACK_COLUMN_2 } from "@/data/facial-analysis-hero";

export function FacialAnalysisHeroSection() {
  return (
    <section className="w-full text-white">
      <div className="w-full border-b border-[#E4E7E9] bg-[linear-gradient(90deg,#8fa39e_0%,#b4b5af_42%,#c8c9c3_50%,#b4b5af_58%,#8fa39e_100%)]">
        <div className="relative mx-auto min-h-[763px] w-full overflow-visible pb-0 md:min-h-[900px] lg:h-[832px] lg:min-h-0 lg:w-[1360px] lg:border-l lg:border-r lg:border-[#E4E7E9]">
          <div className="relative z-10 flex flex-col items-center gap-4 px-4 pt-8 text-center sm:px-6 md:px-8 md:py-10">
            <p className="rounded-full border border-[#C7D1D5] px-1.5 py-0.25 font-mono text-[11px] font-normal uppercase text-white/90">
              Personalized Aesthetics
            </p>
            <h2 className="text-balance text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]">
              Your complete{" "}
              <span className="font-normal text-white/85">facial analysis</span>
            </h2>
            <p className="max-w-[420px] text-pretty text-base leading-relaxed text-white/80 sm:text-[16px]">
              Every face is unique. We analyze over 160 aspects of your face to
              understand your personal facial aesthetics.
            </p>
          </div>

          <div className="relative z-0 mx-auto min-h-[588px] w-full sm:min-h-[662px] lg:h-[594px]">
            <div
              className="pointer-events-none absolute inset-x-0 top-6 z-10 flex items-start justify-between px-2 sm:top-10 sm:px-4 md:px-6 lg:-left-[90px] lg:-right-[120px] md:top-[0] lg:top-[100px] lg:items-end lg:px-0"
              aria-hidden
            >
              <FacialAnalysisChartGroup
                tall={CHARTS.grid}
                stacked={[CHARTS.bellCurve, CHARTS.lipSmoothness]}
                mobileOrder="stacked-first"
              />

              <FacialAnalysisChartGroup
                tall={CHARTS.melanin}
                stacked={[CHARTS.facialThirds, CHARTS.facialTissue]}
                stackType={STACK_COLUMN_2}
                mobileOrder="tall-first"
              />
            </div>

            <div className="absolute inset-x-0 z-20 md:h-[762px] w-full overflow-visible bottom-0 lg:left-1/2 md:bottom-0 lg:top-[-140px] lg:h-[734px] lg:w-[732px] lg:-translate-x-1/2 md:overflow-hidden">
              <Image
                src="/images/lady-facial-analysis.png"
                alt="Woman facing forward for facial analysis"
                width={1334}
                height={2000}
                className="h-auto w-full object-contain object-center lg:object-bottom"
                sizes="(max-width: 1024px) 100vw, 732px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
