import Image from 'next/image';

import { logoIcon, themeIcon } from '~/assets';
import { useTheme } from '~/styles/theme';

import NavMobile from './NavMobile';
import { Container, NavItems } from './styles';

interface NavbarProps {
  showLogo: boolean;
}

const Navbar = ({ showLogo }: NavbarProps) => {
  const { showThemeSelection } = useTheme();

  return (
    <>
      <Container>
        {showLogo && (
          <Image src={logoIcon} alt="Cartas Do Baralho" draggable={false} />
        )}

        <NavItems>
          <button type="button" onClick={showThemeSelection}>
            Temas
            <Image src={themeIcon} alt="Temas" draggable={false} />
          </button>
        </NavItems>

        <NavMobile />
      </Container>
    </>
  );
};

export default Navbar;
