import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  padding-top: ${p => p.theme.space[7]}px;
  padding-bottom: ${p => p.theme.space[7]}px;
  background-color: ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: center;
`;
