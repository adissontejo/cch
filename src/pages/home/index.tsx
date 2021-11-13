import Link from 'next/link';

import { Navbar } from '~/components';

import {
  Container,
  Content,
  Field,
  Title,
  CodeWrapper,
  Actions,
} from './styles';
import useCodeInputs from './useCodeInputs';

const Home = () => {
  const { codeInputs } = useCodeInputs();

  return (
    <Container>
      <Navbar showLogo={false} />
      <Content>
        <section>
          <Title>Entrar em um jogo</Title>
          <form action="">
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
        </section>
      </Content>
    </Container>
  );
};

export default Home;
