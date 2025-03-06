const Game = require('../models/Game');
exports.createGame = async (req, res) => {
  const { player1, player2 } = req.body;
  try {
    let game = new Game({
      player1,
      player2,
      board: Array(9).fill(null),
      currentTurn: 'X'
    });
    await game.save();
    res.status(201).send(game);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
exports.getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ msg: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
exports.updateGame = async (req, res) => {
  const { board, currentTurn } = req.body;
  try {
    let game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ msg: 'Game not found' });
    game.board = board;
    game.currentTurn = currentTurn;
    await game.save();
    res.json(game);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};