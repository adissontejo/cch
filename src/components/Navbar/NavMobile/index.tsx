import { useState } from 'react';
import Image from 'next/image';

import { NavToggle, NavItems } from './styles';

const NavMobile = () => {
  const [visible, setVisible] = useState<boolean>(false);

  function toggleMenu() {
    setVisible(!visible);
  }

  return (
    <>
      <NavToggle onClick={() => toggleMenu()}>
        <Image
          height={50}
          width={50}
          alt="Ligar menu"
          src="/assets/icons/menu.svg"
        />
      </NavToggle>

      <NavItems visible={visible} />
    </>
  );
};

export default NavMobile;
