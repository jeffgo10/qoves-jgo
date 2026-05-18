import {
  type ChartConfig,
  type MobileChartOrder,
  STACK_COLUMN,
  STACK_COLUMN_2,
} from "@/data/facial-analysis-hero";

import { FacialAnalysisChartPanel } from "@/components/facial-analysis/chart-panel";

export function FacialAnalysisChartGroup({
  tall,
  stacked,
  stackType = STACK_COLUMN,
  mobileOrder = "stacked-first",
}: {
  tall: ChartConfig;
  stacked: [ChartConfig, ChartConfig];
  stackType?: typeof STACK_COLUMN | typeof STACK_COLUMN_2;
  mobileOrder?: MobileChartOrder;
}) {
  const mobileCharts =
    mobileOrder === "tall-first"
      ? [tall, stacked[0], stacked[1]]
      : [stacked[0], stacked[1], tall];

  return (
    <>
      <div className="flex w-[min(30vw,118px)] flex-col gap-1.5 sm:w-[140px] sm:gap-2 md:w-[250px] lg:hidden">
        {mobileCharts.map((chart) => (
          <FacialAnalysisChartPanel key={chart.src} {...chart} />
        ))}
      </div>

      <div className="hidden gap-3 lg:flex lg:gap-4">
        <FacialAnalysisChartPanel {...tall} />
        <div className={stackType}>
          <FacialAnalysisChartPanel {...stacked[0]} />
          <FacialAnalysisChartPanel {...stacked[1]} />
        </div>
      </div>
    </>
  );
}
