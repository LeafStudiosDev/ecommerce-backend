const express= require('express')
const router = express.Router()
const Producto = require('../models/productos')


router.get('/',(req,res)=>{
  res.send('lista items de productos')
})

router.put('/',(req,res)=>{
  res.send('actualiza item lista de todos los productos')
})

router.delete('/',(req,res)=>{
  res.send('borra item de lista de todos los productos')
})

router.post('/',async (req,res,next)=>{
  // res.send('add item de lista de todos los productos')
  //* realiza insercion producto REST API hacia mongo
  const {
    content,
    desc,
    name,
    price,
    Discount,
    total_price,
    categoria
  }= req.body

  if(!content){
    return res.status(400).json({
      error: 'require "content" field is missing'
    })
  }
  const newProducto= new Producto({
    Slug: content,
    desc: desc,
    name: name,
    price: price,
    Discount: Discount,
    total_price: total_price,
    categoria: categoria
  })
  try{
    const savedProduct = await newProducto.save()
    res.json(savedProduct)
  }catch(error){
    next(error)
  }

})


module.exports=router