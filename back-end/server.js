const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Configuração do MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'loading_123',
  port: 3306,
  database: 'amp_solutions'
});

// Testar conexão
connection.connect((err) => {
  if (err) {
    console.log('❌ Erro ao conectar com MySQL:', err.message);
    return;
  }
  console.log('✅ Conectado com sucesso ao MySQL - amp_solutions');
});

app.use(express.json());

// Rota simples de teste
app.get('/', (req, res) => {
  res.json({ 
    message: 'API AMP Solutions funcionando!',
    database: 'amp_solutions - Conectado com sucesso'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});