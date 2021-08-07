import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles';

type ThumbProps = {
  image: string;
  movieId?: number;
  clickable: boolean;
};

const Thumb: React.FC<ThumbProps> = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
};

export default Thumb;
