// dependencies
const express = require('express')
const Book = require('../models/book.js')
const books = express.Router()



// Index?
books.get('/', async (req, res) => {
    
})

//export
module.exports = books