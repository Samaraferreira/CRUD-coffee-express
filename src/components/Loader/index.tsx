import React from 'react';

import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <div className="dot" />
    </Container>
  );
};

export default Loader;
