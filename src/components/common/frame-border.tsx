import type { CSSProperties } from "react";

interface FrameBorderProps {
  /** Spacer height in px on `lg` and up. Collapsed (`h-0`) below `lg`. */
  height?: number;
}

function FrameBorder({ height = 100 }: FrameBorderProps) {
  return (
    <div className="mx-auto flex flex-col items-center border-b border-[#E4E7E9]">
      <div
        className="h-0 w-full border-l border-r border-[#E4E7E9] lg:h-[var(--frame-border-height)] lg:w-[1360px]"
        style={{ "--frame-border-height": `${height}px` } as CSSProperties}
      />
    </div>
  );
}

export default FrameBorder;
