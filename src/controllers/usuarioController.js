const Usuario = require('../models/Usuario');

exports.registrarUsuario = async (req, res) => {
  const { name, idade, email } = req.body;
  try {
    const usuario = new Usuario({ name, idade, email });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  const { email } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
