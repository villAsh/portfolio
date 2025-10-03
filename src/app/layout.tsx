import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vilas Chauvhan",
  description: "Home page of Vilas Chauvhan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
