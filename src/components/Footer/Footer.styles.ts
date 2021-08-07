import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1d2124;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  height: auto;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    padding-right: 200px;
    @media screen and (max-width: 360px) {
      padding-right: 0;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: white;
    @media screen and (max-width: 500px) {
      font-weight: 300;
      font-size: 12px;
    }
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

export const CopyrightText = styled.small`
  font-size: 12px;
  color: var(--lightGrey);
`;
