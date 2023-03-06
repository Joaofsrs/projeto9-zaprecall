import styled from 'styled-components';
import Header from "./components/Header";
import ListaCards from "./components/ListaCards";
import Footer from './components/Footer';
import TelaInicio from './components/TelaInicio';
import React from 'react';
import icone_certo from './assets/icone_certo.png';
import icone_quase from './assets/icone_quase.png';
import icone_erro from './assets/icone_erro.png';


export default function App() {
    const [quantidadeRespostas, setQuantidade] = React.useState(0);
    const [listaResposta, setLista] = React.useState([]);
    const [iniciou, setInicio] = React.useState(false);

    function addQuantidade(resposta){
        setQuantidade(quantidadeRespostas+1);
        if(resposta === "nao"){
            const novoElemento = {icone: icone_erro, test: "no-icon"}
            const novaLista = [...listaResposta, novoElemento];
            setLista(novaLista);
        }else if(resposta === "quase"){
            const novoElemento = {icone: icone_quase, test: "partial-icon"}
            const novaLista = [...listaResposta, novoElemento];
            setLista(novaLista);
        }else if(resposta === "zap"){
            const novoElemento = {icone: icone_certo, test: "zap-icon"}
            const novaLista = [...listaResposta, novoElemento];
            setLista(novaLista);
        }
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
                <Footer data-test="footer" quantidadeRespostas={quantidadeRespostas} listaResposta={listaResposta} />
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