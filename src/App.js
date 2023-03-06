import styled from 'styled-components';
import Header from "./components/Header";
import ListaCards from "./components/ListaCards";
import Footer from './components/Footer';
import TelaInicio from './components/TelaInicio';
import React from 'react';

export default function App() {
    const [quantidadeRespostas, setQuantidade] = React.useState(0);
    const [iniciou, setInicio] = React.useState(false);

    function addQuantidade(){
        setQuantidade(quantidadeRespostas+1);
    }

    if(!iniciou){
        return (
            <TelaInicio setInicio={setInicio} />
        );
    }else if(iniciou){
        return (
            <ContainerApp>
                <Header/>
                <ListaCards addQuantidade={addQuantidade} />
                <Footer quantidadeRespostas={quantidadeRespostas} />
            </ContainerApp>
        );
    }
}

const ContainerApp = styled.div`
    width: 100vw;
    height: 100%;
    margin-top: 50px;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;