const express = require("express");
const morgan =  require("morgan");
const bodyParser = require('body-parser')
const db = require('../database');

//Setting
const app = express();
app.set('port',process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(require('./routes/index'));

//Middlewares
app.use(morgan("dev"));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Runing in port ${app.get('port')}.`);
    
});