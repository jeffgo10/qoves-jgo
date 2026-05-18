"use client";

import { BeforeAfterComparisonConnector } from "@/components/qoves-personalized-plan/comparison-connector";
import { type ReactNode } from "react";

/** Wraps portrait cards; connector SVG fills this box and tracks card positions. */
export function BeforeAfterComparison({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full">
      <BeforeAfterComparisonConnector />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
