const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db_queries')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    db.getDiaries()
        .then(diaries => {
            if (diaries){
                res.json(diaries)
            } else {
                res.json(null)
            }
        })
})

app.post('/stats', (req, res) => {
    const { name } = req.body
    console.log(name)
    if (name){
        res.json('all good')
    } else {
        res.json(null)
    }
})

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
