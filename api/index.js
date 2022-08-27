const express = require('express')
// const middlewares = require('./middleware/middlewares')
const api = require('./routes')
const app = express()

app.use('/api',api)

//middlewares de routing error
// app.use(middlewares)
// app.use(middlewares.errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
