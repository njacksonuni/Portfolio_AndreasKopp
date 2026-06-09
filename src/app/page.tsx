import HeroSection from "@/components/hero/HeroSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Link from "next/link";
import { artworks } from "@/lib/artworks";

export default function HomePage() {
  const featured = artworks.filter((a) => a.featured);

  return (
    <>
      <HeroSection />

      {/* Selected works preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-3">Selected Works</h2>
            <div className="w-8 h-px bg-blue" />
          </div>
          <Link
            href="/gallery"
            className="text-xs tracking-[0.2em] uppercase text-blue hover:text-blue-soft transition-colors hidden sm:block"
          >
            View all works →
          </Link>
        </div>

        <GalleryGrid artworks={featured} />

        <div className="text-center mt-12 sm:hidden">
          <Link
            href="/gallery"
            className="text-xs tracking-[0.2em] uppercase text-blue hover:text-blue-soft transition-colors"
          >
            View all works →
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-paper py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic mb-8">
            &ldquo;A practice spanning painting, installation, and sculpture &mdash; shown across Europe, the United States, and Japan.&rdquo;
          </p>
          <div className="w-8 h-px bg-blue mx-auto mb-8" />
          <Link
            href="/about"
            className="text-xs tracking-[0.25em] uppercase text-blue hover:text-blue-soft transition-colors"
          >
            About the artist →
          </Link>
        </div>
      </section>
    </>
  );
}
