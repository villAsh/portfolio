import Header from "@/components/page/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my professional resume, detailing my experience as a Software Engineer.",
};

export default function ResumePage() {
  return (
    <main className="mt-20 max-w-4xl mx-auto w-full pb-16 px-4 md:px-10 h-screen flex flex-col">
      <section className="mb-8">
        <Header
          subTitle="Professional Profile"
          title="Resume"
          description="A detailed overview of my professional experience, skills, and academic background."
        />
      </section>

      <div className="flex-1 w-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
        <iframe
          src="/vilas-chauvhan-resume.pdf#toolbar=0"
          className="w-full h-full border-none p-5"
          title="Resume PDF"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="/vilas-chauvhan-resume.pdf"
          download
          className="px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Download PDF
        </a>
      </div>
    </main>
  );
}
