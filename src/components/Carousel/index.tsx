import React, { FC, useCallback } from 'react';
import { Circle } from './Circle';
import { CarouselCircle, CarouselWrapper } from './styled';
import { TitleDate } from '../TitleDate';

interface ICarousel {
  CIRCLE_COUNT: number;
  carouselRotate: number;
  currentEl: (index: number) => void;
  activeSlide: number;
  data: any;
}

export const Carousel: FC<ICarousel> = ({ CIRCLE_COUNT, carouselRotate, currentEl, activeSlide, data }) => {
  const createCarousel = useCallback(() => {
    return Array.from({ length: CIRCLE_COUNT }, (_, index) => {
      return `${index * (360 / CIRCLE_COUNT)}deg`;
    });
  }, [CIRCLE_COUNT]);

  return (
    <CarouselWrapper>
      <TitleDate title1={data[activeSlide].titleDate[0]} title2={data[activeSlide].titleDate[1]} />
      <CarouselCircle rotate={`${carouselRotate}deg`}>
        {createCarousel().map((el, index) => (
          <Circle
            fn={() => currentEl(index)}
            key={el}
            describe={index + 1}
            rotateIndex={`${index * (360 / CIRCLE_COUNT) + carouselRotate}deg`}
            isActive={index === activeSlide}
            rotateBtn={`${index * (360 / CIRCLE_COUNT)}deg`}
            description={data[index].subject}
          />
        ))}
      </CarouselCircle>
    </CarouselWrapper>
  );
};
