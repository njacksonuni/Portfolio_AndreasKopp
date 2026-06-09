import InstagramLink from "@/components/ui/InstagramLink";
import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-16">
      {/* Left column */}
      <div className="lg:w-72 flex-shrink-0 space-y-6">
        <div>
          <h2 className="font-serif text-2xl text-ink mb-4">Get in touch</h2>
          <p className="text-sm text-graphite leading-relaxed">
            To enquire about a work, arrange a studio visit, or discuss a
            commission, please use the form or reach out via Instagram.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-wider uppercase text-graphite mb-3">Follow</p>
          <InstagramLink handle="andreaskopp" />
        </div>

        <div className="pt-4 border-t border-line">
          <p className="text-xs text-graphite leading-relaxed">
            Responses typically within 3–5 business days.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1">
        <InquiryForm />
      </div>
    </div>
  );
}
