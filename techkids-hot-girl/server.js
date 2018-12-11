const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const RootRouter =require("./routers");

mongoose.connect(
    "mongodb://localhost/techkids-hotgirl",
    {useNewUrlParser:true},
    (err) => {
        if(err) console.log(err);
        else console.log("DB connect succeed");
    });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends :false}));

app.use("/", RootRouter);

const port = process.env.PORT || 6969;
app.listen(port, (err ) => {
    if(err) console.log(err);
    else console.log("Techkid hotgirl server");
});