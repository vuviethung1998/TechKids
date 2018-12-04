const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
	player1: { type: String },
    player2: { type: String },
    player3: { type: String },
    player4: { type: String },
    totalScore: { type: Array, default: [0,0,0,0]} 
}, {
	timestamps: true
});

module.exports = mongoose.model("Question", GameSchema);