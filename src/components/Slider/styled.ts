import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

interface IButton {
  isDisabled: boolean;
}

interface IAnimate {
  animate: boolean;
}

interface IArrowImage {
  isDisabled: boolean;
}

export const Container = styled.section`
  max-width: 1480px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SliderNavigationWrapper = styled.div`
  position: absolute;
  top: 70%;
  width: 90%;
`;

export const Button = styled.button<IButton>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${(props) => (props.isDisabled ? '1px solid rgba(66, 86, 122, 0.1);' : '1px solid rgba(66, 86, 122, 0.5);')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

export const MobileTopLine = styled.div`
  height: 1px;
  background-color: #c7cdd9;
  width: 100%;
  margin-bottom: 20px;
  display: none;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const ArrowImage = styled.div<IArrowImage>`
  width: 10px;
  height: 14px;
  mask-image: url('/arrowGrey.svg');
  mask-repeat: no-repeat;
  mask-position: center center;
  background-color: ${(props) => (props.isDisabled ? 'rgba(66, 86, 122, 0.1);' : 'rgba(66, 86, 122, 0.5);')};

  @media (max-width: 375px) {
    width: 10px;
    height: 7px;
  }
`;

export const CurrentSlide = styled.div`
  color: rgba(66, 86, 122, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`;

export const SwiperWrapper = styled.div``;

const slideIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`;

export const AnimatedElement = styled.div<IAnimate>`
  /* color: '#000';
  height: 'auto';
  position: absolute;
  top: 80%; */
  animation: ${(props) =>
    props.animate &&
    css`
      ${slideIn} 600ms ease-in-out forwards;
    `};
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const CurrentSlideNavigation = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 56px;

  @media (max-width: 375px) {
    position: absolute;
    top: 100%;
    padding: 50px 0px 25px 0px;
  }
`;

export const PrevButtonSlider = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  transform: rotate(180deg);
  border-radius: 50%;
  background-image: url('/arrowBlue.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
  position: absolute;
  left: -50px;
  top: 115%;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const NextButtonSlider = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  border-radius: 50%;
  background-image: url('/arrowBlue.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
  position: absolute;
  left: calc(100% + 1 * (100vw / 1480));
  top: 115%;

  @media (max-width: 375px) {
    display: none;
  }
`;
