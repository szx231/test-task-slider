import styled from '@emotion/styled';

export const Title = styled.h1`
  display: flex;
  align-self: baseline;
  max-width: 350px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #42567a;

  @media (max-width: 390px) {
    color: #42567a;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 24px */
    max-width: 125px;
  }
`;
