import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about works by Andreas Kopp or arrange a studio visit.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <PageHeader
        title="Contact"
        subtitle="To enquire about a work, arrange a studio visit, or discuss a commission."
      />
      <ContactSection />
    </div>
  );
}
