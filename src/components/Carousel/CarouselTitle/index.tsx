import React from 'react';
import { Title } from './styled';

interface ICarouselTitle {
  text: string;
}

export const CarouselTitle: React.FC<ICarouselTitle> = ({ text }) => {
  return <Title>{text}</Title>;
};
