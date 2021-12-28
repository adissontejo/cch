import { useTheme } from '~/styles/theme';

import NavItem from './NavItem';
import { Container, NavItems } from './styles';

const Navbar = () => {
  const { showThemeSelection } = useTheme();

  return (
    <Container>
      <NavItems>
        <NavItem
          title="Temas"
          icon="/assets/icons/theme.svg"
          onClick={showThemeSelection}
        />
      </NavItems>
    </Container>
  );
};

export default Navbar;
