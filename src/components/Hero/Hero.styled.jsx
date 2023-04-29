import styled from 'styled-components';
import showcaseJpg1x from '../../images/home/showcase.jpg';
import showcaseJpg2x from '../../images/home/showcase@2x.jpg';
import showcaseWebp1x from '../../images/home/showcase.webp';
import showcaseWebp2x from '../../images/home/showcase@2x.webp';

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 160px;
  padding-bottom: 104px;
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
    padding-top: 378px;
    padding-bottom: 378px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 272px;
    padding-bottom: 270px;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 16px;
  padding: 0 5px;
  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`
export const SubTitle = styled.h3`
  font-size: 26px;
  line-height: 1.23;
  margin-bottom: 24px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    line-height: 1.2;
    font-size: 40px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1360px) {
    line-height: 1.35;
    padding: 0;
  }
`