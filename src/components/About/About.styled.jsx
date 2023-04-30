import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 768px) {
    display: flex;
    max-height: ${p => p.theme.sizes.l};
  }
  @media screen and (min-width: 1360px) {
    max-height: ${p => p.theme.sizes.m};
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 45%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const Text = styled(SubTitle)`
  margin-bottom: ${p => p.theme.space[6]}px;
`;
