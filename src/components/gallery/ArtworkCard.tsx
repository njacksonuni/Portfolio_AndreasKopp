import Image from "next/image";
import { Artwork } from "@/types/artwork";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper mb-4">
        <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-base text-ink">{artwork.title}</h3>
        <p className="text-xs text-graphite">
          {artwork.year} &mdash; {artwork.medium}
        </p>
        <p className="text-xs text-graphite">{artwork.dimensions}</p>
      </div>
    </article>
  );
}
