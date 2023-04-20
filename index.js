const express = require('express');
const app = express();
const users = require('./src/routes/user.routes');
const characters =require('./src/routes/characters.routes');

//--------------------------------------------------
//other middleweares
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//--------------------------------------------------
app.get('/', (req,res)=> res.send('Hellow World!'))

//route access
app.use('/users', users);
app.use('/characters',characters);


app.listen(3000,()=>'sistening on por 3000');
