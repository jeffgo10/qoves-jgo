import FrameBorder from "@/components/common/frame-border";
import { BeforeAfterComparison } from "@/components/qoves-personalized-plan/before-after-comparison";
import { QovesPortraitCard } from "@/components/qoves-personalized-plan/portrait-card";
import { StepCards } from "@/components/qoves-personalized-plan/step-cards";

export function QovesPersonalizedPlanSection() {
  return (
    <section className="w-full bg-white text-[#1a1a1a]">
      <div className="mx-auto flex flex-col items-center border-b border-[#E4E7E9] personal-head py-8 md:py-0">
        <div className="flex flex-col items-center gap-4 border-l border-r border-[#E4E7E9] text-center md:px-8 md:py-10 lg:w-[1360px]">
          <p className="rounded-full border border-[#C7D1D5] px-1.5 py-0.25 font-mono text-[11px] font-normal uppercase text-[#9AAEB5] leading-[18px]">
            Personalized analysis
          </p>
          <h1 className="text-balance text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[1.1]">
            Get your personalised{" "}
            <span className="font-normal text-[#9AAEB5]">Qoves plan</span>
          </h1>
          <p className="max-w-[420px] text-pretty text-base leading-relaxed text-[#515255] sm:text-[16px]">
            Understand your facial features and start your glow-up today with a
            proven action plan, no plastic surgery needed.
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center border-b border-[#E4E7E9] before-after md:px-[30px]">
        <div className="w-full border-l border-r border-[#E4E7E9] lg:w-[1360px]">
          <div>
            <div className="relative overflow-hidden rounded-2xl bg-white lg:w-full">
              <BeforeAfterComparison>
                <div className="flex w-full flex-col items-center gap-4 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
                  <QovesPortraitCard
                    label="Before"
                    imageSrc="/images/before.png"
                  />
                  <QovesPortraitCard label="After" imageSrc="/images/after.png" />
                </div>
              </BeforeAfterComparison>
            </div>
          </div>
        </div>
      </div>

      <div className="steps mx-auto flex flex-col items-center border-b border-[#E4E7E9] md:px-[30px]">
        <div className="w-full border-l border-r border-[#E4E7E9] lg:w-[1360px]">
          <StepCards />
        </div>
      </div>
      <FrameBorder />
    </section>
  );
}
