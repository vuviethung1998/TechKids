const express = require('express');
const axios = require('axios');

let app = express();

app.use(express.static("public"));

app.get('/web:id', (req,res)=>{
    const id = req.params.id;
    axios({
      method:'GET',
      url:'https://btvn-web16s.herokuapp.com/web'+ id,
    }).then(function(data) {
      res.send(data.data);
    })
})

app.listen(1998, (err)=>{
    if(err) console.log(err);
    else    console.log("Server start successfully");
})