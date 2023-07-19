import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper';
import 'swiper/css/pagination';
import { Card } from './Card';
import {
  Button,
  CurrentSlide,
  ButtonsWrap,
  CurrentSlideNavigation,
  ArrowImage,
  SliderNavigationWrapper,
  SwiperWrapper,
  AnimatedElement,
  PrevButtonSlider,
  NextButtonSlider,
  MobileTopLine,
} from './styled';
import 'swiper/css';
import 'swiper/css/navigation';

interface ISlider {
  sliderCounts: string;
  activeItem: string;
  activeSlide: number;
  decreaseRotate: () => void;
  increaseRotate: () => void;
  data: any;
  animate: boolean;
}

export const Slider: React.FC<ISlider> = ({
  sliderCounts,
  activeItem,
  activeSlide,
  decreaseRotate,
  increaseRotate,
  data,
  animate,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <SliderNavigationWrapper>
      <MobileTopLine />
      <PrevButtonSlider ref={(node) => setPrevEl(node)} />
      <NextButtonSlider ref={(node) => setNextEl(node)} />
      <CurrentSlideNavigation>
        <CurrentSlide>
          {sliderCounts}/{activeItem}
        </CurrentSlide>
        <ButtonsWrap>
          <Button disabled={activeSlide < 1} onClick={increaseRotate} isDisabled={activeSlide < 1}>
            <ArrowImage isDisabled={activeSlide < 1} />
          </Button>
          <Button
            disabled={activeSlide > 4}
            onClick={decreaseRotate}
            isDisabled={activeSlide > 4}
            style={{ rotate: '180deg' }}
          >
            <ArrowImage isDisabled={activeSlide > 4} />
          </Button>
        </ButtonsWrap>
      </CurrentSlideNavigation>
      <AnimatedElement animate={animate}>
        <Swiper
          modules={[Navigation, Scrollbar, Pagination]}
          spaceBetween={50}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          navigation={{ prevEl, nextEl }}
          pagination={window.innerWidth <= 375 ? { clickable: true } : false}
        >
          {data[activeSlide].card.map((item: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`${activeSlide}-${index}`}>
              <Card title={item.dateFact} description={item.description} isActiveSlide={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedElement>
    </SliderNavigationWrapper>
  );
};
