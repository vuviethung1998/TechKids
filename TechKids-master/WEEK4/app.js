const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.static("view"));
app.use(bodyParser.urlencoded({
    extended: false
}));

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/ask', (req, res) => {
    res.sendFile(__dirname + "/view/ask.html");
});

app.post('/ask', (req, res) => {
    console.log(questions[1], questions.length);
    let newQuestion = {
        id: questions.length,
        yes: 0,
        no: 0,
        content: req.body.question
    }
    questions.push(newQuestion);
    fs.writeFileSync('questions.json', JSON.stringify(questions));
    res.redirect("/");
});

app.get('/randomquestion', (req, res) => {
    const rnd = Math.floor(Math.random() * questions.length);
    res.send(questions[rnd].content);
})

//router //question/:questionid tra ve thong tin cua 1 cau hoi
app.get('/question/:questionid', (req, res) => {
    const {
        questionid
    } = req.params;
    res.send(questions[questionid].content);
});


app.listen(1998, (err) => {
    if (err) console.log(err);
    else console.log("Server start successfully");
});

/*
app.get("/:classname", (req, res)=>{
    const {classname} = req.params;
    axios({
        method: 'GET',
        url: `https://btxn-web16s.herokuapp.com/api/${classname}`,
    }).then(({data})=>{
        const {students} =data;
        //let studentHTML = "";
        // for(let i=0; i < students.length; i ++) {
        //     studentHTML = `${studentHTML}<li>${students[i]}</li>`;
        // }
        // students.forEach((student)=>{
        //     studentHTML =  `${studentHTML}<li>${student}</li>`;
        // });

        const studentHTML = students.map((student)=>{
           return `<li>${student}<\li>`; 
        });
        //console.log(studentHTML);
        res.send(`<ol>${studentHTML.join("")}</ol>`);
    });
});

app.listen(1998, (err=>{
    if(err) console.log(err);
    else console.log("Server start successfully"); 
}));
*/