import Image from 'next/image';
import logoImg from '~/assets/logo.png';

import NavItem from './NavItem';
import NavMobile from './NavMobile';
import { Container, NavItems } from './styles';

const Navbar = () => (
  <Container>
    <Image src={logoImg} alt="Cartas Contra Humanidade" draggable={false} />

    <NavItems>
      <NavItem href="/" label="CRIE BARALHOS" />
      <NavItem href="/" label="COMO JOGAR?" />
    </NavItems>

    <NavMobile />
  </Container>
);

export default Navbar;
