export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  src: string;
  alt: string;
  featured?: boolean;
}
