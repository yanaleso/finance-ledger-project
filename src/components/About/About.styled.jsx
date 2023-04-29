import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.accent};
  @media screen and (min-width: 768px) {
    display: flex;
    max-height: 460px;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 47%;

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
  font-weight: 400;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: 24px;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.m};
`;

export const Text = styled(SubTitle)`
  margin-bottom: 24px;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
