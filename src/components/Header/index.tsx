import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

import Logo from '../../assets/logo.png';
import CustomButton from '../CustomButton';

interface IHeaderProps {
  openModal: () => void;
  text: string
  icon: IconType
}

const Header: React.FC<IHeaderProps> = ({ openModal, text, icon }) => (
  <Container>
    <header>
      <img src={Logo} alt="GoRestaurant" />
      <nav>
        <div>
          <CustomButton text={text} onClickAction={openModal} icon={icon} />
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
