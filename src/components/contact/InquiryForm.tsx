"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending — wire up to Resend / Nodemailer later
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="bg-blue-pale border border-blue/20 p-8">
        <p className="font-serif text-lg text-ink mb-2">Thank you.</p>
        <p className="text-sm text-graphite">
          Your message has been received. Andreas Kopp will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-wider uppercase text-graphite mb-2" htmlFor="name">
            Name <span className="text-blue">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-line focus:outline-none focus:border-blue transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-graphite mb-2" htmlFor="email">
            Email <span className="text-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-line focus:outline-none focus:border-blue transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-graphite mb-2" htmlFor="artwork">
          Artwork of interest
        </label>
        <input
          id="artwork"
          name="artwork"
          type="text"
          className="w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/40 focus:outline-none focus:border-blue transition-colors"
          placeholder="Title or description (optional)"
        />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-graphite mb-2" htmlFor="message">
          Message <span className="text-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/40 focus:outline-none focus:border-blue transition-colors resize-none"
          placeholder="Your enquiry…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-xs tracking-[0.25em] uppercase bg-blue hover:bg-blue-soft text-white px-8 py-3 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
