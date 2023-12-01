import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Header from './components/header'; 
import Historico from './Historico';


const StyledContainer = styled.div`
  justify-content: space-between; 
  padding: 20px;
`;

const StyledUl = styled.ul`
  margin-left : 15px;
  display : flex;
  flex-direction : column;

`;

const StyledLi = styled.li`
  margin : 5px;

`;

const H2 = styled.h2`
  margin-left: 20px;

`

const StyledH1 = styled.h1`
  margin-left: 20px;

`

const StyledP = styled.p`
margin-left: 20px;
font-size: 20px;

`

const StyledDiv = styled.div`
display: flex;
  
`





function Index() {
  return (
    <div>
      <Header />
    <StyledContainer> 
      <div>
          <StyledH1>Projeto Front-End</StyledH1>
          <StyledP>
            Bem-vindo à página do Grupo 4D. O nosso objetivo é propor um protótipo para o Histórico de Dados da empresa Nimbus Meteorologia, para que ele apresente os dados de forma mais clara através de gráficos, tabelas e mapas com marcadores.
          </StyledP>
          </div>
          <StyledDiv>
          <div>
          <H2>Grupo 4D:</H2>
          <StyledUl>
            <StyledLi>Guilherme Vallim</StyledLi>
            <StyledLi>Hannah Martins</StyledLi>
            <StyledLi>João Gois</StyledLi>
            <StyledLi>Lorran Porto</StyledLi>
          </StyledUl>
          </div>

        </StyledDiv> 
        
    </StyledContainer>
      
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
       <HashRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Index />} />
        <Route path="/Historico" element={<Historico />} />
      </Routes>
      </HashRouter>
  </React.StrictMode>
);


reportWebVitals();