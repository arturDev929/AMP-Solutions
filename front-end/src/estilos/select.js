import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectCargos() {
  // Estado para armazenar a lista de cargos
  const [cargos, setCargos] = useState([]);
  
  // Estado para armazenar o valor selecionado
  const [cargoSelecionado, setCargoSelecionado] = useState('');
  
  // Estado para lidar com o carregamento e erros
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Hook useEffect para buscar os dados
  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchCargos = async () => {
      try {
        // --- Uso do Axios ---
        // O Axios faz a requisição GET e lida com a conversão de JSON automaticamente.
        const response = await axios.get('http://localhost:8080/cargos');

        // Os dados JSON estão diretamente em response.data
        setCargos(response.data); 
        
      } catch (err) {
        // O Axios lança um erro para status 4xx e 5xx, o que simplifica o tratamento.
        setError('Falha ao carregar os cargos. Verifique a conexão com a API.');
        console.error("Erro na API com Axios:", err);
      } finally {
        // Finaliza o estado de carregamento, seja com sucesso ou falha
        setIsLoading(false);
      }
    };

    fetchCargos();
  }, []); // Dependência vazia para rodar apenas na montagem

  // 2. Lógica de Renderização Condicional

  if (isLoading) {
    return <p>⏳ Carregando cargos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>❌ {error}</p>;
  }

  return (
    <div>
      <h3>Selecione um Cargo (Usando Axios)</h3>
      <label htmlFor="select-cargo-axios">Cargo:</label>
      <select
        id="select-cargo-axios"
        value={cargoSelecionado}
        onChange={(e) => setCargoSelecionado(e.target.value)}
      >
        <option value="" disabled>
          --- Escolha um cargo ---
        </option>
        
        {/* Mapeamento dos dados da API para criar as opções */}
        {cargos.map((cargo) => (
          <option 
            // Assume que sua API retorna um objeto com 'id' e 'nome'
            key={cargo.id} 
            value={cargo.id} 
          >
            {cargo.cargo}
          </option>
        ))}
      </select>
      
      {cargoSelecionado && (
        <p>ID do Cargo Selecionado: **{cargoSelecionado}**</p>
      )}
    </div>
  );
}

export default SelectCargos;