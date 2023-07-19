import React from 'react';
import { Container, LineLeft, LineRight, HorizontalRotate, Horizontal, GradientLine, Box } from './styled';

interface IMainLayout {
  children: React.ReactNode;
}

export const Mainlayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Container>
      <Box>
        <LineLeft />
        <LineRight />
        <HorizontalRotate />
        <Horizontal />
        <GradientLine />
        {children}
      </Box>
    </Container>
  );
};
