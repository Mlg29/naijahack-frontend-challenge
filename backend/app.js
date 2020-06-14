
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

 
const app = express()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb://localhost/fullstack')

// const connection = mongoose.connection;

mongoose.connection.once('open', () => console.log("MongoDb database connection established susccessfully")
).on('error', err => console.log('Connection error', err))


const exercisesRouter = require('./route/exercises')
const usersRouter = require('./route/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})