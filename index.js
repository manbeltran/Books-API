require('dotenv').config()
const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome Book Application!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404</h1>')
})



//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})