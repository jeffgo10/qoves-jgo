"use client";

import { StepCard } from "@/components/qoves-personalized-plan/step-card";
import { STEPS } from "@/data/step-cards";

export function StepCards() {
  return (
    <div className="flex items-stretch snap-x snap-mandatory overflow-x-auto lg:overflow-visible lg:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {STEPS.map((text, i) => (
        <div
          key={text}
          className={`flex w-[min(78vw,300px)] shrink-0 snap-start border-r border-[#E4E7E9] p-3 md:w-[min(42vw,320px)] lg:w-auto lg:flex-1 lg:shrink ${
            i === STEPS.length - 1 ? "border-r-0" : ""
          }`}
        >
          <StepCard number={i + 1} text={text} />
        </div>
      ))}
    </div>
  );
}
