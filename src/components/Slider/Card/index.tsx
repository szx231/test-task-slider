import React, { FC } from 'react';
import { Container, CardTitle, CardDescription } from './styled';

interface ICard {
  title: string;
  description: string;
  isActiveSlide: boolean;
}

export const Card: FC<ICard> = ({ title, description, isActiveSlide }) => {
  return (
    <Container isActiveSlide={isActiveSlide}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Container>
  );
};
