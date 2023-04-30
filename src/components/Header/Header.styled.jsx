import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding-top: ${p => p.theme.space[8]}px;
  padding-bottom: ${p => p.theme.space[8]}px;
  z-index: 1;
  background-color: ${({ inTop, theme }) =>
    inTop ? 'transparent' : theme.colors.secondary};
  opacity: ${({ inTop }) => (inTop ? 1 : 0.8)};

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: ${p => p.theme.space[12]}px;
    padding-bottom: ${p => p.theme.space[12]}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin-top: ${p => p.theme.space[5]}px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: ${p => p.theme.space[7]}px;
    }
  }
  @media screen and (min-width: 1360px) {
    &:not(:last-child) {
      margin-right: ${p => p.theme.space[14]}px;
    }
  }
`;

export const Link = styled.a`
  position: relative;
  cursor: pointer;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  color: inherit;
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scaleX(1);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: ${p => p.theme.space[7]}px;
    left: 0;
    display: block;
    width: 100%;
    height: ${p => p.theme.sizes.xs};
    border-radius: ${p => p.theme.radii.small};
    background-color: ${p => p.theme.colors.accent};
    opacity: 0;
    transform: scale(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[10]}px;
    padding-bottom: ${p => p.theme.space[10]}px;
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.l};
  }
`;
