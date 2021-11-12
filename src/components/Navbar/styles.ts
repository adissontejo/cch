import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 95px;
  max-width: 1440px;

  margin: auto;
  padding: 1rem;

  background-color: transparent;

  a {
    font-family: ${props => props.theme.font.primary};
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  gap: 2rem;

  button {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    transition: all 0.2s;

    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
