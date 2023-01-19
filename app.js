const http = require('http');
const express = require('express');
const path = require('path');

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminroutes);
app.use(shoproutes);


app.use((req,res,next) =>
{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
});
// next(); //allow the request to next middleware in line
app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);