export const FEATURE_CARDS = [
  {
    image: "/images/img1.png",
    title: "Lifestyle factors",
    description: "Considers diet, climate, stress, sleep, and habits.",
  },
  {
    image: "/images/img2.png",
    title: "Cultural beauty standards",
    description: "Adapts to regional and societal ideals.",
  },
  {
    image: "/images/img3.png",
    title: "Genetic factors",
    description:
      "Takes into account genetic factors and how they might impact your facial aesthetics.",
  },
] as const;

export type FeatureCard = (typeof FEATURE_CARDS)[number];
