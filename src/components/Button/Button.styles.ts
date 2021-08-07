import styled from 'styled-components';

const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--l);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export default Wrapper;
