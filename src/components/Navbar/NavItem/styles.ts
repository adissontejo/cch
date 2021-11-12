import styled from 'styled-components';

export const Label = styled.a`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: block;
  transition: all 0.3s;

  :hover {
    opacity: 0.6;
  }
`;
