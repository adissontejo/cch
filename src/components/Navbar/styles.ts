import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  height: 95px;

  margin: auto;
  padding: 1rem;

  a {
    font-family: ${props => props.theme.font.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 60px;
    padding: 1rem 1rem 0;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  max-width: 1440px;

  gap: 2rem;
`;
