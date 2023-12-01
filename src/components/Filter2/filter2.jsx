import React, { useState } from 'react';
import './filter2.css'; // Certifique-se de ajustar o caminho do arquivo CSS conforme necessário
import { Link } from 'react-router-dom';

const FilterForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [stationName, setStationName] = useState('');
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

  const handleVariableClick = (variable) => {
    // Verifica se a variável já está selecionada
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter((v) => v !== variable));
    } else {
      // Adiciona a variável à lista de variáveis selecionadas
      setSelectedVariables([...selectedVariables, variable]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de filtragem
    // Por exemplo, você pode enviar esses valores para um componente pai ou uma função de filtro
    // Não estou implementando a lógica de filtro neste exemplo, pois você mencionou que não precisa ser funcional
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data de Início:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />

      <label>
        Data de Fim:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />

      <label>
        Nome da Estação:
        <input type="text" value={stationName} onChange={handleStationNameChange} />
      </label>
      <br />

      <label>Selecione as Variáveis:</label>
      <br />

      <div className="variable-list">
        {['Chuva', 'Umidade', 'Temperatura', 'Velocidade do Vento', 'Visibilidade', 'Temperatura Aparente'].map((variable) => (
          <span
            key={variable}
            className={`variable ${selectedVariables.includes(variable) ? 'selected' : ''}`}
            onClick={() => handleVariableClick(variable)}
          >
            {variable}
          </span>
        ))}
      </div>
      <Link to="/Historico">
  <button type="submit">Filtrar</button>
</Link>
    </form>
  );
};

export default FilterForm;
