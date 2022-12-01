import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 4001

app.listen(port, () => console.log('Server is running at ', port))

const greetings = (req, res) => {

    res.send('It\'s all good Sir!')
}

const sendTime = (req, res) => {
    res.send(new Date().toLocaleString())
}

const getRandom = (req, res) => res.send(Math.ceil(Math.random() * 100).toString())

app.get('/hello', greetings)
app.get('/time', sendTime)
app.get('/random', getRandom)