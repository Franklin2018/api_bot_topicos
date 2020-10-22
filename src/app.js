const express = require('express');
const app     = express();


const morgan     = require('morgan');
const bodyparser = require('body-parser');
//settings
app.set( 'port', process.env.PORT || 3000);

app.listen( app.get('port'), ()=> {
    console.log('server on port 3000');
});

//routes
app.get('/', function(req, res){
    res.send('Bienvenido al proyecto de Bot-Topicos');
});

//middlewares
app.use(morgan ('dev'));
app.use(bodyparser.json());