// Require Mongoose
const mongoose = require('mongoose')

// Creating Shorthand for the Schema Constructor
const { Schema } = mongoose

// schema
const bookSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number},
    imageURL: { type: String },

})

//Model and Export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book
