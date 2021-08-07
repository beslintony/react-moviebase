import styled from 'styled-components';

// type HeroImageProps = {
//   image: string;
// };

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
    var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .mySwiper {
    height: 100%;
    width: 100%;
    position: absolute;

    img {
      background-size: 100%, cover;
      height: 600px;
      height: 100%;
      width: 100vw;
      object-fit: cover;
      /* object-position: top; */
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--xl);

    @media screen and (max-width: 720px) {
      font-size: var(--l);
    }
  }

  p {
    font-size: var(--m);

    @media screen and (max-width: 720px) {
      font-size: var(--s);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
