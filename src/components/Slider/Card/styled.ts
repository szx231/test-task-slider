import styled from '@emotion/styled';

interface IContaner {
  isActiveSlide: boolean;
}

export const Container = styled.div<IContaner>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: ${(props) => (props.isActiveSlide ? 0 : 1)};
  transition: opacity 0.6s ease-in-out;
`;

export const CardTitle = styled.h4`
  max-width: 320px;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  color: #3877ee;
  text-overflow: ellipsis;
`;

export const CardDescription = styled.h5`
  max-width: 320px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;
  word-break: break-all;
`;
