import styled from 'styled-components';
import { css } from 'styled-components';
import logo from '../assets/logo.png';


export default function Header(){
    return (
        <ContainerHeader>
            <img src={logo} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
        </ContainerHeader>
    );    
}

const RighteousFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
`;

const ContainerHeader = styled.header`
    ${RighteousFont};
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    img{    
        height: 60px;
        width: 52px;
    }   

    h1{
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
        color: #FFFFFF;
        margin-left: 15px;
    }
`;