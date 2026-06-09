import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { artworks } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Works by Andreas Kopp — painting, installation, and sculpture.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <PageHeader title="Gallery" subtitle="Selected works" />
      <GalleryGrid artworks={artworks} />
    </div>
  );
}
