import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs",
  description: "A space where I experiment with new components, complex animations, and innovative web technologies.",
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
