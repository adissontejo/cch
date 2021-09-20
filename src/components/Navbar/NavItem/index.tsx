/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import { Label } from './styles';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => (
  <Link href={href}>
    <Label>{label}</Label>
  </Link>
);

export default NavItem;
