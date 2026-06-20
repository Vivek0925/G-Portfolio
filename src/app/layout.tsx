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
        className={`${anton.variable} ${fraunces.variable} ${inter.variable} ${mono.variable} font-body bg-paper text-ink antialiased relative`}
      >
        <GridGuides />
        <GrainOverlay />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
