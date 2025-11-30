const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // ⬅️ 1. Importar o pacote cors

const app = express();
const PORT = 8080;

// Configuração do MySQL (mantida a mesma)
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'loading_123',
  port: 3306,
  database: 'amp_solutions'
});

// Testar conexão (mantida a mesma)
connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar com MySQL:', err.message);
    return;
  }
  console.log('Conectado com sucesso ao MySQL - amp_solutions');
});

// 2. Configuração do Middleware CORS
const corsOptions = {
    // Permite requisições APENAS da porta onde o seu React está rodando (pode ser 3000, 5173, etc.)
    // Se você não tem certeza, use '*' durante o desenvolvimento, mas o endereço específico é melhor.
    origin: 'http://localhost:3000', // Altere para a porta do seu frontend React se for diferente de 3000.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permite que cookies e cabeçalhos de autorização sejam enviados
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // ⬅️ Aplicar o middleware CORS
app.use(express.json());

// Rota simples de teste
app.get('/cargos', (req, res) => {
  const query = 'SELECT id_cargo, cargo FROM cargos';
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar consulta:', error);
      return res.status(500).json({ 
        error: 'Erro ao buscar dados dos cargos bd',
        details: error.message 
      });
    }
    
    // ATENÇÃO: A sua API está retornando um objeto aninhado.
    // O seu frontend React (SelectCargos) espera um array de objetos, como:
    // [{ id: 1, nome: 'Desenvolvedor' }, ...]
    // 
    // Mantenha o formato da sua API se preferir, mas o frontend precisará de `response.data.cargos`
    // Ou altere a resposta para retornar apenas o array `results` diretamente para simplificar o frontend:
    
    /* ALTERAÇÃO RECOMENDADA PARA SIMPLICIDADE NO FRONTEND: */
    // res.json(results);
    
    // Mantenha o seu formato original:
    res.json({
      message: 'Dados dos cargos obtidos com sucesso!',
      total: results.length,
      cargos: results // O array de dados que o frontend precisa
    });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});