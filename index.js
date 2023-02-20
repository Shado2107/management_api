const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({
    path: 'config.env'
})

const PORT = process.env.PORT||3000;

//Mongodb connection
connectDB();

//parse request to body parser
app.use(bodyparser.urlencoded({
    extended: true
}))


//load routers
app.use('/',require(''));


//listen port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})