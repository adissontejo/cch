import Image from 'next/image';

import { Button } from './styles';

interface NavItemProps {
  title: string;
  icon: string;
  onClick: () => void;
}

const NavItem = ({ title, icon, onClick }: NavItemProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {title}
      <Image src={icon} width={32} height={32} alt={title} draggable={false} />
    </Button>
  );
};

export default NavItem;
