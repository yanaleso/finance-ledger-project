import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
