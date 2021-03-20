const express = require('express');

const app = express();

app.listen(3000,() => console.log("server run at port 3000"));

app.get('/attendance',(req, res) => res.send("Your are on attendance route") )