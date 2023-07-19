import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 170px 40px 104px 78px;
  height: 100%;

  @media (max-width: 390px) {
    padding: 59px 0px 0px 20px;
  }
`;

export const LineLeft = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  height: 100vh;
  width: 1px;
  background: rgba(66, 86, 122, 0.1);

  @media (max-width: 390px) {
    display: none;
  }
`;

export const LineRight = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
  height: 100vh;
  width: 1px;
  background: rgba(66, 86, 122, 0.1);

  @media (max-width: 390px) {
    display: none;
  }
`;

export const Horizontal = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  background: rgba(66, 86, 122, 0.1);
  top: 50%;

  @media (max-width: 390px) {
    display: none;
  }
`;

export const HorizontalRotate = styled.div`
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  height: 100vh;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;

  @media (max-width: 390px) {
    display: none;
  }
`;

export const GradientLine = styled.div`
  height: 120px;
  background: linear-gradient(rgba(56, 119, 238, 1), rgba(239, 93, 168, 1));
  width: 5px;
  position: absolute;
  top: 170px;
  left: 0;

  @media (max-width: 390px) {
    display: none;
  }
`;
