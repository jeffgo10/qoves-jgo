import type { Metadata } from "next";
import { fontClassName } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qoves",
  description: "This is a demo website of Qoves made by Jeffrey Go",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontClassName} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
