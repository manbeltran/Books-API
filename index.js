// Dependencies
const express = require('express')




// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express ()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())

// Middleware
app.use(express.json())

//mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome Book Application!')
})

//books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//404 page
app.get('*', (req,res) => {
    res.status(404).send('<h1>404</h1>')
})

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})