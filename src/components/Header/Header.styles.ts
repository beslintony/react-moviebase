import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
  h1 {
    color: yellowgreen;
    font-weight: 800;
    font-size: 20px;
    @media screen and (max-width: 500px) {
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding-left: 2rem;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
