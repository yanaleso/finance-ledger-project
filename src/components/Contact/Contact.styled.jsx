import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.contactBg};
  @media screen and (min-width: 768px) {
    display: flex;
    max-height: ${p => p.theme.sizes.m};
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[7]}px;
  padding-top: ${p => p.theme.space[16]}px;
  padding-bottom: ${p => p.theme.space[9]}px;
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    flex-grow: 1;
    padding: ${p => p.theme.space[12]}px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: ${p => p.theme.space[17]}px;
    padding-bottom: ${p => p.theme.space[21]}px;
    padding-left: ${p => p.theme.space[10]}px;
    padding-right: ${p => p.theme.space[10]}px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: ${p => p.theme.space[19]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.xxl};
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
