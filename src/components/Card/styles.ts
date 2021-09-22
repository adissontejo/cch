
import styled from 'styled-components'

interface CardProps {
    data:{
        type:string,
        size:string,
    }
}

interface DivInformationProps {
    visible: boolean;
}

export const DivCard = styled.div<CardProps>`
    ${props =>[
        props.data.size === 'sm'
          ? 'width:176px; height:176px; font-size: 14px; line-height: 30px;'
          : '',
        props.data.size === 'md'
          ? 'width:200px; height:200px; font-size: 20px; line-height: 40px;'
          : '',
        props.data.size === 'lg'
          ? 'width:290px; height:290px; font-size: 24px; line-height: 48px;'
          : '',
        props.data.type === 'question'
          ? 'background-color:#FF9100;'
          : 'background-color:#3C096C;',
    ]};
    display:flex;
    position:relative;
    padding: 1rem;
    font-family: Gloria Hallelujah;
    
    
    border-radius:8px;

    color: #FFFFFF;

`

export const DivInfo = styled.div`
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items:end;
    right:1.5rem;
    bottom:1rem;

`

export const DivInformation = styled.div<DivInformationProps>`
    transition: all 0.3s;
    overflow:hidden;
    ${props =>[
        props.visible 
        ? 'width:162px; height:81px; opacity:1; padding: 0rem 1rem;'
        : 'height:0; width:162px; opacity:0; padding: 0rem;',
    ]};
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:0.5rem;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-size: 12px;
    line-height: 24px;

    color: #240046;
`