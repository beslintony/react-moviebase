import React from 'react';

import { Movie } from '../../API';
import { calcTime, convertMoney } from '../../helpers';
import { Content, Wrapper } from './MovieInfoBar.styles';

type MovieInfoBarProps = {
  movie: Movie;
};

const MovieInfoBar: React.FC<MovieInfoBarProps> = ({ movie }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running Time: {calcTime(movie.runtime)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(movie.budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(movie.revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
