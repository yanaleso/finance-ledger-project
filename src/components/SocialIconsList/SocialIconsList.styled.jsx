import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
//   @media screen and (min-width: 768px) {
//     margin-bottom: 10px;
//   }
  svg {
    width: 35px;
    height: 35px;
    fill: ${p => p.theme.colors.primary};
    &:hover,
    &:focus {
      fill: ${p => p.fill};
      opacity: ${p => p.opacity};
    }
  }
`

export const Item = styled.li`
display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 25px;
  }
`