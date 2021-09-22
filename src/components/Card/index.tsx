import { useState } from 'react';

import { DivCard, DivInfo, DivInformation } from './styles'
import infoIcon from '~/assets/icons/info.svg'

import Image from 'next/image';

interface CardProps {
    data:{
        text:string,
        type:string,
        size:string,
        autor:string,
        baralho:string,
        create_at:string,
    }
}

const Card = ({data}:CardProps) =>{
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <DivCard data={data}>
        <p>{data.text}</p>
        <DivInfo onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>
            <DivInformation visible={visible}>
                <p>autor: {data.autor}</p>
                <p>baralho: {data.baralho}</p>
                <p>criado em: {data.create_at}</p>
            </DivInformation> 
            <Image src={infoIcon}/>
        </DivInfo>
    </DivCard>
    )
    
}

export default Card