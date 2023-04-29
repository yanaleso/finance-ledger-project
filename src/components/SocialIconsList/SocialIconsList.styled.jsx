import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
    fill: ${p => p.theme.colors.primary};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      fill: ${p => p.fill};
      opacity: ${p => p.opacity};
    }
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
