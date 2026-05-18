export function AppearanceVanityLiquidGlassFilters() {
  return (
    <svg
      className="pointer-events-none absolute h-0 w-0"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="qoves-liquid-glass"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.014"
            numOctaves="2"
            seed="12"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.75" result="map" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
