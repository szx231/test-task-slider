import React from 'react';
import { CircleButton, CircleItem, CircleIndex, CircleText, CircleIndexNumber } from './styled';

interface ICircle {
  describe: number;
  rotateIndex: string;
  isActive: boolean;
  fn: () => void;
  rotateBtn: string;
  description: string;
}

export const Circle: React.FC<ICircle> = ({ describe, rotateIndex, isActive, fn, rotateBtn, description }) => {
  return (
    <CircleButton rotateBtn={rotateBtn} onClick={fn} isActive={isActive} describe={describe}>
      <CircleItem>
        <CircleIndex isActive={isActive} rotateIndex={rotateIndex}>
          <CircleIndexNumber isActive={isActive}>{describe}</CircleIndexNumber>
          <CircleText isActive={isActive}>{description}</CircleText>
        </CircleIndex>
      </CircleItem>
    </CircleButton>
  );
};
