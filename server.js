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

const checkNumber = (req, res) => {
    console.log('value is ', req.params)

    if (Number.isNaN(parseInt(req.params.value))) {
        res.send('Cannot convert in number')
    } else {
        res.send('Can be converted to number')
    }

}
const checkNumberQuery = (req, res) => {
    console.log('value is ', req.query)

    if (Number.isNaN(parseInt(req.query.value))) {
        res.send('Cannot convert in number')
    } else {
        res.send('Can be converted to number')
    }

}

app.get('/hello', greetings)
app.get('/time', sendTime)
app.get('/random', getRandom)
app.get('/isnumber/:value', checkNumber)
app.get('/isnumberquery', checkNumberQuery)
