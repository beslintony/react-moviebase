import React, { useEffect, useState } from 'react';

import { Movie } from '../API';
import { Grid, HeroImage, SearchBar, Spinner, Thumb } from '../components';
import Button from '../components/Button/Button';
import SliderList from '../components/SliderList/SliderList';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useHomeFetch } from '../hooks';
import NoImage from '../images/no-image-movie.jpg';

const initialCarouselState = [
  {
    id: 730840,
    image: '/3OwaKVZf3A2NdnarqKbwzFEhKir.jpg',
    title: 'Trollhunters: Rise of the Titans',
    text: 'Arcadia may look like an ordinary town, but it lies at the center of magical and mystical lines that makes it a nexus for many battles among otherworldly creatures, including trolls, aliens, and wizards. Now, various heroes will team-up in an epic adventure where they must fight the Arcane Order for control over the magic that binds them all together.',
  },
];
type iCarouselState = {
  id: number;
  image: string;
  title: string;
  text: string;
}[];

const Home = () => {
  const {
    state,
    error,
    loading,
    searchTerm,
    topMoviesState,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  if (error) return <div>Somethig went wrong</div>;

  const [carouselState, setCarouselState] =
    useState<iCarouselState>(initialCarouselState);

  useEffect(() => {
    const getRandom = (arr: Movie[], n: number) => {
      let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
      if (n > len) throw new RangeError('getRandom: more elements taken than available');
      while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }

      const op: { id: number; image: string; title: string; text: string }[] = result.map(
        ({ id, backdrop_path: image, original_title: title, overview: text }) => ({
          id,
          image,
          title,
          text,
        }),
      );
      console.log(op);

      setCarouselState(op);
    };
    if (!loading && topMoviesState.results.length > 1) {
      console.log(topMoviesState.results.length);
      getRandom(topMoviesState.results as [], 5);
      console.log(carouselState);
    }
  }, [loading, topMoviesState]);

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage carouselState={carouselState} loading={loading} />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <>
          <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map((movie) => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
              />
            ))}
          </Grid>
          {state.page < state.total_pages && !loading && (
            <Button text="See More" callback={() => setIsLoadingMore(true)} />
          )}
        </>
      ) : null}
      {!searchTerm && <SliderList title={'Latest Movies'} movieList={state.results} />}
      {loading && <Spinner />}
    </>
  );
};

export default Home;
