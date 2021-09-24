import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

export const CardsDiv = styled.div`
  display: flex;

  margin: 10px;
  gap: 10px;
`;
