const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db_queries')
const scraper = require('./score_scraper')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/diaries', (req, res) => {
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
    scraper.scrape(name)
        .then(stats => {
            console.log(stats)
            if (stats){
                res.json(stats)
            } else {
                res.json(null)
            }
        })
})

let PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
