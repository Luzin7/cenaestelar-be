import { Entity } from '@shared/core/entities/Entity';
import { ContentProps } from 'src/types/content';

/**
 * The `Movie` class represents a movie in the application.
 */
export class Movie extends Entity<ContentProps> {
  /**
   * Creates and returns a new instance of `Movie` with the provided properties.
   * @param props Object containing the movie properties.
   * @param id (optional) ID of the movie.
   * @returns A new instance of `Movie`.
   */
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

  /**
   * Returns the title of the movie.
   */
  get title() {
    return this.props.title;
  }

  /**
   * Returns the banner URL of the movie.
   */
  get banner() {
    return this.props.banner;
  }

  /**
   * Returns the cast of the movie.
   */
  get cast() {
    return this.props.cast;
  }

  /**
   * Returns the directors of the movie.
   */
  get directors() {
    return this.props.directors;
  }

  /**
   * Returns the genres of the movie.
   */
  get genres() {
    return this.props.genres;
  }

  /**
   * Returns the media URL of the movie.
   */
  get media() {
    return this.props.media;
  }

  /**
   * Returns the description of the movie.
   */
  get description() {
    return this.props.description;
  }

  /**
   * Returns the poster URL of the movie.
   */
  get poster() {
    return this.props.poster;
  }

  /**
   * Returns the rating of the movie.
   */
  get rating() {
    return this.props.rating;
  }

  /**
   * Returns the global rating of the movie.
   */
  get globalRating() {
    return this.props.globalRating;
  }

  /**
   * Returns the release date of the movie.
   */
  get releaseDate() {
    return this.props.releaseDate;
  }

  /**
   * Returns the short description of the movie.
   */
  get shortDescription() {
    return this.props.shortDescription;
  }
}
