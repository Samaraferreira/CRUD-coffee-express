import styled from 'styled-components';

export const Container = styled.div`
  background: #2d2926;
  padding: 30px 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 20px 30px;
  }

  header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 200px;
    }

    @media (max-width: 500px) {
      img {
        width: 160px;
      }
    }
  }
`;
