require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const puerto = process.env.PORT;

app.use(express.urlencoded({extended:false})); // Sirve para entendeer en el servidor los datos que llegan del formulario
app.use(express.json()); // Para usar con Angular

app.use(require('./routes/index'));

const dir = path.join(__dirname,'..', 'public');
app.use(express.static(dir));


app.listen(3000, ()=>{
    console.log('Server on port ' + puerto);
})