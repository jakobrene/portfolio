import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4, Space_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} — Strategy & Operations`,
  description: profile.lede,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSerif.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
