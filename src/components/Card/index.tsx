import { HTMLAttributes, useState } from 'react';
import Image from 'next/image';
import { formatDistance } from 'date-fns';

import { Flipper, DivCard, DivInfo, DivInformation } from './styles';

import Logo from '../Logo';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  data: {
    text: string;
    author: string;
    deck: string;
    createdAt: Date;
    isQuestion: boolean;
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
            <p>autor: {data.author}</p>
            <p>baralho: {data.deck}</p>
            <p>criado em: {formatDistance(data.createdAt, new Date())}</p>
          </DivInformation>
          <Image
            width={200}
            height={50}
            alt="Info icon"
            src="/assets/icons/info.svg"
          />
        </DivInfo>
      </DivCard>
      <DivCard data={data} size={size} className="back">
        <Logo />
      </DivCard>
    </Flipper>
  );
};

export default Card;
