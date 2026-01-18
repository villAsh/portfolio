import type { Metadata } from "next";

export const siteConfig = {
  name: "Vilas Chauvhan",
  title: "Vilas Chauvhan | Software Engineer",
  description: "Software Engineer specializing in building premium web applications, high-frequency trading platforms, and high-quality mobile experiences.",
  url: "https://vilaschauvhan.dev", // Replace with your actual domain
  ogImage: "https://vilaschauvhan.dev/og-image.png",
  links: {
    twitter: "https://x.com/vilas_dev_x",
    github: "https://github.com/villAsh",
  },
};

export const seoMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Vilas Chauvhan",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Development",
    "TypeScript",
  ],
  authors: [
    {
      name: "Vilas Chauvhan",
      url: siteConfig.url,
    },
  ],
  creator: "Vilas Chauvhan",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
