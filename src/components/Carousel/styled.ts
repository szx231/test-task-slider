import styled from '@emotion/styled';

interface ICarousel {
  readonly rotate: string;
}

export const CarouselCircle = styled.div<ICarousel>`
  width: 530px;
  height: 530px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  border-radius: 50%;
  transition: 0.6s ease-in-out;
  z-index: 10;
  height: 530px;
  max-width: 530px;
  margin: 0 auto;
  transform: rotate(${(props) => props.rotate});

  @media (max-width: 390px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  transition: 0.6s ease-in-out;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
