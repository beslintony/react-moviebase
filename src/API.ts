import {
  API_KEY,
  API_URL,
  GENRE_URL,
  LATEST_BASE_URL,
  LOGIN_URL,
  NOW_PLAYING_BASE_URL,
  POPULAR_BASE_URL,
  REQUEST_TOKEN_URL,
  SEARCH_BASE_URL,
  SESSION_ID_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

//Types
export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  genres?: Genres;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  homepage?: string;
  imdb_id?: string;
  production_companies?: ProdctionCompanies;
};

export type ProdctionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country?: string;
}[];

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  original_name?: string;
  profile_path?: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: string;
};
export type Genres = {
  id?: number;
  name: string;
}[];

const apiSettings = {
  fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint: string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchLatestMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint: string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${LATEST_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchNowPlayingMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint: string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${NOW_PLAYING_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchGenres: async (): Promise<Genres> => {
    const creditsEndpoint: string = `${GENRE_URL}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken: string, username: string, password: string) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId: number, movieId: number, value: string) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
