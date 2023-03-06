import styled from 'styled-components';
import Card from "./Card";
import cards from "../Mock"

export default function ListaCards(props){
    return (
        <ContainerLista>
            {cards.map((prop, i) => <Card key={prop.question} question={prop.question} answer={prop.answer} index={i} addQuantidade={props.addQuantidade}/> )}
        </ContainerLista>
    );    
}

const ContainerLista = styled.ul`
    margin-bottom: 70px;

    p{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

    }
`;