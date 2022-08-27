const express = require('express')
const cors= require('cors')

const api = require('./routes')
const app = express()

app.use('/api',api)



app.use(express.json())
app.use(cors())
const PORT = 3001
app.listen(PORT)
console.log(`server funcionando en puerto : ${PORT}`)
