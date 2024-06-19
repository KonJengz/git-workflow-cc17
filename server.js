require('dotenv').config()
const express = require('express')
const notFound = require('./middlewares/not-found')
const app = express()

app.use('/register', (req,res) => {
    res.json({msg: 'register . . .'})
})

app.use(notFound)
app.use(errormiddleware);

const port = process.env.PORT || 8000
app.listen(port, () => console.log('run port', port))
