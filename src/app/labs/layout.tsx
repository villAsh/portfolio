import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs | Vilas Chauvhan - Experimental UI Components & Animations",
  description:
    "Explore Vilas Chauvhan's experimental laboratory where cutting-edge UI components, complex animations, and innovative web technologies come to life. A showcase of creative experimentation with React, Framer Motion, and modern web development.",
  keywords: [
    "Vilas Chauvhan Labs",
    "UI Experiments",
    "Web Animations",
    "React Components",
    "Framer Motion Animations",
    "GSAP Experiments",
    "Creative Coding",
    "Interactive Design",
    "Web Development Experiments",
    "Frontend Innovation",
    "UI/UX Prototypes",
    "Animation Showcase",
    "Experimental Web Design",
  ],
  authors: [{ name: "Vilas Chauvhan" }],
  creator: "Vilas Chauvhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vilaschauvhan.vercel.app/labs",
    title: "Labs | Vilas Chauvhan - Experimental UI & Animations",
    description:
      "Explore experimental UI components, complex animations, and innovative web technologies. A creative laboratory for modern web development.",
    siteName: "Vilas Chauvhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs | Vilas Chauvhan - Experimental UI & Animations",
    description:
      "Explore experimental UI components, complex animations, and innovative web technologies.",
    creator: "@vilas_dev_x",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
