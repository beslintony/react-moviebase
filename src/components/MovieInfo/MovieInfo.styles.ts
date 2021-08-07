import styled from 'styled-components';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

type MovieInfoProps = {
  backdrop: string;
};

export const Wrapper = styled.div<MovieInfoProps>`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  } ;
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 480px) {
      display: block;
      justify-content: center;
      align-items: center;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: var(--white);
    color: var(--darkGrey);
    border-radius: 50%;
    font-weight: bold;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;
  }
  .genres {
    margin: 0 0 0 40px;
  }
  .genre {
    display: inline-block;
    padding: 10px 5px;
    justify-content: baseline;

    //padding: 5px 5px;
  }

  p {
    margin: 0;
  }

  span {
    padding: 4px 10px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: yellowgreen;
    user-select: none;
    text-align: center;
    width: 100%;
    border-radius: 15px;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--l);
    }
  }
`;
