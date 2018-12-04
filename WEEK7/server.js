const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();

const questionModel = require("./models/questionModel")

mongoose.connect(
	"mongodb://localhost/quyetdeapp",
	{ useNewUrlParser: true },

	(err) => {
		if(err) console.log(err)
		else console.log("DB connect success!");
	},
);
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});

app.post("/ask", (req, res) => {
	questionModel.create({ content: req.body.question }, (err, questionCreated) => {
		if(err) console.log(err)
		else {
			console.log(questionCreated);
			res.redirect("/");
		}
	})
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/randomquestion", (req, res) => {
	questionModel.count({}, (err, count) => {
		if(err) console.log(err)
		else {
			const randomNum = Math.floor(Math.random()*count);
			questionModel.findOne({}, null, { skip: randomNum }, (err, questionFound) => {
				if(err) console.log(err)
				else res.json({ question: questionFound });
			});
		}
	})
});

app.get("/question/:questionId", (req, res) => {
	const questionId = req.params.questionId;
	questionModel.findById(questionId, (err, questionFound) => {
		res.json(questionFound);
	})
});

app.get("/questiondetail/:questionId", (req,res) => {
	res.sendFile( __dirname + "/views/vote.html");
});

app.post("/answer", (req, res) => {
	const questionId = req.body.questionId;
	const vote = req.body.vote;
	questionModel.findById(questionId, (err, questionFound) => {
		questionFound[vote] += 1;
		questionFound.save((err) => {
			res.send({question:questionFound});
		});
	});
});

app.use(express.static("views"));

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Success!");
});