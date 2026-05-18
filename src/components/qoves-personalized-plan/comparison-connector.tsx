"use client";

import {
  CONNECTOR_PATH,
  LAP_DURATION_S,
  TRAIL_COUNT,
  TRAIL_SPACING,
  VIEWBOX,
} from "@/data/before-after-comparison";
import { useEffect, useRef, type MutableRefObject, type RefObject } from "react";

function wrapDistance(distance: number, pathLength: number) {
  return ((distance % pathLength) + pathLength) % pathLength;
}

function trailOpacity(index: number): number {
  const t = index / Math.max(TRAIL_COUNT - 1, 1);
  return Math.max(0, 1 - t ** 1.5);
}

type PathRunnerRefs = {
  trailRefs: MutableRefObject<(SVGRectElement | null)[]>;
  headRef: RefObject<SVGRectElement | null>;
};

function updatePathRunner(
  path: SVGPathElement,
  pathLength: number,
  progress: number,
  phaseOffset: number,
  { trailRefs, headRef }: PathRunnerRefs,
) {
  const runnerProgress = progress + phaseOffset;

  trailRefs.current.forEach((rect, index) => {
    if (!rect) return;

    const distance = wrapDistance(
      runnerProgress - index * TRAIL_SPACING,
      pathLength,
    );
    const point = path.getPointAtLength(distance);
    rect.setAttribute("transform", `translate(${point.x - 1}, ${point.y - 1})`);
    rect.setAttribute("fill-opacity", trailOpacity(index).toFixed(3));
  });

  const headPoint = path.getPointAtLength(wrapDistance(runnerProgress, pathLength));
  if (headRef.current) {
    headRef.current.setAttribute(
      "transform",
      `translate(${headPoint.x - 2.5}, ${headPoint.y - 2.5})`,
    );
  }
}

export function BeforeAfterComparisonConnector() {
  const pathRef = useRef<SVGPathElement>(null);
  const trailRefsA = useRef<(SVGRectElement | null)[]>([]);
  const headRefA = useRef<SVGRectElement>(null);
  const trailRefsB = useRef<(SVGRectElement | null)[]>([]);
  const headRefB = useRef<SVGRectElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    const halfPath = pathLength / 2;
    const speed = pathLength / (LAP_DURATION_S * 60);
    let frameId = 0;
    let progress = 0;

    const runnerA: PathRunnerRefs = { trailRefs: trailRefsA, headRef: headRefA };
    const runnerB: PathRunnerRefs = { trailRefs: trailRefsB, headRef: headRefB };

    const animate = () => {
      progress += speed;

      updatePathRunner(path, pathLength, progress, 0, runnerA);
      updatePathRunner(path, pathLength, progress, halfPath, runnerB);

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        ref={pathRef}
        d={CONNECTOR_PATH}
        stroke="#D7E5EB"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        fill="none"
      />

      {Array.from({ length: TRAIL_COUNT }, (_, index) => (
        <rect
          key={`trail-a-${index}`}
          ref={(node) => {
            trailRefsA.current[index] = node;
          }}
          width="2"
          height="2"
          rx="1"
          fill="#869AA1"
          fillOpacity={0}
        />
      ))}

      <rect ref={headRefA} width="5" height="5" rx="1" fill="#869AA1" />

      {Array.from({ length: TRAIL_COUNT }, (_, index) => (
        <rect
          key={`trail-b-${index}`}
          ref={(node) => {
            trailRefsB.current[index] = node;
          }}
          width="2"
          height="2"
          rx="1"
          fill="#869AA1"
          fillOpacity={0}
        />
      ))}

      <rect ref={headRefB} width="5" height="5" rx="1" fill="#869AA1" />
    </svg>
  );
}
