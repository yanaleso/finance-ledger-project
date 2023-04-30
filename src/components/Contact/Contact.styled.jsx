import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.contactBg};
  @media screen and (min-width: 768px) {
    display: flex;
    max-height: 460px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 51px;
  padding-bottom: 25px;
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    flex-grow: 1;
    padding: 32px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 56px;
    padding-bottom: 77px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.secondary};
  font-weight: 400;
  margin-bottom: 69px;
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.xl};
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
