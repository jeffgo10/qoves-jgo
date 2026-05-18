"use client";

import { useEffect, useRef } from "react";

export function VanitySectionBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const pauseAtStart = () => {
      video.currentTime = 0;
      video.pause();
    };

    if (video.readyState >= 1) {
      pauseAtStart();
    } else {
      video.addEventListener("loadeddata", pauseAtStart, { once: true });
    }
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      <video
        ref={videoRef}
        src="/vids/landing-video.mp4"
        muted
        playsInline
        preload="auto"
        className="h-full w-full scale-110 object-cover blur-[40px] sm:blur-[52px]"
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
