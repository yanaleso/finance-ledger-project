import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.36;
  color: inherit;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    filter: brightness(120%);
  }
  svg {
    fill: ${p => p.theme.colors.accent};
  }
`

export const LogoPart = styled.span`
  margin: 0 8px;
  color: ${p => p.theme.colors.accent};
`