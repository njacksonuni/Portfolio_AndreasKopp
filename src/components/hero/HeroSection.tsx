import Link from "next/link";
import OGLCanvas from "./OGLCanvas";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <OGLCanvas />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-graphite mb-6">
          Contemporary Artist
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[96px] text-ink leading-none tracking-tight mb-8">
          Andreas Kopp
        </h1>
        <div className="w-12 h-px bg-blue mx-auto mb-8" />
        <Link
          href="/gallery"
          className="inline-block text-xs tracking-[0.25em] uppercase text-blue hover:text-blue-soft border border-blue hover:border-blue-soft px-8 py-3 transition-colors"
        >
          View Works
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs tracking-[0.2em] uppercase text-graphite">Scroll</span>
        <div className="w-px h-8 bg-line" />
      </div>
    </section>
  );
}
