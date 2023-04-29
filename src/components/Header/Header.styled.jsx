import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding-top: 22px;
  padding-bottom: 22px;
  z-index: 1;
  // overflow: hidden;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const NavList = styled.ul`
  display: flex;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1360px) {
    &:not(:last-child) {
      margin-right: 46px;
    }
  }
`

export const Link = styled.a`
    position: relative;
    cursor: pointer;
    padding-top: 16px;
    padding-bottom: 16px;
    color: inherit;
    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: scaleX(1);
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 4px;
      border-radius: ${p => p.theme.radii.small};
      background-color: ${p => p.theme.colors.accent};
      opacity: 0;
      transform: scale(0);
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media screen and (min-width: 768px) {
      padding-top: 28px;
    padding-bottom: 28px;
      font-size: ${p => p.theme.fontSizes.xs};
      line-height: 1.39;
    }
  }
`