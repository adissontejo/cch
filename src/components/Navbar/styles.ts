import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 95px;
  max-width: 1440px;

  margin: auto;
  padding: 1rem;

  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background-color: transparent;

  a {
    font-family: 'Gloria Hallelujah';
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
