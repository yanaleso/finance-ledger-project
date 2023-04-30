import styled from 'styled-components';
import showcaseJpg1x from '../../images/home/showcase.jpg';
import showcaseJpg2x from '../../images/home/showcase@2x.jpg';
import showcaseWebp1x from '../../images/home/showcase.webp';
import showcaseWebp2x from '../../images/home/showcase@2x.webp';

export const Section = styled.section`
  height: 100vh;
  text-align: center;
  padding-top: ${p => p.theme.space[25]}px;
  padding-bottom: ${p => p.theme.space[24]}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    image-set(
      url(${showcaseJpg1x}) 1x,
      url(${showcaseJpg2x}) 2x,
      url(${showcaseWebp1x}) 1x,
      url(${showcaseWebp2x}) 2x
    );
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[28]}px;
    padding-bottom: ${p => p.theme.space[28]}px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: ${p => p.theme.space[27]}px;
    padding-bottom: ${p => p.theme.space[26]}px;
  }
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xxl};
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: 0 ${p => p.theme.space[1]}px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;
export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.23;
  margin-bottom: ${p => p.theme.space[9]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  @media screen and (min-width: 768px) {
    line-height: 1.2;
    font-size: ${p => p.theme.fontSizes.xxl};
    padding: 0 ${p => p.theme.space[18]}px;
  }
  @media screen and (min-width: 1360px) {
    line-height: ${p => p.theme.lineHeights.s};
    padding: 0;
  }
`;
