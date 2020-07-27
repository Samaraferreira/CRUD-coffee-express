import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16%;
  animation-delay: 1s;

  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;
    background: rgba(45, 41, 38, 0.73);

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: ${wave} 1s ease-out infinite;
    }
  }
`;
