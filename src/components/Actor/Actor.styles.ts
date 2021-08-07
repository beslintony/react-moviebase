import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  /* border-radius: 20px; */
  padding: 0px;
  text-align: center;
  border-radius: 50px;
  //justify-content: center;

  h3 {
    margin: 10px 0 0 0;
    color: var(--darkGrey);
  }
  p {
    margin: 5px 0;
    color: var(--mediumGrey);
    padding: 5px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 50px;
`;
