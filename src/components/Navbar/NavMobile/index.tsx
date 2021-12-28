import { useState } from 'react';
import Image from 'next/image';

import menuIcon from '~/assets/icons/menu.svg';
import { NavToggle, NavItems } from './styles';

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

      <NavItems visible={visible} />
    </>
  );
};

export default NavMobile;
