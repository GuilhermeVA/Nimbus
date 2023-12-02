import React, { useState } from 'react';
import './filter2.css'; 
import { Link } from 'react-router-dom';



const FilterForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [stationName, setStationName] = useState('');
  const [operation, setOperation] = useState('');
  const [frequency, setFrequency] = useState('');
  const [selectedVariables, setSelectedVariables] = useState([]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleStationNameChange = (e) => {
    setStationName(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleVariableChange = (variable) => {
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter((v) => v !== variable));
    } else {
      setSelectedVariables([...selectedVariables, variable]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data Inicial:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />

      <label>
        Data Final:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />

      <label>
        Estação:
        <input type="text" value={stationName} onChange={handleStationNameChange} />
      </label>
      <br />

      <label>Selecione as Variáveis:</label>
      <br />
      {['Chuva', 'Umidade', 'Temperatura', 'Velocidade do Vento', 'Visibilidade', 'Temperatura Aparente'].map((variable) => (
        <span
          key={variable}
          className={`variable ${selectedVariables.includes(variable) ? 'selected' : ''}`}
          onClick={() => handleVariableChange(variable)}
        >
          {variable}
        </span>
      ))}
      <br />

      <label>
        Operação:
        <input type="text" value={operation} onChange={handleOperationChange} />
      </label>
      <br />

      <label>
        Frequência:
        <input type="text" value={frequency} onChange={handleFrequencyChange} />
      </label>
      <br />

      
<Link to="/Historico">
<button type="submit">Filtrar</button>
</Link>

    </form>
  );
};

export default FilterForm;




