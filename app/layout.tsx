import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import PerformanceInit from "@/components/PerformanceInit";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Blessly Luison — CS Student & Web Developer",
  description:
    "CS Student · Web Developer · Building real projects and learning every day. Portfolio of Blessly Luison.",
  openGraph: {
    title: "Blessly Luison — CS Student & Web Developer",
    description:
      "CS Student · Web Developer · Building real projects and learning every day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body>
        <PerformanceInit />
        {children}
      </body>
    </html>
  );
}
