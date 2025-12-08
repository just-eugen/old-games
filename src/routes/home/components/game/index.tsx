import { FC } from 'react';
import { TGameProps } from './types';
import { Container, StyledH2 } from './styled';

export const Game: FC<TGameProps> = ({ name, description }) => {
  return (
    <Container>
      <StyledH2>{name}</StyledH2>
      {description}
    </Container>
  );
};
