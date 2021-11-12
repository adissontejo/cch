import { useState } from 'react';
import Image from 'next/image';
import logoImg from '~/assets/icons/logo.svg';

import NavMobile from './NavMobile';
import { Container, NavItems } from './styles';

import ThemeSelection from '../ThemeSelection';

interface NavbarProps {
  showLogo: boolean;
}

const Navbar = ({ showLogo }: NavbarProps) => {
  const [showThemeSelection, setShowThemeSelection] = useState(false);

  return (
    <>
      {showThemeSelection && (
        <ThemeSelection dismiss={() => setShowThemeSelection(false)} />
      )}

      <Container>
        {showLogo && (
          <Image src={logoImg} alt="Cartas Do Baralho" draggable={false} />
        )}

        <NavItems>
          <button type="button" onClick={() => setShowThemeSelection(true)}>
            Temas
          </button>
        </NavItems>

        <NavMobile />
      </Container>
    </>
  );
};

export default Navbar;
