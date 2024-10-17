const mongoose = require('mongoose');

const respostaSchema = new mongoose.Schema({
  pergunta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  texto: { type: String, required: true },
  correta: { type: Boolean, required: true }
});

module.exports = mongoose.model('Resposta', respostaSchema);
