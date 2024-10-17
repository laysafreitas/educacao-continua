const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./src/routes/usuarioRoutes');

const app = express();
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/BancoDeDados', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log(err));
  
// Configurar rotas
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
