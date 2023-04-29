import styled from 'styled-components';

export const StyledCases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 56px;
  padding-bottom: 40px;
  color: ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) {
    padding-top: 48px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 90px;
    padding-bottom: 80px;
  }
`;

export const SubTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.m};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: 24px;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media screen and (min-width: 1360px) {
    gap: 22px;
  }
`;
