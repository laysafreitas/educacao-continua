const mongoose = require('mongoose');

const topicoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true }
});

module.exports = mongoose.model('Topico', topicoSchema);
