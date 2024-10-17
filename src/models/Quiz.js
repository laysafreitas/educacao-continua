const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  topico_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Topico' },
  texto: { type: String, required: true },
  tipo: { type: String, enum: ['multipla', 'verdadeiro_falso'], required: true }
});

module.exports = mongoose.model('Quiz', quizSchema);
