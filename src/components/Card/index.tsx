import { HTMLAttributes, useState } from 'react';
import Image from 'next/image';

import logoImg from '~/assets/icons/logo.svg';
import infoIcon from '~/assets/icons/info.svg';

import { Flipper, DivCard, DivInfo, DivInformation } from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    text: string;
    type: string;
    autor: string;
    baralho: string;
    createdAt: string;
  };
  size?: string;
  backside?: boolean;
  animationDelay?: number;
}

const Card = ({
  data,
  size = 'sm',
  backside = false,
  animationDelay = 0,
  ...rest
}: CardProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Flipper backside={backside} delay={animationDelay} {...rest}>
      <DivCard data={data} size={size} className="front">
        <p>{data.text}</p>
        <DivInfo
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <DivInformation visible={visible}>
            <p>autor: {data.autor}</p>
            <p>baralho: {data.baralho}</p>
            <p>criado em: {data.createdAt}</p>
          </DivInformation>
          <Image src={infoIcon} />
        </DivInfo>
      </DivCard>
      <DivCard data={data} size={size} className="back">
        <Image
          src={logoImg}
          alt="Cartas contra humanidade"
          width="75%"
          draggable={false}
          className="backside-image"
        />
      </DivCard>
    </Flipper>
  );
};

export default Card;
