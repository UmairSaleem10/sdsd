const express = require('express');
const app = express();
const PORT =3008;
const bodyparser = require('body-parser');
require('./Utilities/DB');

//middle layer
app.use(bodyparser.jason());


//API starter calls
app.use('/api',ProductRouter);


app.listen(PORT , () => {
    console.log('App is listening on this port  ');
})

