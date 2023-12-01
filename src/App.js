import React, { useState } from 'react';
import Header from './components/header'; 
import Footer from './components/footer/footer'; 
import MapComponent from './components/map/map'; 
import ChartComponent from './components/grafico/chart';
import TableComponent from './components/table/table'; 
import styled from 'styled-components';
import FilterForm from './components/Filter2/filter2';


const App = () => {
return(
  <div>
  <Header/>
  <FilterForm/>
  </div>
);
  
};


export default App;
