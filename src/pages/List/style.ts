import styled from 'styled-components';

export const StyledList = styled.div`
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    p {
      font-size: 2.2rem;
      font-weight: 500;
    }
    button {
      width: 100px;
    }
  }
  .list-container {
    padding: 2rem 0;
    box-sizing: border-box;
    .list {
      border: 0.1rem solid #eee;
      padding: 2rem;
      &-title {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      &-name {
        margin-top: 1rem;
        flex-grow: 1;
      }
      .btn-container {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    }
  }
`;
