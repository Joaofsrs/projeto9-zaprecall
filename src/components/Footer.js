import styled from 'styled-components';
import { css } from 'styled-components';

export default function Footer(){
    return (
        <ContainerFooter>
            <p> 0/4 CONCLUÍDOS </p>
        </ContainerFooter>
    );    
}

const RecursiveFont = css`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');
`;

const ContainerFooter = styled.footer`
    ${RecursiveFont};
    width: 100vw;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

