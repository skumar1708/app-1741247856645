const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  player1: {
    type: String,
    required: true
  },
  player2: {
    type: String,
    required: true
  },
  board: {
    type: [String],
    required: true
  },
  currentTurn: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Game', GameSchema);