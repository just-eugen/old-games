import { FC } from 'react';
import { TButtonProps } from './types';
import { Container, StyledButton } from './styled';

export const Button: FC<TButtonProps> = ({ text, onClick }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </Container>
  );
};
