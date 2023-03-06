import styled from 'styled-components';
import Header from "./components/Header";
import ListaCards from "./components/ListaCards";
import Footer from './components/Footer';
import React from 'react';

export default function App() {
    const [quantidadeRespostas, SetQuantidade] = React.useState(0);

    function addQuantidade(){
    }

    return (
        <ContainerAdd>
            <Header></Header>
            <ListaCards addQuantidade={addQuantidade}></ListaCards>
            <Footer quantidadeRespostas={quantidadeRespostas} ></Footer>
        </ContainerAdd>
    );
}

const ContainerAdd = styled.div`
    width: 100vw;
    height: 100%;
    margin-top: 50px;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;