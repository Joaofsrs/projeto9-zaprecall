import styled from 'styled-components';
import { css } from 'styled-components';
import seta_play from '../assets/seta_play.png';
import seta_virar from '../assets/seta_virar.png';

export default function Card() {
    return (
        <CardFechado>
            <h2> Pergunta 1 </h2>
            <button> <img src={seta_play} alt="Botao para abrir pergunta" /> </button>
        </CardFechado>
    );

    /*
    return (
        <CardPergunta>
            <h2> O que é JSX? </h2>
            <button> <img src={seta_virar} alt="Seta para virar carta" /> </button>
        </CardPergunta>
    );*/
        
    /*
    return (
        <CardResposta>
            <h2> JSX é uma sintaxe para escrever HTML dentro do JS </h2>
            <div>
                <button> Não lembrei </button>
                <button> Quase não lembrei </button>
                <button> Zap! </button>
            </div>
        </CardResposta>
    );*/
}

const RecursiveFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&display=swap');
`;

const CardPergunta = styled.li`
    ${RecursiveFont};
    min-height: 131px;
    width: 299px;
    border-radius: 5px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    position: relative;

    button{
        position: absolute;
        background: none;
        border: none;
        right: 5px;
        bottom: 5px;
    }

    h2{
        font-family: 'Recursive';
        font-size: 18px;
        font-weight: 400;
        padding: 15px;
    }
`;

const CardResposta = styled.li`
    ${RecursiveFont};
    width: 299px;
    border-radius: 5px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    font-family: 'Recursive', sans-serif;

    div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-bottom: 10px; 
    }

    button{
        font-family: 'Recursive', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        border: none;
        line-height: 14px;

        height: 37px;
        width: 85px;
        border-radius: 5px;
    }

    button:nth-child(1){
        background-color: #FF3030;
    }

    button:nth-child(2){
        background-color: #FF922E;
    }

    button:nth-child(3){
        background-color: #2FBE34;
    }

    h2{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding: 15px;
    }
`;

const CardFechado = styled.li`
    ${RecursiveFont};
    display: flex;
    height: 65px;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;

    button{
        background: none;
        border: none;
        margin-right: 15px;
    }

    h2{
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin-left: 15px;
    }

`;