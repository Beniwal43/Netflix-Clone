import { JumbotronContainer } from "../Mainpage/containers/Jumbotron";
import MainHeader from "../Mainpage/containers/MainHeader";
import styled from 'styled-components/macro';
import { FaqsContainer } from "../Mainpage/containers/FaqsContainer";

export function Mainpage() {
    return (
        <MainpageContainer>
        <MainHeader/>
        <JumbotronContainer/>
        <FaqsContainer/>
        </MainpageContainer>
        
    );
}

export default Mainpage;

const MainpageContainer = styled.div`
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
    `;
