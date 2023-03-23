import styled from 'styled-components';

export const CustomButton = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #c72828;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;

  .text {
    padding: 16px 24px;
  }

  .icon {
    display: flex;
    padding: 16px 16px;
    background: #c52828;
    border-radius: 0 8px 8px 0;
    margin: 0 auto;
  }
`;
