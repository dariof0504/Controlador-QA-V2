const express = require('express')
const { filterRoute } = require('./routes/filterRoute')
const cors = require('cors')
const { saveRoute } = require('./routes/saveRoute')
const { listRoute } = require('./routes/listRoute')

const app = express()

app.use(cors())
app.use(express.json())

app.use(saveRoute)
app.use(filterRoute)
app.use(listRoute)

module.exports = {
    app
}