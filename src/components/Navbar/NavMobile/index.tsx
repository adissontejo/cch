import { useState } from 'react';
import Image from 'next/image';

import menuIcon from '~/assets/icons/menu.svg';
import { NavToggle, NavItems } from './styles';
import NavItem from '../NavItem';

const NavMobile = () => {
  const [visible, setVisible] = useState<boolean>(false);

  function toggleMenu() {
    setVisible(!visible);
  }

  return (
    <>
      <NavToggle onClick={() => toggleMenu()}>
        <Image src={menuIcon} />
      </NavToggle>

      <NavItems visible={visible}>
        <NavItem href="/" label="CRIE BARALHOS" />
        <NavItem href="/" label="COMO JOGAR?" />
      </NavItems>
    </>
  );
};

export default NavMobile;
