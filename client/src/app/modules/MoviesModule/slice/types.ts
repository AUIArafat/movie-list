export interface MoviesState {
  submit: boolean;
  movies: MovieData[] | null;
}

export interface MovieData {
  _id?: string;
  title: string;
  rating: string;
  releaseDate: Date;
  category: string;
  posterPath: string;
  isFavorite: boolean;
}
