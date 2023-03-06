import styled from 'styled-components';
import { css } from 'styled-components';
import cards from '../Mock.js'

export default function Footer(props){
    const numeroPerguntas = cards.length;
    return (
        <ContainerFooter>
            <p> {props.quantidadeRespostas}/{numeroPerguntas} CONCLUÍDOS </p>
            <div>
                {props.listaResposta.map((icon, i) => <img key={i} data-test={icon.test} src={icon.icone} alt={icon.test} />)}
            </div>
        </ContainerFooter>
    );    
}

const RecursiveFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');
`;

const ContainerFooter = styled.footer`
    ${RecursiveFont};
    width: 100vw;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

