import styled from 'styled-components';

export const Wrapper = styled.div`
  /* max-width: var(--maxWidth);
  margin: 20px auto;
  padding: 10px 20px;
  align-items: center;
  height: 450px;
  background: var(--white); */
  max-width: var(--maxWidth);
  margin: 20px auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  width: auto;
  height: auto;
  background: var(--mediumGrey);
  padding: 10px 10px;
  margin: 0 auto;
  border-radius: 20px;
  color: var(--white);

  @media screen and (max-width: 768px) {
    .mySwiper {
      width: 100%;
      height: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .swiper-container {
      width: auto;
      height: auto;
    }
  }
  /* @media screen and (min-width: 640px) {
    .swiper-container {
      width: 640px;
      height: auto;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
      height: auto;
    }
  } */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    padding: 10px 0 0 20px;
    font-size: var(--l);

    @media screen and (max-width: 768px) {
      h3 {
        font-size: var(--s);
      }
    }
  }
`;
