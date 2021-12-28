import { Container, Preview } from './styles';

interface OptionProps {
  active: boolean;
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
  onClick: () => void;
}

const Option = ({ name, colors, onClick, active }: OptionProps) => (
  <Container active={active} onClick={onClick}>
    <span>{name}</span>
    <div>
      <Preview color={colors.primary} />
      <Preview color={colors.secondary} />
    </div>
  </Container>
);

export default Option;
