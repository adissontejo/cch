import Link from 'next/link';

import { Logo } from '~/components';

import {
  Container,
  Content,
  Field,
  Title,
  CodeWrapper,
  Actions,
  JoinGame,
  Menu,
} from './styles';
import useCodeInputs from './useCodeInputs';

const Home = () => {
  const { codeInputs } = useCodeInputs();

  return (
    <Container>
      <Content>
        <Menu>
          <Logo />
          <div>
            <button type="button">Como Jogar?</button>
            <button type="button">Criar Baralhos</button>
          </div>
        </Menu>
        <JoinGame>
          <Title>Entrar em um jogo</Title>
          <form>
            <Field>
              <label htmlFor="player">
                Seu nome de Jogador
                <input name="player" type="text" />
              </label>
            </Field>
            <Field>
              <label htmlFor="code">
                Código da Sala
                <CodeWrapper>
                  {codeInputs.map((item, index) => (
                    <input
                      key={String(index)}
                      name={`code${index}`}
                      type="text"
                      maxLength={1}
                      {...item}
                    />
                  ))}
                </CodeWrapper>
              </label>
            </Field>
            <Actions>
              <button type="submit">Entrar no jogo!</button>
              <span>
                Ou <Link href="/room">crie uma sala</Link>
              </span>
            </Actions>
          </form>
        </JoinGame>
      </Content>
    </Container>
  );
};

export default Home;
