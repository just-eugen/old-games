import { FC } from 'react';
import type { TGameProps } from './types';
import { Container, StyledTitle } from './styled';

export const Game: FC<TGameProps> = ({ name, description }) => {
  return (
    <Container>
      <StyledTitle>{name}</StyledTitle>
      {description ?? 'Нет описания'}
    </Container>
  );
};
