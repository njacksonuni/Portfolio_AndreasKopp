import { Artwork } from "@/types/artwork";
import ArtworkCard from "./ArtworkCard";

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
