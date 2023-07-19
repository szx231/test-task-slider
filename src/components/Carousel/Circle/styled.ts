import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ICircleButton {
  isActive: boolean;
  describe: number;
  rotateBtn: string;
}

interface ICircleIndex {
  rotateIndex: string;
  isActive: boolean;
}

interface ICircleIndexNumber {
  isActive: boolean;
}

interface ICircleText {
  isActive: boolean;
}

export const CircleButton = styled.button<ICircleButton>`
  position: absolute;
  width: 2px;
  top: 0;
  left: 50%;
  height: 50%;
  transform: translateX(-50%);
  transform-origin: bottom left;
  background-color: transparent;
  border: none;
  will-change: transform;
  rotate: ${(props) => props.rotateBtn};
  cursor: pointer;
`;

export const CircleItem = styled.div`
  position: absolute;
  top: 0%;
  left: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIndex = styled.div<ICircleIndex>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(-50%, -50%, 0) rotate(${(props) => (+props.rotateIndex.replace('deg', '') + 30) * -1}deg);
  will-change: transform;
  width: ${(props) => (props.isActive ? '56px' : '6px')};
  height: ${(props) => (props.isActive ? '56px' : '6px')};
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.5);
  transition: overflow 0.6s ease-in-out, background-color 0.6s ease-in-out, height 0.6s ease-in-out,
    width 0.6s ease-in-out, transform 0.6s ease-in-out, transform-origin 0.6s ease-in-out;
  z-index: 200;
  rotate: ${(props) => (props.isActive ? '30deg' : '0deg')};
  transform-origin: ${(props) => (props.isActive ? 'bottom' : 'initial')};
  background-color: ${(props) => (props.isActive ? '#F4F5F9' : '#000')};
  overflow: ${(props) => (props.isActive ? 'none' : 'hidden')};
  color: black;
  &:hover {
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
    color: #000;
  }
`;

export const CircleIndexNumber = styled.div<ICircleIndexNumber>`
  rotate: ${(props) => (props.isActive ? '0deg' : '30deg')};
  font-weight: 400;
  color: ${(props) => (props.isActive ? '#42567a' : 'black')};
`;

export const CircleText = styled.div<ICircleText>`
  position: absolute;
  top: 75;
  left: calc(100% + 12px);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  will-change: opacity;
  transition: opacity 0.6s ease-in-out;
  pointer-events: none;
  font-weight: 600;
  color: #42567a;

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: all;
      opacity: 1;
      transition: opacity 0.6s 0.6s ease-in-out;
    `}
`;
