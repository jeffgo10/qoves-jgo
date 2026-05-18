export const CONSIDER_ITEMS = [
  "First impressions matter",
  "It has a considerable impact on interpersonal interactions",
  "Small improvements can drastically impact quality of life",
] as const;

export const APPROACH_ITEMS = [
  "Not chasing unrealistic standards",
  "Not trying to look like someone else",
  "Not seeking perfection",
  "Aiming only for a better version of yourself",
] as const;

export const GLASS_CARDS = [
  {
    title: "Consider this...",
    items: CONSIDER_ITEMS,
    desktopClassName:
      "lg:absolute lg:left-10 lg:top-[5%] xl:left-14 lg:z-11",
  },
  {
    title: "The key is approaching it intelligently",
    items: APPROACH_ITEMS,
    desktopClassName:
      "lg:absolute lg:bottom-[5%] lg:right-10 lg:ml-auto xl:right-14 lg:z-11",
  },
] as const;
