import Image from "next/image";

export function FacialAnalysisChartPanel({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className={className ?? ""}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full drop-shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
      />
    </div>
  );
}
