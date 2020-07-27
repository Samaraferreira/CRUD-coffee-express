import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  & + div {
    margin-top: 8px;
  }

  label {
    color: #333;
  }
`;

export const InputBox = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  flex: 1;

  background: #f2f2f2;
  border: 1px solid #f5f5f5;
  color: #333;

  border-radius: 4px;
  padding: 16px 22px;
  width: 100%;
  font-size: 16px;

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    /* color: #333; */

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
