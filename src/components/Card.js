import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import seta_virar from '../assets/seta_virar.png';
import seta_play from '../assets/seta_play.png';
import icone_certo from '../assets/icone_certo.png';
import icone_quase from '../assets/icone_quase.png';
import icone_erro from '../assets/icone_erro.png';

export default function Card(props) {
    const [tipoCard, setCard] = React.useState("default");
    const [imgResultado, setImg] = React.useState(seta_play);
    const [cor, setCor] = React.useState("#000000");
    const [linhaText, setTextLine] = React.useState(false);
    const [dataIcon, setData] = React.useState("play-btn");

    function viraDefault(){
        setCard("question");
    }

    function viraQuestion(){
        setCard("answer");
    }

    function viraAnswer(conteudo){
        if(conteudo === "nao"){
            setImg(icone_erro);
            setCor("#FF3030");
            setTextLine(true);
            setCard("default");
            setData("no-icon");
        }else if(conteudo === "quase"){
            setImg(icone_quase);
            setCor("#FF922E");
            setTextLine(true);
            setCard("default");
            setData("partial-icon");
        }else if(conteudo === "zap"){
            setImg(icone_certo);
            setCor("#2FBE34");
            setTextLine(true);
            setCard("default");
            setData("zap-icon");
        }
    }

    function click(conteudo){
        viraAnswer(conteudo);
        props.addQuantidade(conteudo);
    }

    if(tipoCard === "default"){
        return (
            <CardFechadoStyled cor={cor} linhaText={linhaText} >
                <h2 data-test="flashcard-text" > Pergunta {props.index+1} </h2>
                <button data-test={dataIcon} onClick={viraDefault} disabled={linhaText} > <img src={imgResultado} alt="Botao para abrir pergunta" /> </button>
            </CardFechadoStyled>
        );
    }else if(tipoCard === "question"){
        return (
            <CardPerguntaStyled>
                <h2 data-test="flashcard-text" > {props.question} </h2>
                <button data-test="turn-btn" onClick={viraQuestion} > <img src={seta_virar} alt="Seta para virar carta" /> </button>
            </CardPerguntaStyled>
        );
    }else if(tipoCard === "answer"){
        return (
            <CardRespostaStyled>
                <h2 data-test="flashcard-text" > {props.answer} </h2>
                <div>
                    <button data-test="no-btn" onClick={() => click("nao")} > Não lembrei </button>
                    <button data-test="partial-btn" onClick={() => click("quase")} > Quase não lembrei </button>
                    <button data-test="zap-btn" onClick={() => click("zap")} > Zap! </button>
                </div>
            </CardRespostaStyled>
        );
    }else if(tipoCard === "finish"){

    }
}


const RecursiveFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&display=swap');
`;

const CardFechadoStyled = styled.li`
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
    text-decoration-line: ${props => props.linhaText ? "line-through" : "none"};
    color: ${props => props.cor};

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

const CardPerguntaStyled = styled.li`
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

const CardRespostaStyled = styled.li`
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
