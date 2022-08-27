const express= require('express')
const router = express.Router()

const productosRouter = require('./Productos')
const categoriasRouter = require('./categorias')

router.use('/productos',productosRouter)
router.use('/categorias',categoriasRouter)

module.exports=router