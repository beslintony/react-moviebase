import React from 'react';
import { useParams } from 'react-router-dom';

import { Actor, BreadCrumb, Grid, MovieInfo, MovieInfoBar, Spinner } from '../components';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import useMovieFetch from '../hooks/useMovieFetch';
import noImage from '../images/no-image.jpg';

const Movie: React.FC = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar movie={movie} />
      <Grid header="Actors">
        {movie?.actors?.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageURL={
              actor?.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor?.profile_path}`
                : noImage
            }
          />
        ))}
      </Grid>
      <div style={{ padding: '15px' }}></div>
    </>
  );
};

export default Movie;
