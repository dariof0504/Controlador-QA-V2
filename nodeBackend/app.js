const express = require('express')
const { filterRoute } = require('./routes/filterRoute')
const cors = require('cors')
const { saveRoute } = require('./routes/saveRoute')
const { listRoute } = require('./routes/listRoute')
const { rutinaMethodsRoute } = require('./routes/rutinaMethodsRoute')
const { sessionRoute } = require('./routes/sessionRoute')

const app = express()

app.use(cors())
app.use(express.json())

app.use(saveRoute)
app.use(filterRoute)
app.use(listRoute)
app.use(rutinaMethodsRoute)
app.use(sessionRoute)

module.exports = {
    app
}