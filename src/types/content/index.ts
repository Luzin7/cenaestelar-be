export interface ContentProps {
  title: string;
  poster: string | boolean | null;
  media: string | boolean | null;
  banner: string | boolean | null;
  rating: string;
  globalRating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: { id: number; name: string }[];
  cast: string[];
  directors: string[];
}
