import { useTheme, themes } from '~/styles/theme';

import { Overlay, Content, Title } from './styles';
import Option from './Option';

interface ThemeSelecionProps {
  dismiss: () => void;
}

const ThemeSelection = ({ dismiss }: ThemeSelecionProps) => {
  const { changeTheme, colorTheme } = useTheme();

  return (
    <Overlay onClick={dismiss}>
      <Content>
        <Title>Temas</Title>

        {Object.keys(themes).map(theme => (
          <Option
            key={themes[theme].name}
            active={colorTheme === theme}
            name={themes[theme].name}
            colors={themes[theme].colors}
            onClick={() => changeTheme(theme)}
          />
        ))}
      </Content>
    </Overlay>
  );
};

export default ThemeSelection;
