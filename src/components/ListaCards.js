import styled from 'styled-components';
import Card from "./Card";

export default function ListaCards(){
    return (
        <ContainerLista>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
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