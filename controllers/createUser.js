const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userData = await Model.registerUser(username, password);

    if (!userData) throw Error;

    res.status(201).json({ message: 'Novo usuário', userData });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
