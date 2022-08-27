// Require Needed Modules
const express = require('express')

// Initialize App Variable
const app = express()

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome Book Application!')
})



//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})