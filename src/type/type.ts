export type NumberProps ={
    number: number;
}
export interface Video {
  key: string;
}
export type MovieSearch = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  }
  
 export interface MovieState {
    items: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
 export const initialState: MovieState = {
    items: [],
    status: 'idle',
    error: null,

   
  };


  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Video {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
  }
  export interface MovieDetail {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    genres: Genre[];
    vote_count: number
    release_date: string;
    videos?:  Video[];
  }

  export interface DetailMovieState {
    movieDetails: MovieDetail | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export interface CardProps {
    type: 'movie' | 'series';
    showReview?: boolean;
  }
  
  export interface Series {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
  }
  
  export type SeriesState = {
    items: Series[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

  export interface MovieState {
    items: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  
  export interface Movie {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    vote_average: number;
  
  }
  
  export interface Series {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    vote_average: number;
  
  }
  

  