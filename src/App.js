import React, { useState } from 'react';
import Header from './components/header'; 
import Footer from './components/footer/footer'; 
import MapComponent from './components/map/map'; 
import ChartComponent from './components/grafico/chart';
import TableComponent from './components/table/table'; 
import styled from 'styled-components';
import FilterComponent from './components/Filter/filter';


const App = () => {
return(
  <div>
  <Header/>
  <FilterComponent/>
  </div>
);
  
};


export default App;
