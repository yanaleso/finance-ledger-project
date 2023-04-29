import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.primary};
  font-family: inherit;
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  border-width: 0;
  display: flex;
  
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HeroButton = styled(StyledButton)`
margin: 0 auto;
align-items: center;
  gap: 8px;
  background-color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.39;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
  svg {
    fill: currentColor;
    vertical-align: text-top;
  }
`

export const AboutButton = styled(StyledButton)`
  background: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: 1.375;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    background: ${p => p.theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.39;
  }
`
export const BlogButton = styled(AboutButton)`
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blogBg};
  }
`
export const SubmitButton = styled(HeroButton)`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[7]}px;
`