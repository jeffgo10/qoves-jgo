export const CHARTS = {
  grid: {
    src: "/images/scatterplot-chart-2.png",
    alt: "Facial feature distribution grid",
    width: 285,
    height: 337,
    className: "w-full blur-[0] lg:w-[285px] lg:blur-[3px]",
  },
  bellCurve: {
    src: "/images/bell-curve-chart.png",
    alt: "Eyebrow density percentile chart",
    width: 284,
    height: 196,
    className: "w-full",
  },
  lipSmoothness: {
    src: "/images/half-blocks.png",
    alt: "Lip smoothness analysis",
    width: 285,
    height: 126,
    className: "w-full",
  },
  melanin: {
    src: "/images/scatterpot-chart-1.png",
    alt: "Eye melanin concentration scale",
    width: 282,
    height: 337,
    className: "w-full lg:w-[285px]",
  },
  facialThirds: {
    src: "/images/feature-container.png",
    alt: "Facial thirds proportions",
    width: 353,
    height: 166,
    className: "w-full blur-[0] lg:blur-[2px]",
  },
  facialTissue: {
    src: "/images/container.png",
    alt: "Facial tissue symmetry analysis",
    width: 286,
    height: 157,
    className: "w-full blur-[0] lg:w-[286px] lg:blur-[2px]",
  },
} as const;

export type ChartConfig = (typeof CHARTS)[keyof typeof CHARTS];

export type MobileChartOrder = "stacked-first" | "tall-first";

export const STACK_COLUMN =
  "flex w-[160px] flex-col justify-between sm:w-[190px] lg:w-[284px]";

export const STACK_COLUMN_2 =
  "flex w-[160px] flex-col justify-between sm:w-[190px] lg:w-[352px]";
