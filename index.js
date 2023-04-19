const express = require('express');
const app = express();
const users = require('./src/routes/user.routes');

//--------------------------------------------------
app.get('/', (req,res)=> res.send('Hellow World!'))

//route access
app.use('/users', users);

//--------------------------------------------------

app.listen(3000,()=>'sistening on por 3000');
