import styled from 'styled-components';
import { css } from 'styled-components';
import logo from '../assets/logo.png';

export default function TelaInicio(props){
    return (
        <ContainerInicio>
            <img src={logo} alt="Logo de site" />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={props.setInicio}>Iniciar Recall!</button>
        </ContainerInicio>
    );
}


const RighteousFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
`;

const ContainerInicio = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    img{
        height: 161px;
        width: 136px;
        border-radius: 0px;
        margin-bottom: 20px;
    }
    h1{
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        letter-spacing: -0.012em;
        margin-bottom: 20px;
    }
    button{
        height: 54px;
        width: 246px;
        border-radius: 5px;
        background-color: #FFFFFF;
        color: #D70900;
        border: none;
    }
`;