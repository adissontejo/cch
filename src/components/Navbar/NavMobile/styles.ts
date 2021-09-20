import styled from 'styled-components';

interface NavItemsProps {
  visible: boolean;
}

export const NavToggle = styled.button`
  color: white;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavItems = styled.div<NavItemsProps>`
  position: fixed;
  top: 95px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  max-height: 150px;
  padding: 10px 0px;
  gap: 5px;
  border-bottom: 2px solid #ff9e00;

  transition: all 0.5s, opacity 0.3s ease-out;

  ${props =>
    props.visible
      ? 'max-height: 150px'
      : 'max-height: 0px; padding: 0px; opacity: 0;'};

  a {
    font-weight: 700;
    padding: 0px 18px;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
