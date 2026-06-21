import type { Metadata } from "next";
import { Anton, Fraunces, Inter, Space_Mono } from "next/font/google";
// @ts-ignore: Allow side-effect CSS import in Next.js app directory
import "./globals.css";
import GrainOverlay from "@/components/ui/GrainOverlay";
import GridGuides from "@/components/ui/GridGuides";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek — Graphic Designer & Video Editor",
  description:
    "Vivek is a graphic designer and video editor crafting bold visual identities, motion edits, and the occasional line of code.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${fraunces.variable} ${inter.variable} ${mono.variable} font-body bg-paper text-ink antialiased relative overflow-x-hidden`}
      >
        <GridGuides />
        <GrainOverlay />

        {/* Top Glow */}
        <div className="pointer-events-none fixed left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-mustard/10 blur-[180px]" />

        {/* Bottom Glow */}
        <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-forest/20 blur-[220px]" />

        {/* Center Glow */}
        <div className="pointer-events-none fixed left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/10 blur-[180px]" />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
