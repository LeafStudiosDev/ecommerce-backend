require('./mongo')
const express = require('express')

const api = require('./routes')
const app = express()


app.use(express.json())
app.use('/api', api)
app.use('/', (req, res) => {
  res.json({
    mensaje: 'hola mundo'
  })
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
