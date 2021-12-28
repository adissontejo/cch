import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  transition: all 0.2s;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;
