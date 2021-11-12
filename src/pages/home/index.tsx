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
      <Navbar />
      <Content>
        <section>
          <Title>Entrar em um jogo</Title>
          <form action="">
            <Field>
              <label htmlFor="code">
                Código da sala
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
            <Field>
              <label htmlFor="player">
                Nome do jogador
                <input name="player" type="text" />
              </label>
            </Field>
            <Actions>
              <button type="submit">entrar</button>
              <Link href="/room">ou crie uma sala</Link>
            </Actions>
          </form>
        </section>
      </Content>
    </Container>
  );
};

export default Home;
