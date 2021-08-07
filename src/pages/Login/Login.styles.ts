import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  color: var(--darkGrey);
  min-height: 95vh;

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 20px auto;
    padding: 20px;

    :focus {
      outline: none;
    }
  }
  .error {
    color: red;
  }
`;
