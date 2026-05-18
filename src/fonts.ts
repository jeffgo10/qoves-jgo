import localFont from "next/font/local";

const ppNeueMontreal = localFont({
  src: [
    { path: "../public/fonts/PPNeueMontreal-Book.otf", weight: "400" },
    { path: "../public/fonts/PPNeueMontreal-Medium.otf", weight: "500" },
  ],
  display: "swap",
  variable: "--font-pp-neue",
});

const f37Zagma = localFont({
  src: "../public/fonts/F37ZagmaMonoTrial-Book.otf",
  display: "swap",
  variable: "--font-zagma",
});

export const fontClassName = [ppNeueMontreal.variable, f37Zagma.variable].join(" ");
