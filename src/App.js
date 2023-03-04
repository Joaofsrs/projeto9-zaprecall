import styled from 'styled-components';
import Header from "./components/Header";
import ListaCards from "./components/ListaCards";
import Footer from './components/Footer';

export default function App() {
    return (
        <ContainerAdd>
            <Header></Header>
            <ListaCards></ListaCards>
            <Footer></Footer>
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