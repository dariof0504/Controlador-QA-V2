const express = require('express')
const { filterRoute } = require('./routes/filterRoute')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use(filterRoute)

module.exports = {
    app
}