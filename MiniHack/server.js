const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const gameModel = require("./models/gameModel");
const app = express();

mongoose.connect(
	"mongodb://localhost/minihack",
	{ useNewUrlParser: true },

	(err) => {
		if(err) console.log(err)
		else console.log("DB connect success!");
	},
);

mongoose.set("useCreateIndex", true);

app.use(express.static("views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req,res) => {
    gameModel.create({
        player1: req.body.player1,
        player2: req.body.player2,
        player3: req.body.player3,
        player4: req.body.player4
    },(err, gameCreated) => {
        if (err) console.log(err)
        else {
            console.log(gameCreated);
            res.send({dataRes: gameCreated})
        }
    })
});

app.get("/game/:gameId", (req,res) => {
    res.sendFile("/views/round.html")
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/name.html");
});

app.listen(8080,(err) => {
    if (err) console.log(err)
    else console.log("Server started!")
});
