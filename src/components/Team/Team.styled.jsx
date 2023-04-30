import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  padding-top: ${p => p.theme.space[20]}px;
  padding-bottom: ${p => p.theme.space[16]}px;
  color: ${p => p.theme.colors.secondary};
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
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3 ${p => p.theme.space[11]}px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 1360px) {
    gap: ${p => p.theme.space[8]}px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.s};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.xs};
  }
`;
