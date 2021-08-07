import React from 'react';

// import { Movie } from '../../API';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { MovieState } from '../../hooks/useMovieFetch';
import NoImage from '../../images/no-image-movie.jpg';
import Thumb from '../Thumb/Thumb';
import { Content, Text, Wrapper } from './MovieInfo.styles';

type MovieInfoProps = {
  movie: MovieState;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  console.log(movie);
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie?.directors?.length > 1 ? 'S' : ''}</h3>
              {movie?.directors?.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
            <div className="genres">
              <h3>GENRES</h3>
              {movie?.genres?.map((genre) => (
                <div className="genre" key={genre.id}>
                  <span>{genre.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
