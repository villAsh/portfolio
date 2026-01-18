import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";

import { Schibsted_Grotesk } from "next/font/google";

import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata;

const grotesk = Schibsted_Grotesk({
  variable: "--grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

import { SmoothScroll } from "@/providers/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={grotesk.variable}>
      <body className={`antialiased ${grotesk.className}`}>
        <ThemeProvider
          defaultTheme="light"
          attribute={"class"}
          enableSystem={false}
        >
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
