const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('smoke test')
})

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
