import { useState } from 'react';
import { Card, Navbar } from '~/components';

import { CardsDiv, Container } from './styles';

const Home = () => {
  const cards = [
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
    {
      text: 'Carta',
      type: 'answer',
      autor: 'Desconhecido',
      baralho: 'Básico',
      createdAt: 'Hoje',
    },
  ];

  const [backside, setBackside] = useState(true);

  setTimeout(() => setBackside(!backside), 5000);

  return (
    <Container>
      <Navbar />
      <CardsDiv>
        {cards.map((item, index) => (
          <Card
            id={`${index}`}
            data={item}
            size="sm"
            backside={backside}
            animationDelay={index * 200}
          />
        ))}
      </CardsDiv>
    </Container>
  );
};

export default Home;
