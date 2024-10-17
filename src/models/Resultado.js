const mongoose = require('mongoose');

const resultadoSchema = new mongoose.Schema({
  pergunta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  resposta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Resposta' },
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Resultado', resultadoSchema);
