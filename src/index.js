const express = require('express')
const cors= require('cors')
const productos = require('./routes/Productos')
const categorias = require('./routes/categorias')

const app = express()

app.use('/src/productos',productos)
app.use('/src/categorias',categorias)
app.use(express.json())
app.use(cors())
const PORT = 3001
app.listen(PORT)
console.log(`server funcionando en puerto : ${PORT}`)
