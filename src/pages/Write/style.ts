import styled from 'styled-components';

export const StyledWrite = styled.div`
  .inner {
    margin-top: 2rem;
  }
  input,
  textarea {
    width: 100%;
    border: 0.1rem solid #ccc;
    border-radius: 0.4rem;
    outline: none;
    padding: 1rem;
    box-sizing: border-box;
  }
  input {
    height: 4rem;
    margin-bottom: 1.5rem;
  }
  textarea {
    resize: none;
    height: 30rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    button {
      margin-top: 1rem;
      width: 100%;
      height: 4rem;
    }
  }
`;
