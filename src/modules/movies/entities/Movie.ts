import { Entity } from '@shared/core/entities/Entity';
import { ContentProps } from 'src/types/content';

export class Movie extends Entity<ContentProps> {
  static create(props: ContentProps, id?: string) {
    const movieProps: ContentProps = {
      title: props.title,
      banner: props.banner,
      cast: props.cast,
      directors: props.directors,
      genres: props.genres,
      media: props.media,
      description: props.description,
      poster: props.poster,
      rating: props.rating,
      globalRating: props.globalRating,
      releaseDate: props.releaseDate,
      shortDescription: props.shortDescription,
    };

    const movie = new Movie(movieProps, id);

    return movie;
  }

  get title() {
    return this.props.title;
  }

  get banner() {
    return this.props.banner;
  }

  get cast() {
    return this.props.cast;
  }

  get directors() {
    return this.props.directors;
  }

  get genres() {
    return this.props.genres;
  }

  get media() {
    return this.props.media;
  }

  get description() {
    return this.props.description;
  }

  get poster() {
    return this.props.poster;
  }

  get rating() {
    return this.props.rating;
  }

  get globalRating() {
    return this.props.globalRating;
  }

  get releaseDate() {
    return this.props.releaseDate;
  }

  get shortDescription() {
    return this.props.shortDescription;
  }
}
