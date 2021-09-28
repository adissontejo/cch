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

const Home = () => (
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
                <input name="code1" type="text" maxLength={1} />
                <input name="code2" type="text" maxLength={1} />
                <input name="code3" type="text" maxLength={1} />
                <input name="code4" type="text" maxLength={1} />
                <input name="code5" type="text" maxLength={1} />
                <input name="code6" type="text" maxLength={1} />
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

export default Home;
