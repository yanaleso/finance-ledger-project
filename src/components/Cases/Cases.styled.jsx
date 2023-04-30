import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: ${p => p.theme.space[17]}px;
  padding-bottom: ${p => p.theme.space[13]}px;
  color: ${p => p.theme.colors.secondary};
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[15]}px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: ${p => p.theme.space[23]}px;
    padding-bottom: ${p => p.theme.space[22]}px;
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
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${p => p.theme.space[2]}px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 1360px) {
    gap: ${p => p.theme.space[8]}px;
  }
`;
