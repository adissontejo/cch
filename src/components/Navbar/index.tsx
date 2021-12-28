import Image from 'next/image';

import { useTheme } from '~/styles/theme';
import { Logo } from '~/components';

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
        {showLogo && <Logo />}

        <NavItems>
          <button type="button" onClick={showThemeSelection}>
            Temas
            <Image
              src="/assets/icons/theme.svg"
              width={32}
              height={32}
              alt="Temas"
              draggable={false}
            />
          </button>
        </NavItems>

        <NavMobile />
      </Container>
    </>
  );
};

export default Navbar;
