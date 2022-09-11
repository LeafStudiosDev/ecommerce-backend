require('./mongo')
const express = require('express')
const middleware = require('./middleware/middlewares.js')
// const handleErrors = require('./middleware/handleErrors.js')

const api = require('./routes')
const app = express()


app.use(express.json())
app.use('/api', api)


//*ruta default
// app.use('/', (req, res) => {
//   res.json({
//     mensaje: 'API en construccion'
//   })
// })


//*ruta 404 not found */
//todo: realizar esta funcion como middleware e importar a index

app.use(middleware.notFound)
app.use(middleware.errorHandler)

// app.use(notFound)

// app.use(handleErrors)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
