import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[3]}px;
  @media screen and (min-width: 320px) {
    padding: 0 ${p => p.theme.space[7]}px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 ${p => p.theme.space[12]}px;
  }
  @media screen and (min-width: 1360px) {
    padding: 0 ${p => p.theme.space[10]}px;
  }
`;
