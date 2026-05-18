import Image from "next/image";

export function QovesPortraitCard({
  label,
  imageSrc,
  imageClassName,
}: {
  label: string;
  imageSrc: string;
  imageClassName?: string;
}) {
  return (
    <div className="relative w-full max-w-[430px] lg:w-[430px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-[#AEC2C9]">
        <Image
          src={imageSrc}
          alt={`${label} portrait`}
          fill
          sizes="(max-width: 1024px) 85vw, 430px"
          className={`object-cover object-top pt-[30px] ${imageClassName ?? ""}`}
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-3">
          <span className="font-mono text-[16px] font-normal uppercase text-white drop-shadow-md">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
