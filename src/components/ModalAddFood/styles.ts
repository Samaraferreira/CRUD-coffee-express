import styled, { keyframes } from 'styled-components';
import { Form as Unform } from '@unform/web';

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Form = styled(Unform)`
  position: fixed;
  z-index: 99;
  right: 0;
  top: 0;

  width: 580px;
  height: 100vh;
  padding: 64px 48px;

  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(116, 116, 122, 0.53);

  animation: ${animation} 0.8s;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h1 {
      color: #000;
      font-weight: 600;
      font-size: 36px;
    }

    svg {
      cursor: pointer;
    }
  }

  button {
    margin-top: 48px;
    width: 100%;
    height: 64px;

    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #000;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .text {
      padding: 16px 24px;
    }

    svg {
      margin-left: 8px;
    }
  }
`;
