import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutContent from "@/components/about/AboutContent";
import CVList from "@/components/about/CVList";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography and CV of Andreas Kopp — contemporary artist, born in Amsterdam, founding dean of the St. Moritz Art Academy.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <PageHeader title="About" />
      <AboutContent />

      <div className="mt-24">
        <CVList />
      </div>
    </div>
  );
}
