import Image from "next/image";

import { type FeatureCard } from "@/data/introducing-video";

export function IntroducingVideoFeatureCard({
  image,
  title,
  description,
}: FeatureCard) {
  return (
    <article className="relative flex h-full min-h-[215px] w-full flex-col justify-between rounded-2xl bg-white/15 p-3 backdrop-blur-md sm:p-4 lg:min-h-[230px] lg:h-[230px]">
      <div className="relative w-[120px] shrink-0 overflow-hidden rounded-lg bg-white/10">
        <Image
          src={image}
          alt={title}
          width={120}
          height={82}
          className="h-auto w-[120px] object-cover"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-medium leading-snug text-white sm:text-[24px]">
          {title}
        </h3>
        <p className="mt-2 text-sm font-normal leading-snug text-white/80 sm:text-[14px]">
          {description}
        </p>
      </div>
    </article>
  );
}
