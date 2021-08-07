import { useEffect, useState } from 'react';

import API, { Movie } from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [topMoviesState, setTopMoviesState] = useState(initialState);

  const fetchMovies = async (page: number, searchTerm: string = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);
      setState((prev) => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
      const movieCarousel = await API.fetchNowPlayingMovies('', 1);
      console.log(movieCarousel);
      setTopMoviesState(movieCarousel);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState?.results > 1) {
        console.log('fetching from sessionstorage');
        setState(sessionState);
        return;
      }
    }

    console.log('fetching from api');
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(Number(state.page) + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    searchTerm,
    topMoviesState,
    setSearchTerm,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
