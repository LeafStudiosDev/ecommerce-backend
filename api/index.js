require('./mongo')
const express = require('express')
const middleware = require('./middleware/middlewares.js')
const api = require('./routes')
const app = express()
app.use(express.json())
app.use('/api', api)
//*ruta 404 not found */
app.use(middleware.notFound)
//*manejo de errores */
app.use(middleware.errorHandler)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
