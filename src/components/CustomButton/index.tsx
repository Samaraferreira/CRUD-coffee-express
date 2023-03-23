import React from 'react';
import { IconType } from 'react-icons';
import { CustomButton } from './styles';

interface IButtonProps {
  onClickAction: () => void
  text: string
  icon: IconType
}

const Button: React.FC<IButtonProps> = ({ onClickAction, text, icon }) => (
  <CustomButton type="button" onClick={onClickAction}>
    <div className="text">{text}</div>
    <div className="icon">
      {icon}
    </div>
  </CustomButton>
);

export default Button;
