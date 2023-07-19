import React, { memo, useEffect, useState, useRef } from 'react';
import { Container, Date1, Date2 } from './styled';

interface ICircle {
  title1: string;
  title2: string;
}

const updateDateValue = (
  intervalRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
  valueRef: React.MutableRefObject<number>,
  targetValue: number,
  updateState: (value: string) => void,
  delay: number,
) => {
  if (valueRef.current === targetValue) {
    clearInterval(intervalRef.current!);
    return;
  }

  intervalRef.current = setInterval(() => {
    valueRef.current += valueRef.current < targetValue ? 1 : -1;
    updateState(valueRef.current.toString());
  }, delay);

  // eslint-disable-next-line consistent-return
  return () => {
    clearInterval(intervalRef.current!);
  };
};

export const TitleDate: React.FC<ICircle> = memo(({ title1, title2 }) => {
  const [firstDate, setFirstDate] = useState<string>(title1);
  const [secondDate, setSecondDate] = useState<string>(title2);
  const intervalRefFirstDate = useRef<ReturnType<typeof setTimeout> | null>(null);
  const valueRefFirstDate = useRef<number>(+title1);
  const intervalRefSecondDate = useRef<ReturnType<typeof setTimeout> | null>(null);
  const valueRefSecondDate = useRef<number>(+title2);

  useEffect(() => {
    return updateDateValue(intervalRefFirstDate, valueRefFirstDate, +title1, setFirstDate, 6);
  }, [title1, firstDate]);

  useEffect(() => {
    return updateDateValue(intervalRefSecondDate, valueRefSecondDate, +title2, setSecondDate, 6);
  }, [title2, secondDate]);

  return (
    <Container>
      <Date1>{firstDate}</Date1>
      <Date2>{secondDate}</Date2>
    </Container>
  );
});
